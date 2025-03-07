import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { TaskService } from './task.service';
import { Task } from './task.schema';
import { Model } from 'mongoose';

const mockTask = {
  _id: 'taskId123',
  title: 'Test Task',
  description: 'This is a sample task',
  status: 'pending',
};

const mockTaskModel = {
  find: jest.fn().mockResolvedValue([mockTask]),
  findById: jest.fn().mockImplementation((id) =>
    id === 'taskId123' ? Promise.resolve(mockTask) : Promise.resolve(null),
  ),
  create: jest.fn().mockResolvedValue(mockTask),
  findByIdAndUpdate: jest.fn().mockImplementation((id, update) =>
    id === 'taskId123' ? Promise.resolve({ ...mockTask, ...update }) : Promise.resolve(null),
  ),
  findByIdAndDelete: jest.fn().mockImplementation((id) =>
    id === 'taskId123' ? Promise.resolve(mockTask) : Promise.resolve(null),
  ),
};

describe('TaskService', () => {
  let service: TaskService;
  let model: Model<Task>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TaskService,
        { provide: getModelToken(Task.name), useValue: mockTaskModel },
      ],
    }).compile();

    service = module.get<TaskService>(TaskService);
    model = module.get<Model<Task>>(getModelToken(Task.name));
  });

  it('should return all tasks', async () => {
    const tasks = await service.findAll();
    expect(tasks).toEqual([mockTask]);
  });

  it('should return a task by ID', async () => {
    const task = await service.findOne('taskId123');
    expect(task).toEqual(mockTask);
  });

  it('should throw error if task is not found', async () => {
    await expect(service.findOne('invalidId')).rejects.toThrowError('Task not found');
  });

  it('should update a task', async () => {
    const updatedTask = await service.update('taskId123', { title: 'Updated Task' });
    expect(updatedTask.title).toEqual('Updated Task');
  });

  it('should delete a task', async () => {
    const result = await service.delete('taskId123');
    expect(result).toEqual({ message: 'Task deleted successfully' });
  });
});
