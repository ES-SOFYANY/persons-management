import {Injectable} from '@nestjs/common';
import Person from './person';
import {PersonEntity} from './person.entity';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class PersonService {
    constructor(
        @InjectRepository(PersonEntity)
        private readonly personRepository: Repository<PersonEntity>,
    ) {
    }

    removePerson(id: string) {
        return 'remove';
    }

    updatePerson(id: number, person: Person) {
        return this.personRepository.update(id, person);
    }

    createPerson(person: Person) {
        person.dateOfBirth = new Date(person.dateOfBirth);
        return this.personRepository.save(person);
    }

    getOnePerson(id: number) {
        return this.personRepository.findByIds([id]);
    }

    getAllPersons() {
        return this.personRepository.find();
    }
}
