import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Record } from '../entities/record.entity-type';

@Entity('PROJECT')
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column(() => Record)
  record: Record;

  @Column()
  title: string;

  @Column({
    nullable: true,
  })
  description?: string;
}
