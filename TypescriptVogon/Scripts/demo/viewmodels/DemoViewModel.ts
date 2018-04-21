class DemoViewModel {
    constructor() {
    }

    Respond = (sentiment: Sentiments) => {

        let mgr = new DemoManager();

        mgr.Respond(sentiment);
    }
}

let _window = <any>window;
_window.DemoViewModel = new DemoViewModel();