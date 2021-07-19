import { Project } from 'src/projects/project.entity';
import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Record } from './record.entity-type';

export enum PROJECT_AUTH {
  GUEST = 'GUEST',
  MANAGER = 'MANAGER',
  OWNER = 'OWNER',
}

@Entity()
export class ProjectToUser {
  @PrimaryGeneratedColumn()
  projectToUserId: number;

  @Column()
  authorization: PROJECT_AUTH;

  @Column(() => Record)
  record: Record;

  @ManyToOne(() => Project, (project) => project.projectToUser)
  project: Project;

  @ManyToOne(() => User, (user) => user.projectToUser)
  user: User;
}
