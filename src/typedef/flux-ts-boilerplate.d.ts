declare namespace FluxTsBoilerplate {
    interface Action<T> {
        actionType: T,
        payload?: any
    }

    abstract class AbstractActionCreator<T extends number> { 
        dispatch(action: Action<T>);
    }

    abstract class AbstractStore { 
        emitChange(): void;

        addChangeListener(cb: () => void) : void;

        removeChangeListener(cb: () => void);
    }

    function Dispatcher<T>();
}

export = FluxTsBoilerplate;
