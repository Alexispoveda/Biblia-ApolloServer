const {DataTypes} = require('sequelize');
const sequelize = require('../db');
const {Versiculo} = require('../versiculos/Versiculo');

const Capitulo = sequelize.define('Capitulo',{
    id_capitulo:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_libro:DataTypes.INTEGER,
    numero_capitulo:DataTypes.INTEGER,
    qnt_versiculos:DataTypes.INTEGER
},{timestamps:false,tableName:'capitulos'})

Capitulo.hasMany(Versiculo,{foreignKey:'id_capitulo'})
Versiculo.belongsTo(Capitulo,{foreignKey:'id_capitulo'})

module.exports = {Capitulo}