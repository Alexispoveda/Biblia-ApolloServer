const {DataTypes} = require('sequelize')
const sequelize = require('../db')
const {Capitulo} = require('../capitulos/Capitulo')

const Versiculo = sequelize.define('Versiculo',{
    id_versiculo:{
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    id_capitulo:DataTypes.INTEGER,
    num_versiculo:DataTypes.INTEGER,
    texto:DataTypes.STRING
}
,{timestamps:false,tableName:'versiculos'});

module.exports = {Versiculo}