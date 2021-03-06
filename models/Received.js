module.exports = (sequelize, DataTypes) => {
    let Received = sequelize.define("Received", {
        POnum: {
            type: DataTypes.STRING,
            allowNull: false
        },
        design: {
            type: DataTypes.STRING,
            allowNull: false,
        },
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
            allowNull: false
        },
        small: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        medium: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        large: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        xLarge: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        twoXL: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        threeXL: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fourXL: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fiveXL: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Received.associate = (models) => {
        Received.belongsTo(models.POInfo, {
            onDelete: "cascade"
        });
    };

    return Received;
};