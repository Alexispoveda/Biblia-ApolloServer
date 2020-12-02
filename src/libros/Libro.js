import {DataTypes} from 'sequelize';
import sequelize from '../db';
import Capitulo from '../capitulos/Capitulo';

const Libro = sequelize.define('Libro',{
    id_libro:{
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    nombre:DataTypes.STRING,
    abreviacion:DataTypes.STRING,
    testamento:DataTypes.STRING,
    qnt_capitulos:DataTypes.INTEGER
},{timestamps:false,tableName:'libros'})

Libro.hasMany(Capitulo,{foreignKey:'id_libro'})
Capitulo.belongsTo(Libro,{foreignKey:'id_libro'})

export default Libro