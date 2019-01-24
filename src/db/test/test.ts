import * as Sequelize from 'sequelize';

interface TestAttributes {
    testID: number;
    testName: string;
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

type TestInstance = Sequelize.Instance <TestAttributes> & TestAttributes;
type TestModel = Sequelize.Model <TestInstance, TestAttributes> ;

export function initTest(sequalize: Sequelize.Sequelize): TestModel {
    const attributes = {
        testID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        testName: { 
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
    const Test = sequalize.define <TestInstance,
        TestAttributes> ('Test', attributes);
    return Test;
};