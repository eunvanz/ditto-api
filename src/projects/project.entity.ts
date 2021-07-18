import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Record } from '../entity-types/record';

@Entity('PROJECT')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column(() => Record)
  record: Record;

  @Column()
  title: string;

  @Column()
  description: string;
}
