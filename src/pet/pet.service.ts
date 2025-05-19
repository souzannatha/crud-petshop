import {
  Body,
  Inject,
  Injectable,
  NotFoundException,
  Delete,
} from '@nestjs/common';
import { CreatePetDto } from 'src/database/dto/create-pet.dto';
import { UpdatePetDto } from 'src/database/dto/update-pet.dto';
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

  async findOne(id: number) {
    const pet = await this.petRepository.findOne({ where: { id } });
    if (!pet) {
      throw new NotFoundException('Pet não encontrado');
    }
    return pet;
  }

  async findAll(): Promise<PetEntity[]> {
    return this.petRepository.find();
  }

  async removePet(id: number) {
    const pet = await this.petRepository.findOne({ where: { id } });
    if (!pet) {
      throw new NotFoundException('pet não encontrado.');
    }
    return await this.petRepository.remove(pet);
  }

  async update(id: number, updatePetDto: UpdatePetDto) {
    await this.petRepository.update(id, updatePetDto);
    return this.petRepository.findOne({ where: { id } });
  }
}
