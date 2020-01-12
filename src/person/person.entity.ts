import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('person')
export class PersonEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text'})
    name: string;

    @Column('int')
    age: number;

    @Column('date')
    dateOfBirth: Date;
}
