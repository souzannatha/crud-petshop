import { PetEntity } from 'src/entities/pet.entity';
import { DataSource } from 'typeorm';

export const petProviders = [
  {
    provide: 'PET_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(PetEntity),
    inject: ['DATA_SOURCE'],
  },
];
