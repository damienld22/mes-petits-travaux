import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TravauxService } from './travaux.service';
import { CreateTravauxDto } from './dto/create-travaux.dto';
import { UpdateTravauxDto } from './dto/update-travaux.dto';

@Controller('travaux')
export class TravauxController {
  constructor(
    private readonly travauxService: TravauxService, // private readonly chantierService: ChantiersService,
  ) {}

  @Post()
  async create(@Body() createTravauxDto: CreateTravauxDto) {
    return this.travauxService.create(createTravauxDto);
  }

  @Get()
  findAll() {
    return this.travauxService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.travauxService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTravauxDto: UpdateTravauxDto) {
    return this.travauxService.update(id, updateTravauxDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.travauxService.remove(id);
  }
}
