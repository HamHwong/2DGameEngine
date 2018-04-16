class GameObject {
    constructor(type, name, x, y, w, h) {
        this.type = type;
        this.name = name;
        this.sprites = new Array();
        this.loadProgress = 0;
        this.x = 0;
        this.y = 0;
        this.w = 0;
        this.h = 0;
        this.frames = 0;
        this.init();
    }
    init() {
        //TODO 将要画的sprites push写在这里
        //新建的时候会执行
    }
    //init()=>draw()=>drawSprites()
    draw(canvas, frames) {
        //DRAWOBJECT HERE
        //将对象画在这个cache canvas上
        this.drawSprites(canvas, frames)
    }

    drawSprites(canvas, frames) {
        //将sprites画在各自的Canvas上
        // debugger
        for (var sprite of this.sprites) {
            sprite.draw(canvas, null, frames, this.x, this.y) //传入对象的相对位置
            console.log("cacheDrow")
        }
    }
}

class Background extends GameObject {
    constructor(name) {
        super(OBJECT_TYPE.BACKGROUND, name);
    }
    init() {
        //./source/[TYPENAME]/[OBJECTNAME]/[SPRITENAME]/[SPRITENAME]-[FRAMES]
        // OBJECT_TYPE.BACKGROUND+"/"+this.name+"/"+"sp1"+"/"+"sp1-0"
        this.sprites.push(new GameSprite("sp1", this.type, this.name,null, 3))
        // this.sprites.push(new GameSprite("sp2", "./source/BACKGROUND/sp2.jpg", 100, 100, 300, 300))
    }
}
class Role extends GameObject{
    constructor(name) {
        super(OBJECT_TYPE.ROLE, name);
    }
    init(){
        this.sprites.push(new GameSprite("leg",this.type,this.name,["WALK"],6))
    }
}