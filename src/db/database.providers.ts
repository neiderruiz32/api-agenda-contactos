import { Sequelize } from 'sequelize-typescript';
import { Contacts } from '../model/contacts.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'libreta-contactos',
      });
      sequelize.addModels([Contacts]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
