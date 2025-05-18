import { Body, Inject, Injectable } from '@nestjs/common';
import { CreatePetDto } from 'src/database/dto/create-pet.dto';
import { PetEntity } from 'src/entities/pet.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PetService {
  constructor(
    @Inject('PET_REPOSITORY')
    private petRepository: Repository<PetEntity>,
  ) {}

  async createPet(createPetDto: CreatePetDto) {
    const newPet = this.petRepository.create(createPetDto);
    return this.petRepository.save(newPet);
  }
}
