import * as Sequelize from 'sequelize';

interface UserAttributes {
    userID: number;
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    address ? : string;
    phone ? : string;
    emailVerifiedAt ? : string;
    createdAt: string;
    updatedAt: string;
    token ? : string;
}

type UserInstance = Sequelize.Instance <UserAttributes> & UserAttributes;
type UserModel = Sequelize.Model <UserInstance, UserAttributes> ;

export function initUser(sequalize: Sequelize.Sequelize): UserModel {
    const attributes = {
        userID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userName: { 
            type: Sequelize.TEXT
        },
        firstName: { 
            type: Sequelize.TEXT
        },
        lastName: { 
            type: Sequelize.TEXT
        },
        email: { 
            type: Sequelize.TEXT
        },
        address: { 
            type: Sequelize.TEXT
        },
        phone: { 
            type: Sequelize.TEXT
        },
        emailVerifiedAt: { 
            type: Sequelize.DATE
        },
        createdAt: { 
            type: Sequelize.DATE
        },
        updatedAt: { 
            type: Sequelize.DATE
        },
        token: { 
            type: Sequelize.TEXT
        },
    };
    const User = sequalize.define <UserInstance,
        UserAttributes> ('User', attributes);
    return User;
};