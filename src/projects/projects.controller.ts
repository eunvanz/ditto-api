import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get('/user')
  async findAllByUser(@Headers('uid') uid: string) {
    return await this.projectsService.findAllByUser(uid);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.projectsService.findOne(id);
  }

  @Post()
  async save(@Body() project: CreateProjectDto) {
    return await this.projectsService.save(project);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() project: UpdateProjectDto) {
    return await this.projectsService.update(id, project);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.projectsService.delete(id);
  }
}
