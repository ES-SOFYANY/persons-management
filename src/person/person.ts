import {ApiProperty} from '@nestjs/swagger';

export default class Person {
    @ApiProperty()
    name: string;

    @ApiProperty()
    age: number;

    @ApiProperty()
    dateOfBirth: Date;
}
