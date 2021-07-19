import { ProjectToUser } from 'src/entities/project-to-user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Record } from '../entities/record.entity-type';

@Entity('subject')
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

  @OneToMany(() => ProjectToUser, (projectToUser) => projectToUser.project)
  projectToUser: ProjectToUser[];
}
