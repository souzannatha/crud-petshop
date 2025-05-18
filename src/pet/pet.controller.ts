import { Body, Controller, Post } from '@nestjs/common';
import { CreatePetDto } from 'src/database/dto/create-pet.dto';
import { PetService } from './pet.service';

@Controller('pet')
export class PetController {
  constructor(private petService: PetService) {}

  @Post()
  createPet(@Body() createPetDto: CreatePetDto) {
    return this.petService.createPet(createPetDto);
  }
}
