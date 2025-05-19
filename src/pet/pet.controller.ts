import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePetDto } from 'src/database/dto/create-pet.dto';
import { PetService } from './pet.service';
import { UpdatePetDto } from 'src/database/dto/update-pet.dto';

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

  @Delete(':id')
  async removePet(@Param('id') id: string) {
    return this.petService.removePet(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
    return this.petService.update(+id, updatePetDto);
  }
}
