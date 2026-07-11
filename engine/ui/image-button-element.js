class ImageButton extends UIElement {
  constructor(x, y, w, h, assets, key, opts = {}) {
    super(x, y, w, h);
    this.assets = assets;
    this.key = key;
    this.opacity = opts.opacity !== undefined ? opts.opacity : 1;
    this.onclick = opts.onclick || null;
    this.pressed = false;
    this.hovered = false;
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
  onPointerDown() { this.pressed = true; }
  onPointerUp(x, y, hit) { if (this.pressed && hit && this.onclick) this.onclick(); this.pressed = false; }
}