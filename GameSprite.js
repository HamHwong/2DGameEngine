class GameSprite {
    constructor(imgurl, x, y, w, h) {
        this.imgurl = imgurl;
        this.x = x;
        this.y = y;
        this.img = new Image(w,h);
        this.img.src = this.imgurl;
        this.ctx = null;
    }
    draw(canvas){
        if(!this.ctx) this.ctx = canvas.getContext("2d")
        
    }
}