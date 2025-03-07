import { Test, TestingModule } from '@nestjs/testing';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TaskServiceMock, mockTask } from '../../test/__mocks__/task.service';

describe('TaskController', () => {
  let controller: TaskController;
  let service: TaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [
        {
          provide: TaskService,
          useValue: TaskServiceMock, // Use mock service
        },
      ],
    }).compile();

    controller = module.get<TaskController>(TaskController);
    service = module.get<TaskService>(TaskService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a task', async () => {
    expect(await controller.create(mockTask)).toEqual(mockTask);
  });

  it('should return all tasks', async () => {
    expect(await controller.findAll()).toEqual([mockTask]);
  });

  it('should return a task by ID', async () => {
    expect(await controller.findOne('taskId123')).toEqual(mockTask);
  });

  it('should update a task', async () => {
    const updatedTask = await controller.update('taskId123', { title: 'Updated Task' });
    expect(updatedTask.title).toBe('Updated Task');
  });

  it('should delete a task', async () => {
    expect(await controller.delete('taskId123')).toEqual({ message: 'Task deleted successfully' });
  });
});
