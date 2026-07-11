class Icon extends UIElement {
  constructor(x, y, w, h, drawFn) { super(x, y, w, h); this.drawFn = drawFn; }
  draw(ctx) { if (this.drawFn) this.drawFn(ctx, this.x, this.y, this.width, this.height); }
}