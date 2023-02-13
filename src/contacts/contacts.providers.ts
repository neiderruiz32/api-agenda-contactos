import { Contacts } from "../model/contacts.entity";

export const ContactsProviders = [
  {
    provide: 'CONTACTS_REPOSITORY',
    useValue: Contacts,
  },
];
