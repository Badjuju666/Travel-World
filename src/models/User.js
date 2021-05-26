const { Model, DataTypes } = require('mongoose');
const mongoose = require('../config/connection.js');
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [4]
            }
        }
    },

    {
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        },
        mongoose,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'User'
    },
    {
        mongoose
    }
);

module.exports = User;
