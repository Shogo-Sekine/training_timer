import { TrainingMenu } from '../models/TrainingMenu';

export interface TrainingTable {
  tableId: string;
  menus: TrainingMenu[];
  createdAt: Date;
  updatedAt: Date;
}