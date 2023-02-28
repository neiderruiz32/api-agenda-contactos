import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { DatabaseModule } from './db/database.module';

//Importamos todo lo realizado para darle funcionalidad 

@Module({
  imports: [DatabaseModule, ContactsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
