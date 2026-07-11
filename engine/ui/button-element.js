class Button extends UIElement {
  constructor(x, y, w, h, label, onClick, opts = {}) {
    super(x, y, w, h);
    this.label = label;
    this.onClick = onClick;
    this.baseColor = opts.color || '#3b82f6';
    this.hoverColor = opts.hoverColor || '#2563eb';
    this.textColor = opts.textColor || '#ffffff';
    this.font = opts.font || '24px sans-serif';
    this.pressed = false;
  }
  draw(ctx) {
    if (!this.visible) return;
    ctx.save();
    roundRect(ctx, this.x, this.y, this.width, this.height, 12);
    ctx.fillStyle = this.pressed ? this.hoverColor : this.baseColor;
    ctx.fill();
    ctx.fillStyle = this.textColor;
    ctx.font = this.font; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(this.label, this.x + this.width / 2, this.y + this.height / 2 + 2);
    ctx.restore();
  }
  onPointerDown() { this.pressed = true; }
  onPointerUp(x, y, hit) { if (this.pressed && hit && this.onClick) this.onClick(); this.pressed = false; }
}