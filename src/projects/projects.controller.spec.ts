import { Test, TestingModule } from '@nestjs/testing';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';

describe('ProjectsController', () => {
  let controller: ProjectsController;

  const mockProjectsService = {
    findOne: jest.fn(),
    findAllByUser: jest.fn(),
    save: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectsController],
      providers: [ProjectsService],
    })
      .overrideProvider(ProjectsService)
      .useValue(mockProjectsService)
      .compile();

    controller = module.get<ProjectsController>(ProjectsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findOne', () => {
    it('id로 프로젝트를 조회한다.', () => {
      controller.findOne('testId');

      expect(mockProjectsService.findOne).toBeCalledWith('testId');
    });
  });

  describe('findAllByUser', () => {
    it('유저의 모든 프로젝트를 조회한다.', () => {
      controller.findAllByUser('testUid');

      expect(mockProjectsService.findAllByUser).toBeCalledWith('testUid');
    });
  });

  describe('save', () => {
    it('프로젝트를 저장한다.', () => {
      const newProject: CreateProjectDto = {
        title: '디또',
      };

      controller.save(newProject);

      expect(mockProjectsService.save).toBeCalledWith(newProject);
    });
  });

  describe('update', () => {
    it('프로젝트를 갱신한다.', () => {
      const newProject: UpdateProjectDto = {
        description: '테스트 프로젝트',
      };

      controller.update('testId', newProject);

      expect(mockProjectsService.update).toBeCalledWith('testId', newProject);
    });
  });

  describe('delete', () => {
    it('프로젝트를 삭제한다.', () => {
      controller.delete('testId');

      expect(mockProjectsService.delete).toBeCalledWith('testId');
    });
  });
});
