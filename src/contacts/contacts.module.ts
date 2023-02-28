import { Module } from '@nestjs/common';
import { ContactsController } from '../controller/contacts.controller';
import { ContactsProviders } from './contacts.providers';
import { ContactsService } from './contacts.service';

//Modulo donde se exportan los controladores, servicios y proveedores.

@Module({
  controllers: [ContactsController],
  providers: [ContactsService, ...ContactsProviders],
})
export class ContactsModule {}
