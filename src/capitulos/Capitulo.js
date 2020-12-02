import {DataTypes} from 'sequelize';
import sequelize from '../db';
import Versiculo from '../versiculos/Versiculo'

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

export default Capitulo