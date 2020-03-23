import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { AppService } from './app.service';
import { RequestScopeService } from './request-scope/request-scope.service';

@Processor('audio')
export class AudioConsumer {

  constructor(
    private readonly appService: AppService,
    private readonly requestScopeService: RequestScopeService,
  ) {}

  @Process('transcode')
  async transcode(job: Job<unknown>) {
    try {
      console.log(this.appService.getHello()); // this.appService is undefined, works only if we remove { scope: Scope.REQUEST } from RequestScopeService
      this.requestScopeService.logFoo(); // works only if we remove { scope: Scope.REQUEST } from RequestScopeService
    } catch (error) {
      console.log(error); // TypeError: Cannot read property 'getHello' of undefined
    }
    return {};
  }
}