import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ChantiersService } from './chantiers.service';
import { CreateChantierDto } from './dto/create-chantier.dto';
import { UpdateChantierDto } from './dto/update-chantier.dto';
import { ApiKeyGuard } from 'src/ApiKeyGuard';

@Controller('chantiers')
@UseGuards(ApiKeyGuard)
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
  async remove(@Param('id') id: string) {
    const deletedChantier = await this.chantiersService.remove(id);
    return deletedChantier;
  }
}
