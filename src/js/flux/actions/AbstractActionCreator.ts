import { Dispatcher } from '../dispatcher/Dispatcher'
import { Action } from 'flux-ts-boilerplate';

export class AbstractActionCreator<T extends number> { //best effort at enforcing enum
    protected dispatch(action: Action<T>) {
        Dispatcher<T>().dispatch(action);
    }
}