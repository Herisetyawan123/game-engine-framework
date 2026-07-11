class Panel extends UIElement {
  constructor(x, y, w, h, opts = {}) {
    super(x, y, w, h);
    this.color = opts.color || 'rgba(20,20,30,0.92)';
    this.radius = opts.radius !== undefined ? opts.radius : 16;
    this.stroke = opts.stroke || '#475569';
  }
  draw(ctx) {
    if (!this.visible) return;
    ctx.save();
    roundRect(ctx, this.x, this.y, this.width, this.height, this.radius);
    ctx.fillStyle = this.color; ctx.fill();
    ctx.strokeStyle = this.stroke; ctx.lineWidth = 2; ctx.stroke();
    ctx.restore();
  }
}
