declare namespace FluxTsBoilerplate {
    interface Action<T> {
        actionType: T,
        payload?: any
    }

    class AbstractActionCreator<T extends number> { }

    class AbstractStore { }

    function Dispatcher();
}

export = FluxTsBoilerplate;