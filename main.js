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

class ScenceManager {
    constructor(canvasId) {
        this.canvas = document.querySelectorAll(canvasId)[0];
        this.context = this.canvas.getContext("2d");
        this.Pause = false;
        this.background = null;
        this.width = 900;
        this.height = 600;
        this.frames = 1;
        this.GameObjects = new Array();
        this.loadScence(SCENCE.MENU);
    }

    loadScence(scence) {
        switch (scence) {
            case SCENCE.MENU:
                //TODO
                // for(var i)
                this.push(new Background("MENU"))

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
            // this.context.clearRect(0, 0, this.width, this.height);
            this.redraw();
            this.start();
        }, 1000 / this.frames)
    }

    switch () {
        // debugger
        return !(this.Pause = !this.Pause);
    }

    redraw() {
        for (var object of this.GameObjects) {
            // debugger
            object.draw(this.canvas);
            console.log("redrawing");
        }
    }
}