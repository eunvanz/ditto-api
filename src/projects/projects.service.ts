import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './project.entity';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { UserDto } from 'src/users/dto/user.dto';
import {
  ProjectToUser,
  PROJECT_AUTH,
} from 'src/entities/project-to-user.entity';
import { User } from 'src/users/user.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectsRepository: Repository<Project>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(ProjectToUser)
    private readonly projectToUserRepository: Repository<ProjectToUser>,
  ) {}

  async findAllByUser(uid: string) {
    return await this.projectsRepository.find();
  }

  async findOne(id: string) {
    const project = await this.projectsRepository.findOne(id);
    if (!project) {
      throw new NotFoundException('Requested project is not found.');
    }
    return project;
  }

  async save(project: CreateProjectDto, user: UserDto) {
    const newProject = new Project();
    newProject.title = project.title;
    newProject.description = project.description;

    const newUser = new User();
    newUser.email = user.email;
    newUser.id = user.uid;
    newUser.name = user.name;

    await this.userRepository.save(newUser);
    const createdProject = await this.projectsRepository.save(project);

    const projectToUser = new ProjectToUser();
    projectToUser.project = createdProject;
    projectToUser.user = newUser;
    projectToUser.authorization = PROJECT_AUTH.OWNER;

    await this.projectToUserRepository.save(projectToUser);

    return createdProject;
  }

  async update(id: string, project: UpdateProjectDto) {
    const oldProject = await this.findOne(id);
    return await this.projectsRepository.update(id, {
      ...oldProject,
      ...project,
    });
  }

  async delete(id: string) {
    await this.findOne(id);
    return await this.projectsRepository.delete(id);
  }
}
