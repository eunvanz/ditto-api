import { Project } from './project.entity';

const project: Project = {
  id: 'test-uuid',
  title: '디또',
  description: '테스트 프로젝트',
  record: {
    createdAt: '2021-07-18T17:33:38.000Z',
    updatedAt: '2021-07-18T17:33:38.000Z',
    createdBy: null,
    updatedBy: null,
  },
};

const projects: Project[] = [
  {
    id: 'test-uuid-1',
    title: '디또',
    description: '테스트 프로젝트',
    record: {
      createdAt: '2021-07-18T17:33:38.000Z',
      updatedAt: '2021-07-18T17:33:38.000Z',
      createdBy: null,
      updatedBy: null,
    },
  },
  {
    id: 'test-uuid-2',
    title: '카카오페이 보험',
    record: {
      createdAt: '2021-07-18T17:33:38.000Z',
      updatedAt: '2021-07-18T17:33:38.000Z',
      createdBy: null,
      updatedBy: null,
    },
  },
];

export const mockProject = {
  project,
  projects,
};
