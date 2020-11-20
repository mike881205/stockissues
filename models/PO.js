module.exports = (sequelize, DataTypes) => {
    let POInfo = sequelize.define("POInfo", {
        POnum: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [5]
        },
        design: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        issue: {
            type: DataTypes.STRING,
            allowNull: false
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    // POInfo.associate = (models) => {
    //     POInfo.hasMany(models.Missing, {
    //         onDelete: "cascade"
    //     });
    // };

    POInfo.associate = (models) => {
        POInfo.hasMany(models.Missing, {
            onDelete: "cascade"
        });
        POInfo.hasMany(models.Received, {
            onDelete: "cascade"
        });
    };

    return POInfo;
};