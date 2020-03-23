import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class RequestScopeService {

    public logFoo() {
        console.log('foo');
    }
}
