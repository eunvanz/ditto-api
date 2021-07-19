import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Project } from './project.entity';
import { mockProject } from './project.mock';
import { ProjectsService } from './projects.service';

class MockRepository {
  async find() {
    return mockProject.projects;
  }
}

describe('ProjectsService', () => {
  let service: ProjectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProjectsService,
        { provide: getRepositoryToken(Project), useClass: MockRepository },
      ],
    }).compile();

    service = module.get<ProjectsService>(ProjectsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('전체 프로젝트를 조회한다.', async () => {
      const result = await service.findAll();

      expect(result).toBe(mockProject.projects);
    });
  });
});
