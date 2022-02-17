/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import RepoModule from './repo.module'
import UserResolver from './resolvers/input/user.resolver'
import { GraphQLModule } from '@nestjs/graphql';

import * as ormOptions from './config/orm'

const gqlImports = [UserResolver]

@Module({
  imports: [TypeOrmModule.forRoot(ormOptions), RepoModule, ...gqlImports, GraphQLModule.forRoot({
    autoSchemaFile: 'schema.gql',
    playground: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
