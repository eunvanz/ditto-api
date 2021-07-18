import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from 'src/projects/project.entity';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}