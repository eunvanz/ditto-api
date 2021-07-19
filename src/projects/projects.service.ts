import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './project.entity';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectsRepository: Repository<Project>,
  ) {}

  async findAll() {
    return await this.projectsRepository.find();
  }

  async findOne(id: string) {
    const project = await this.projectsRepository.findOne(id);
    if (!project) {
      throw new NotFoundException('Requested project is not found.');
    }
    return project;
  }

  async save(project: CreateProjectDto) {
    return await this.projectsRepository.save(project);
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
