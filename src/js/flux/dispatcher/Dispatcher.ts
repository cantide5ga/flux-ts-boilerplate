import { Dispatcher as ADispatcher} from 'flux';
import { Action } from 'flux-ts-boilerplate';

let dispatcher: ADispatcher<any>;

export const Dispatcher = <T>(): ADispatcher<Action<T>> => {
    if(!dispatcher) {
        dispatcher = new ADispatcher();
    }
    return dispatcher;
}