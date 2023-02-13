import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ToshlEntity } from './toshl.entity';
import { Repository } from 'typeorm';
import { ToshlRecord } from '../dto/toshlRecord';
import { ToshlCategory } from '../dto/toshlCategory';
import { CategoryEntity } from './entities/toshlCategory.entity';
import * as console from 'console';

const short = require('short-uuid');

@Injectable()
export class ToshlService {
  constructor(
    @InjectRepository(ToshlEntity)
    private usersRepository: Repository<ToshlEntity>,
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
  ) {
    console.log('toshl controller constructor');
  }

  getAll() {
    return this.usersRepository.find();
  }

  insertOne(toshl: ToshlRecord) {
    const cost = toshl.amount;
    return this.usersRepository.save({
      date: toshl.date,
      spendingAmount: cost > 0 ? 0 : cost,
      incomeAmount: cost > 0 ? cost : 0,
      account: toshl.account,
      category: toshl.category,
      tag: toshl.tags.join(','),
    });
  }

  insertCategory(toshlCategory: ToshlCategory) {
    return this.categoryRepository.save({
      id: short().new(),
      name: toshlCategory.name,
      name_override: toshlCategory.name_override,
      modified: toshlCategory.modified,
      type: toshlCategory.type,
      deleted: toshlCategory.deleted,
    });
  }
}