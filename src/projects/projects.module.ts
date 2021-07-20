import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectToUser } from 'src/entities/project-to-user.entity';
import { RequireMiddleware } from 'src/middlewares/require.middleware';
import { Project } from 'src/projects/project.entity';
import { User } from 'src/users/user.entity';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';

@Module({
  imports: [TypeOrmModule.forFeature([Project, ProjectToUser, User])],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequireMiddleware).forRoutes(ProjectsController);
  }
}
