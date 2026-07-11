
class Label extends UIElement {
  constructor(x, y, text, opts = {}) {
    super(x, y, 0, 0);
    this.text = text;
    this.font = opts.font || '24px sans-serif';
    this.color = opts.color || '#e5e7eb';
    this.align = opts.align || 'left';
  }
  draw(ctx) {
    if (!this.visible) return;
    ctx.save();
    ctx.font = this.font; ctx.fillStyle = this.color;
    ctx.textAlign = this.align; ctx.textBaseline = 'middle';
    ctx.fillText(this.text, this.x, this.y);
    ctx.restore();
  }
}