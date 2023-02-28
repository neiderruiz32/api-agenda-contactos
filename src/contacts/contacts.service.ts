import { Inject, Injectable } from '@nestjs/common';
import { Contacts } from '../model/contacts.entity';

//Encontramos la realización del CRUD 

@Injectable()
export class ContactsService {
  constructor(
    @Inject('CONTACTS_REPOSITORY')
    private contactsRepository: typeof Contacts,
  ) {}

  async findAll(): Promise<Contacts[]> {
    return await this.contactsRepository.findAll<Contacts>();
  }

  async findOne(id: number): Promise<Contacts> {
    return await this.contactsRepository.findByPk<Contacts>(id);
  }

  async create(data: Contacts): Promise<Contacts> {
    return await this.contactsRepository.create<Contacts>({ ...data });
  }

  async update(id: number, data: Contacts): Promise<void> {
    const [updated] = await this.contactsRepository.update(data, {
      where: { id },
      returning: true,
    });

    if (!updated) {
      throw new Error(`data with id ${id} not found`);
    }
  }

  async destroy(id: number) {
    const deleted = await this.contactsRepository.destroy({ where: { id } });

    if (!deleted) {
      throw new Error(`data with id ${id} not found`);
    }
  }
}
