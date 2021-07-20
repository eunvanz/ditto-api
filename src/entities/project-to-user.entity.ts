import { Project } from 'src/projects/project.entity';
import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Recordable } from './recordable.entity';

export enum PROJECT_AUTH {
  GUEST = 'GUEST',
  MANAGER = 'MANAGER',
  OWNER = 'OWNER',
}

@Entity()
export class ProjectToUser extends Recordable {
  @PrimaryGeneratedColumn()
  projectToUserId: number;

  @Column()
  authorization: PROJECT_AUTH;

  @ManyToOne(() => Project, (project) => project.projectToUser)
  project: Project;

  @ManyToOne(() => User, (user) => user.projectToUser)
  user: User;
}
