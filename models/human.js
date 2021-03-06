const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Human = sequelize.define(
    "human",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        area: {
            type: Sequelize.ENUM('مصر', 'الإمارات', "السعودية"),
            defaultValue: 'مصر',
            allowNull: false
        },
        city: {
                type: Sequelize.STRING,
                allowNull: true
        },
        address: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        uniqueSign: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        image: {
            type: Sequelize.TEXT,
            defaultValue: "https://34yigttpdc638c2g11fbif92-wpengine.netdna-ssl.com/wp-content/uploads/2016/09/default-user-img.jpg"
        },
        phone: Sequelize.STRING,
        lat: {
            type: Sequelize.DECIMAL(9, 6),
            allowNull: false
        },
        lng: {
            type: Sequelize.DECIMAL(9, 6),
            allowNull: false
        },
		tag: {
            type: Sequelize.ENUM("أخرى", "أطفال برفقة متسولين", "أطفال شوارع", "مسنون مشردون", "أغراض وجدت"),
            defaultValue: 'أخرى',
            allowNull: false
        }
    },
    {
        timestamps: true
    }
);

module.exports = Human;