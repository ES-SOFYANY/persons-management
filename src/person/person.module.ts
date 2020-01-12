import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PersonService} from './person.service';
import {PersonController} from './person.controller';
import {PersonEntity} from './person.entity';

@Module({
    imports: [TypeOrmModule.forFeature([PersonEntity])],
    providers: [PersonService],
    controllers: [PersonController],
    exports: [TypeOrmModule],
})
export class PersonModule {
}
