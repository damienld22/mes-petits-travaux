import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ChantiersService } from './chantiers.service';
import { CreateChantierDto } from './dto/create-chantier.dto';
import { UpdateChantierDto } from './dto/update-chantier.dto';

@Controller('chantiers')
export class ChantiersController {
  constructor(private readonly chantiersService: ChantiersService) {}

  @Post()
  create(@Body() createChantierDto: CreateChantierDto) {
    return this.chantiersService.create(createChantierDto);
  }

  @Get()
  findAll() {
    return this.chantiersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chantiersService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateChantierDto: UpdateChantierDto,
  ) {
    return this.chantiersService.update(id, updateChantierDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chantiersService.remove(id);
  }
}
