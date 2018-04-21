var DemoViewModel = /** @class */ (function () {
    function DemoViewModel() {
        this.Respond = function (sentiment) {
            var mgr = new DemoManager();
            mgr.Respond(sentiment);
        };
    }
    return DemoViewModel;
}());
var _window = window;
_window.DemoViewModel = new DemoViewModel();
//# sourceMappingURL=DemoViewModel.js.map