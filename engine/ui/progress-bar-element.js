class ProgressBar extends UIElement {
  constructor(x, y, w, h, value = 0) { super(x, y, w, h); this.value = clamp(value, 0, 1); }
  draw(ctx) {
    ctx.save();
    roundRect(ctx, this.x, this.y, this.width, this.height, this.height / 2);
    ctx.fillStyle = '#334155'; ctx.fill();
    roundRect(ctx, this.x, this.y, this.width * this.value, this.height, this.height / 2);
    ctx.fillStyle = '#f59e0b'; ctx.fill();
    ctx.restore();
  }
}