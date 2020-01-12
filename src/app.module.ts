import {Module} from '@nestjs/common';
import {PersonController} from './person/person.controller';
import {PersonService} from './person/person.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PersonEntity} from './person/person.entity';
import {PersonModule} from './person/person.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'persons',
            entities: [PersonEntity],
            synchronize: true,
        }),
        PersonModule,
    ],
})
export class AppModule {
}
