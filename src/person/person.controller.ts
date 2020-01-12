import {Body, Controller, Delete, Get, HttpCode, Param, Post, Put} from '@nestjs/common';
import {PersonService} from './person.service';
import Person from './person';

@Controller('/persons')
export class PersonController {
  constructor(private readonly appService: PersonService) {
  }

  @Get()
  getAllPersons() {
    return this.appService.getAllPersons();
  }

  @Get(':id')
  getPerson(@Param('id') id: number) {
    return this.appService.getOnePerson(id);
  }

  @HttpCode(201)
  @Post()
  createPerson(@Body() person: Person) {
    return this.appService.createPerson(person);
  }

  @Put(':id')
  updatePerson(@Param('id') id: number, @Body() person: Person) {
    return this.appService.updatePerson(id, person);
  }

  @Delete(':id')
  removePerson(@Param('id') id: string): string {
    return this.appService.removePerson(id);
  }
}
