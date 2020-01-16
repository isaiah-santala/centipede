var Context = /** @class */ (function () {
    function Context() {
        this.canvas = null;
        this.ctx = null;
        this.canvas = document.getElementById('game');
        this.ctx = this.canvas.getContext('2d');
        return this.ctx;
    }
    return Context;
}());
var GameState = /** @class */ (function () {
    function GameState() {
        this.ctx = new Context();
    }
    return GameState;
}());
