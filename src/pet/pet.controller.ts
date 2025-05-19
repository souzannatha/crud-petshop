import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreatePetDto } from 'src/database/dto/create-pet.dto';
import { PetService } from './pet.service';
import { PetEntity } from 'src/entities/pet.entity';

@Controller('pet')
export class PetController {
  constructor(private petService: PetService) {}

  @Post()
  createPet(@Body() createPetDto: CreatePetDto) {
    return this.petService.createPet(createPetDto);
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.petService.findOne(+id);
  }

  @Get()
  async findAllPets() {
    return this.petService.findAll();
  }
}
