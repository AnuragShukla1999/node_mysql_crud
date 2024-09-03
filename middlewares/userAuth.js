import jwt from 'jsonwebtoken';


export const userAuth = async (req, res, next) => {
    const authHeader = req.header('authorization');

    if (!authHeader) {
        return res.status(401).json({ error: 'Access denied, No token provided.' });
    }
    const token = authHeader.replace('Bearer ', '');

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(500).json({ message: "Hello error from middleware" });
    }
};


export const verifyToken = (role) => {
    return (req, res, next) => {
        const token = req.headers['authorization'];
        if (!token) {
            return res.status(403).json({ message: 'No token provided' });
        }
        jwt.verify(token, role, (err, decode) => {
            if (err) {
                return res.status(500).json({ message: err.message });
            }
            if (decode.role !== role) {
                return res.status(403).json({ message: 'Unauthorized access' });
            }
            req.userId = decode.id;
            next();
        });
    };
};



export const authorizedRole = (...roles) => {
    return (req, res, next) => {
        const token = req.headers['authorization'];

        if (!token) {
            return res.status(403).json({ message: "No Token provided for authorization" })
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Unauthorized' });
            }

            if (!roles.includes(decoded.role)) {
                return res.status(403).json({ message: 'Forbidden' });
            }

            req.user = decoded;
            next();
        })
    }
}