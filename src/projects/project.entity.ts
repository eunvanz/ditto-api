import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Record } from '../entity-types/record';

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
