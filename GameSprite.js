class GameSprite {
    // constructor(name, objTypeName, objName, imgurl, frames, x, y, w, h) { //x,y 都是相对Object的位置
    constructor(name, objTypeName, objName, actionCollection, frames, x, y) { //x,y 都是相对Object的位置
        this.name = name;
        this.objTypeName = objTypeName;
        this.objName = objName;
        //图片目录
        // this.imgurl = imgurl;
        this.imgsSourceUrl = "./source/" + objTypeName + "/" + objName;
        this.imgs = new Array();
        this.frames = frames;
        this.actionCollection = null != actionCollection ? actionCollection : new Array();

        this.x = x || 0;
        this.y = y || 0;
        var d = null;
        for (var i = 0; i < this.frames; i++) {
            //检查是否有action,若没有,则只加载
            for (var j = 0; d = (this.actionCollection.length == 0 ? (j == 0) : j < this.actionCollection.length); j++) {
                // debugger
                var action = this.actionCollection[j];
                var img = new Image();
                img.addEventListener('load', () => {
                    // debugger
                    console.log(this.name + " loaded!")
                }, false)
                img.src = action ? `${this.imgsSourceUrl}/${this.name}/${action}/${this.objName}-${this.name}-${action}-${i}.png` : `${this.imgsSourceUrl}/${this.name}/${this.objName}-${this.name}-${i}.png`;
                this.imgs[i] = img;
            }
        }

        this.loaded = false;
        this.ctx = null;
    }

    draw(ctx, action, drawFrames, x, y) {
        var currentFrams = drawFrames % this.frames
        if (!this.ctx) this.ctx = ctx
        this.ctx.drawImage(this.imgs[currentFrams], x + this.x, y + this.y, this.imgs[currentFrams].width, this.imgs[currentFrams].height)
    }

}