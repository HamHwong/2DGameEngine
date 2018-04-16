const _DEVELOPMENTMODE = true;

const SCENCE = {
    MENU: "MENU",
    PICKER: "PICKER",
    FIGHTSCENCE: {
        STREE: "STREE",
        BLANK: "BLANK"
    }
}

const OBJECT_TYPE = {
    OBJECT: "OBJECT",
    SCENCE: "SCENCE",
    BACKGROUND: "BACKGROUND",
    ROLE: "ROLE",
    ITEM: "ITEM",
    MENUITEM: "MENUITEM"
}

class GameManager {
    constructor(canvasId) {
        this.canvas = document.querySelectorAll(canvasId)[0];
        this.context = this.canvas.getContext("2d");

        this.cacheCanvas = null;
        this.cacheContext = null;

        this.Pause = false;
        this.background = null;
        this.width = 900;
        this.height = 600;
        this.fps = 5;
        this.GameObjects = new Array();
        this.frams = 0;
        this.loadProcess = 0;
        this.init();
    }
    init() {
        //初始化
        this.loadScence(SCENCE.MENU);
    }

    loadScence(scence) {
        // debugger
        this.loadProcess = 0;

        switch (scence) {
            case SCENCE.MENU:
                //TODO 把所有资源在这里push进渲染队列
                var menuScence = new Background("MENU");
                var testRole = new Role("P1")
                this.push(menuScence);
                this.push(testRole);
                break;
        };
    }

    push(Object) {
        this.GameObjects.push(Object);
    }

    start() {
        if (this.Pause)
            return;
        setTimeout(() => {
            this.draw();
            this.start();
            this.frams++;
        }, 1000 / this.fps)
    }

    switch () {
        // debugger
        return !(this.Pause = !this.Pause);
    }

    draw() {
        var ctx = this.context
        //双缓冲处理闪烁
        if (!this.cacheCanvas && !this.cacheContext) {
            this.cacheCanvas = document.createElement("canvas");
            this.cacheCanvas.width = canvas.width;
            this.cacheCanvas.height = canvas.height;
            this.cacheContext = this.cacheCanvas.getContext("2d");
        }

        this.cacheContext.clearRect(0, 0, this.cacheCanvas.width, this.cacheCanvas.height);

        for (var object of this.GameObjects) {
            // debugger
            // object.drawSprites(this.cacheContext)
            object.draw(this.cacheContext, this.frams)
            console.log("redrawing");
        }

        ctx.clearRect(0, 0, ctx.width, ctx.height);
        ctx.drawImage(this.cacheCanvas, 0, 0);
    }
}