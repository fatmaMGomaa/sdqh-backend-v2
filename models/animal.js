const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Animal = sequelize.define(
    "animal",
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
            type: Sequelize.ENUM ('مصر', 'الإمارات', "السعودية"),
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
            defaultValue: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIAB9wQIlVUILfxEDcGkvXKn3-9zQ_kTkZqSAcClsSRrHT_Sbz"
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
            type: Sequelize.ENUM("أخرى", "حيوانات مصابة", "حيوانات وجدت", "حيوانات للتبني"),
            defaultValue: 'أخرى',
            allowNull: false
        }
    },
    {
        timestamps: true
    }
);

module.exports = Animal;