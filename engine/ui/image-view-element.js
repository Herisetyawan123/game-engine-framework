class ImageView extends UIElement {
  constructor(x, y, w, h, assets, key, opts = {}) {
    super(x, y, w, h);
    this.assets = assets;
    this.key = key;
    this.opacity = opts.opacity !== undefined ? opts.opacity : 1;
  }
  draw(ctx) {
    if (!this.visible) return;
    const img = this.assets.getImage(this.key);
    if (!img) return;
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.drawImage(img, this.x, this.y, this.width, this.height);
    ctx.restore();
  }
  setImage(key) { this.key = key; }  // ganti gambar saat runtime
}