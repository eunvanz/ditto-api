import { ProjectToUser } from 'src/entities/project-to-user.entity';
import { Recordable } from 'src/entities/recordable.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subject')
export class Project extends Recordable {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({
    nullable: true,
  })
  description?: string;

  @OneToMany(() => ProjectToUser, (projectToUser) => projectToUser.project)
  projectToUser: Promise<ProjectToUser[]>;
}
