import {DataTypes} from 'sequelize';
import sequelize from '../db';

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

export default Versiculo