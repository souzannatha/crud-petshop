import { petProviders } from '../pet/pet.providers';
import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

@Module({
  providers: [...databaseProviders, ...petProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
