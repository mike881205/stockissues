module.exports = function (sequelize, DataTypes) {
    let POInfo = sequelize.define("POInfo", {
        PONum: {
            type: DataTypes.INTEGER,
            allowNull: false,
            len: [5]
        },
        design: {
            type: DataTypes.STRING,
            allowNull: false
        },
        issue: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    POInfo.associate = function (models) {
        POInfo.hasMany(models.Missing, {
            onDelete: "cascade"
        });
    };

    POInfo.associate = function (models) {
        POInfo.hasMany(models.Received, {
            onDelete: "cascade"
        });
    };

    return POInfo;
};