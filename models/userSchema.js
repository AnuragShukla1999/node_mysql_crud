import { DataTypes } from 'sequelize';
import sequelize from '../db/db.js';

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    permission_role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "user"
    },

    resetToken: {
        type: DataTypes.STRING
    },
    resetTokenExpire: {
        type: DataTypes.DATE
    },

    // first_name: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    // },
    // last_name: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    // },
    // role_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // },
    // image: {
    //     type: DataTypes.STRING
    // },
    // permission_role: {
    //     type: DataTypes.STRING
    // }
},
    {
        tableName: 'users',
        timestamps: true,
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
    }
);

export default User;
