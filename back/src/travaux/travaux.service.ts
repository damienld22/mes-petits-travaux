import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Travail } from 'src/types/Travail';
import { CreateTravauxDto } from './dto/create-travaux.dto';
import { UpdateTravauxDto } from './dto/update-travaux.dto';
import { Chantier } from 'src/types/Chantier';

@Injectable()
export class TravauxService {
  constructor(
    @InjectModel(Travail.name) private readonly travailModel: Model<Travail>,
    @InjectModel(Chantier.name) private readonly chantierModel: Model<Travail>,
  ) {}

  async create(createTravauxDto: CreateTravauxDto) {
    // Check if the chantierId exists
    const chantier = await this.chantierModel.findOne({
      _id: createTravauxDto.chantierId,
    });

    if (!chantier) {
      throw new HttpException(
        'The chantierId is invalid',
        HttpStatus.BAD_REQUEST,
      );
    }

    const createdTravail = await this.travailModel.create(createTravauxDto);
    return createdTravail;
  }

  async findAll() {
    return this.travailModel.find().exec();
  }

  async findOne(id: string) {
    return this.travailModel.findOne({ _id: id }).exec();
  }

  async update(id: string, form: UpdateTravauxDto) {
    const updated = await this.travailModel
      .findOneAndUpdate({ _id: id }, form, { new: true })
      .exec();
    return updated;
  }

  async remove(id: string) {
    const deletedTravail = await this.travailModel.findOneAndDelete({
      _id: id,
    });
    return deletedTravail;
  }
}
