import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chantier } from 'src/types/Chantier';
import { CreateChantierDto } from './dto/create-chantier.dto';
import { UpdateChantierDto } from './dto/update-chantier.dto';
import { Travail } from 'src/types/Travail';

@Injectable()
export class ChantiersService {
  constructor(
    @InjectModel(Chantier.name) private readonly chantierModel: Model<Chantier>,
    @InjectModel(Travail.name) private readonly travailModel: Model<Travail>,
  ) {}

  async create(createChantierDto: CreateChantierDto) {
    const createdChantier = await this.chantierModel.create(createChantierDto);
    return createdChantier;
  }

  async findAll() {
    return this.chantierModel.find().exec();
  }

  async findOne(id: string) {
    return this.chantierModel.findOne({ _id: id }).exec();
  }

  async findOneTravaux(id: string) {
    return this.travailModel.find({ chantierId: id }).exec();
  }

  async update(id: string, form: UpdateChantierDto) {
    const updated = await this.chantierModel
      .findOneAndUpdate({ _id: id }, form, { new: true })
      .exec();
    return updated;
  }

  async remove(id: string) {
    const deletedChantier = await this.chantierModel.findOneAndDelete({
      _id: id,
    });

    await this.travailModel.deleteMany({
      chantierId: deletedChantier._id,
    });

    return deletedChantier;
  }
}
