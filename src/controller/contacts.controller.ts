import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common/decorators';
import { ContactsService } from '../contacts/contacts.service';
import { Contacts } from '../model/contacts.entity';

//Sirve como puente para conectar el service con la vista (Endpoint)

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}

  @Get()
  async findAll(): Promise<Contacts[]> {
    return await this.contactsService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Contacts> {
    return await this.contactsService.findOne(params.id);
  }

  @Post()
  async create(@Body() data: Contacts): Promise<Contacts> {
    return await this.contactsService.create(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: Contacts,
  ): Promise<void> {
    return await this.contactsService.update(id, data);
  }

  @Delete(':id')
  async destroy(@Param('id') id: number): Promise<void> {
    return await this.contactsService.destroy(id);
  }
}
