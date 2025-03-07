import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true, // Ensures ConfigModule is available everywhere
    }),
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb+srv://ayushanilan369:4jnTxO0Uaw1NRr2I@cluster0.kppedmf.mongodb.net/task-manager'), // Provide a default value
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
