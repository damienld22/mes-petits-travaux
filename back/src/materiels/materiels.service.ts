import { Injectable } from '@nestjs/common';
import { CreateMaterielDto } from './dto/create-materiel.dto';
import { UpdateMaterielDto } from './dto/update-materiel.dto';
import { Materiel } from 'src/types/Materiel';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MaterielsService {
  constructor(
    @InjectModel(Materiel.name) private readonly materielModel: Model<Materiel>,
  ) {}

  async create(createMaterielDto: CreateMaterielDto) {
    const createdMateriel = await this.materielModel.create(createMaterielDto);
    return createdMateriel;
  }

  async findAll() {
    return this.materielModel.find().exec();
  }

  async findOne(id: string) {
    return this.materielModel.findOne({ _id: id }).exec();
  }

  async update(id: string, form: UpdateMaterielDto) {
    const updated = await this.materielModel
      .findOneAndUpdate({ _id: id }, form, { new: true })
      .exec();
    return updated;
  }

  async remove(id: string) {
    const deleted = await this.materielModel.findOneAndDelete({
      _id: id,
    });

    return deleted;
  }
}
