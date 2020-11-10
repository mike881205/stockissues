module.exports = function (sequelize, DataTypes) {
    let PO = sequelize.define("PO", {
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
        },
        complete: {
            type: DataTypes.BOOLEAN,
            value: false,
            allowNull: false
        },        
        RA: {
            type: DataTypes.STRING,
        }
    });

    PO.associate = function (models) {
        PO.hasMany(models.Missing, {
            onDelete: "cascade"
        });
    };

    PO.associate = function (models) {
        PO.hasMany(models.Received, {
            onDelete: "cascade"
        });
    };

    return PO;
};