import { Module } from '@nestjs/common';
import { ContactsController } from '../controller/contacts.controller';
import { ContactsProviders } from './contacts.providers';
import { ContactsService } from './contacts.service';

@Module({
  controllers: [ContactsController],
  providers: [ContactsService, ...ContactsProviders],
})
export class ContactsModule {}
