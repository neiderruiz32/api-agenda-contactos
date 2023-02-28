import { Contacts } from "../model/contacts.entity";

//Proveedor para darle identidad a los servicios 

export const ContactsProviders = [
  {
    provide: 'CONTACTS_REPOSITORY',
    useValue: Contacts,
  },
];
