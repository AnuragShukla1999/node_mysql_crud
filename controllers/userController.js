import User from "../models/userSchema.js"
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import CryptoJS from 'crypto-js';
import nodemailer from 'nodemailer';
import { Op } from "sequelize";

//   User Registration 
export const register = async (req, res) => {
    const { username, password, email, permission_role } = req.body;

    try {
        const hashedPassword = await bcryptjs.hashSync(password, 10);

        const newUser = await User.create({
            username,
            password: hashedPassword,
            email,
            permission_role
        });

        res.status(201).json({ message: 'User registered successfully', data: newUser });
    } catch (error) {
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            res.status(400).json({ error: 'Validation error', message: error.errors.map(e => e.message).join(', ') });
        } else {
            res.status(500).json({ error: 'An error occured during registration', message: error.message });
        }
    }
};



// User Login function
export const login = async (req, res) => {
    const { email, password, permission_role } = req.body;

    // Debugging log
    // console.log('Login Request:', { email, password });
    try {
        const user = await User.findOne({ where: { email: email } });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' })
        }
        const validPassword = await bcryptjs.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }


        // Encrypt data using crypto-js
        const encryptData = (data, secret) => {
            const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), secret).toString();
            return ciphertext;
        };


        const payload = { id: user.id, role: user.permission_role };

        // Encrypt the payload
        const encryptedPayload = encryptData(payload, process.env.ENCRYPT_SECRET);

        // Generate the JWT with the encrypted payload
        const token = jwt.sign({ data: encryptedPayload }, process.env.JWT_SECRET, { expiresIn: '5m' });

        // const token = jwt.sign({ id: user.id, role: user.permission_role }, process.env.JWT_SECRET, { expiresIn: '1h' } );

        // // Set the JWT token as a cookie with 30 seconds expiration
        // res.cookie('token', token, {
        //     httpOnly: true,  // The cookie cannot be accessed via client-side JavaScript
        //     maxAge: 30000,   // The cookie will expire in 30 seconds (30,000 milliseconds)
        //     secure: process.env.NODE_ENV === 'production', // Send cookie over HTTPS only in production
        //     sameSite: 'strict' // Helps mitigate CSRF attacks
        // });

        // const access_token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_LIFETIME });

        const responseData = {
            user_id: user.id,
            email: user.email,
            role: permission_role,
            token: token
        };

        res.status(201).json({ message: "Login Successfully", data: responseData })
    } catch (error) {
        res.status(500).json({ error: 'An error occured during login', message: error.message })
    }
};






// export const forget_password = async (req, res) => {
//     const { email } = req.body;
//     try {
//         const user = await User.findOne({ where: { email: email } });
//         if (!user) {
//             res.status(400).json({
//                 message: "user not exist"
//             })
//         };

//         console.log(user)

//         const resetToken = CryptoJS.lib.WordArray.random(16).toString(CryptoJS.enc.Hex);
//         console.log('Generated resetToken:', resetToken);

//         user.resetToken = CryptoJS.SHA256(resetToken).toString(CryptoJS.enc.Hex);
//         console.log('Hashed resetToken:', user.resetToken);

//         user.resetTokenExpire = Date.now() + 1 * 60 * 1000; // Token valid for 1 minutes
//         await user.save();

//         const resetUrl = `http://localhost:3000/api/reset-password/${resetToken}`;

//         const transporter = nodemailer.createTransport({
//             service: 'Gmail',
//             auth: {
//                 user: process.env.EMAIL,
//                 pass: process.env.EMAIL_PASSWORD,
//             },
//         });

//         const mailOptions = {
//             from: process.env.EMAIL,
//             to: user.email,
//             subject: 'Password Reset Request',
//             text: `You requested a password reset. Please go to this link to reset your password: \n\n ${resetUrl}`,
//         };

//         await transporter.sendMail(mailOptions);
//         res.status(200).json({ message: 'Email sent for Forget Password' });

//     } catch (error) {
//         res.status(500).json({
//             message: "Hello error from forget_password api"
//         })
//     }
// };






export const forget_password = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ where: { email: email } });
        if (!user) {
            return res.status(400).json({
                message: "User does not exist"
            });
        }

        console.log('User found:', user);

        const resetToken = CryptoJS.lib.WordArray.random(16).toString(CryptoJS.enc.Hex);
        console.log('Generated resetToken:', resetToken);

        user.resetToken = CryptoJS.SHA256(resetToken).toString(CryptoJS.enc.Hex);
        console.log('Hashed resetToken:', user.resetToken);

        user.resetTokenExpire = Date.now() + 1 * 60 * 1000; // Token valid for 1 minute
        console.log('Reset token expiry time:', user.resetTokenExpire);

        await user.save();
        console.log('User saved with new reset token');

        const resetUrl = `http://localhost:3000/api/reset-password/${resetToken}`;
        console.log('Reset URL:', resetUrl);

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: user.email,
            subject: 'Password Reset Request',
            text: `You requested a password reset. Please go to this link to reset your password: \n\n ${resetUrl}`,
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');

        res.status(200).json({ message: 'Email sent for Forget Password' });

    } catch (error) {
        console.error('Error in forget_password:', error);
        res.status(500).json({
            message: "Hello error from forget_password api",
            error: error.message
        });
    }
};







export const reset_password = async (req, res) => {
    try {
        const { resetToken } = req.params;
        const { password } = req.body;

        const hashedToken = CryptoJS.SHA256(resetToken).toString(CryptoJS.enc.Hex);

        // const user = await User.findOne({
        //     resetToken: hashedToken,
        //     resetTokenExpire: { $gt: Date.now() },
        // });


        const user = await User.findOne({
            where: {
                resetToken: hashedToken,
                resetTokenExpire: {
                    [Op.gt]: Date.now()
                }
            }
        });

        if (!user) {
            return res.status(400).json({ message: 'Invalid or expired token' });
        }

        user.password = await bcryptjs.hashSync(password, 10);
        user.resetToken = undefined;
        user.resetTokenExpire = undefined;
        await user.save();

        res.status(200).json({ message: 'Password reset successful' });
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};




export const change_password = async (req, res) => {
    try {
        const { email, currentPassword, newPassword } = req.body;

        const user = await User.findOne({ where: { email: email } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await bcryptjs.compareSync(currentPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Current password is incorrect' });
        }

        user.password = await bcryptjs.hashSync(newPassword, 10);
        await user.save();

        res.status(200).json({ message: 'Password changed successfully' });
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}