import { Task } from '../../src/task/task.schema';

export const mockTask = {
  _id: 'taskId123',
  title: 'Test Task',
  description: 'Test Description',
  status: 'pending',
};

export const TaskServiceMock = {
  create: jest.fn().mockResolvedValue(mockTask),
  findAll: jest.fn().mockResolvedValue([mockTask]),
  findOne: jest.fn().mockImplementation((id) => {
    if (id === 'taskId123') return Promise.resolve(mockTask);
    return Promise.reject(new Error('Task not found'));
  }),
  update: jest.fn().mockImplementation((id, dto) => ({
    ...mockTask,
    ...dto,
  })),
  delete: jest.fn().mockResolvedValue({ message: 'Task deleted successfully' }),
};
