import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AudioConsumer } from './audio.consumer';
import { RequestScopeService } from './request-scope/request-scope.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'audio',
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AudioConsumer, RequestScopeService],
})
export class AppModule {}
