module.exports = function (sequelize, DataTypes) {
    let PO = sequelize.define("PO", {
        po: {
            type: DataTypes.STRING,
            allowNull: false
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