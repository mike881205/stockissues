module.exports = function (sequelize, DataTypes) {
    let Missing = sequelize.define("Missing", {
        brand: {
            type: DataTypes.STRING,
            allowNull: false
        },
        style: {
            type: DataTypes.STRING,
            allowNull: false
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false
        },
        xSmall: {
            type: DataTypes.INTEGER,
        },
        small: {
            type: DataTypes.INTEGER,
        },
        medium: {
            type: DataTypes.INTEGER,
        },
        large: {
            type: DataTypes.INTEGER,
        },
        xLarge: {
            type: DataTypes.INTEGER,
        },
        twoXL: {
            type: DataTypes.INTEGER,
        },
        threeXL: {
            type: DataTypes.INTEGER,
        },
        fourXL: {
            type: DataTypes.INTEGER,
        },
        fiveXL: {
            type: DataTypes.INTEGER,
        }
    });

    Missing.associate = function (models) {
        Missing.belongsTo(models.POInfo, {
            onDelete: "cascade"
        });
    };

    return Missing;
};