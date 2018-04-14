class GameObject {
    constructor(type, name) {
        this.cacheCanvas = null;
        this.cacheContext = null;
        this.type = type;
        this.name = name;
        this.sprites = new Array();
        this.loadProgress = 0;
        this.loadCount = 0;
        this.loadedCount = 0;
        this.init();
    }
    init() {
        //TODO
    }
    draw(canvas) {
        var ctx = canvas.getContext("2d")
        //双缓冲处理闪烁
        if (!this.cacheCanvas && !this.cacheContext) {
            this.cacheCanvas = document.createElement("canvas");
            this.cacheCanvas.width = canvas.width;
            this.cacheCanvas.height = canvas.height;
            this.cacheContext = this.cacheCanvas.getContext("2d");
        }

        this.cacheContext.clearRect(0, 0, this.cacheCanvas.width, this.cacheCanvas.height);


        //DRAW HERE

        // this.loadSprites(this.cacheContext)

        if (this.loadProgress == 100) {
            ctx.clearRect(0, 0, ctx.width, ctx.height);
            ctx.drawImage(this.cacheCanvas, 0, 0)
        }

    }
    // loadSprites(canvas) {
    //     for (var sprite of this.sprites) {
    //         // debugger
    //         if(sprite.img.complete){
    //             console.log("loaded")
    //             this.loadedCount++;
    //             this.loadProgress = (this.loadedCount / this.sprites.length);
    //             canvas.drawImage(sprite.img, sprite.img.x, sprite.img.y);
    //         }
    //     }
    // }
}
class Background extends GameObject {
    constructor(name) {
        super(OBJECT_TYPE.BACKGROUND, name);
    }
    init() {
        this.sprites.push(new GameSprite("./source/" + this.type + "/" + this.name));
    }
}