import { Table, Column, Model, DataType } from 'sequelize-typescript';

//Creación de la tabla por medio de Sequelize

@Table
export class Contacts extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nombres: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  apellidos: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  celular: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  telefono: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  correo: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  direccion: string;
}
