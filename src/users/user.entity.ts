import { ProjectToUser } from 'src/entities/project-to-user.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity('member')
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @OneToMany(() => ProjectToUser, (projectToUser) => projectToUser.user)
  projectToUser: ProjectToUser;
}
