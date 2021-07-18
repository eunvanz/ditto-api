import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Record } from './record.entity';

@Entity()
export class Project extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column((type) => Record)
  record: Record;

  @Column()
  title: string;

  @Column()
  description: string;
}
