import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { RequestScopeService } from './request-scope/request-scope.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly requestScopeService: RequestScopeService,
    @InjectQueue('audio') private audioQueue: Queue,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    const job = await this.audioQueue.add('transcode', {
      foo: 'bar',
    });

    this.requestScopeService.logFoo(); // logs 'foo' as it should
    
    return this.appService.getHello(); // responds with 'Hello World!' as it should
  }
}
