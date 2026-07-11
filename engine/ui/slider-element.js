class Slider extends UIElement {
  constructor(x, y, w, h, value, onChange) {
    super(x, y, w, h);
    this.value = clamp(value, 0, 1); this.onChange = onChange; this.dragging = false;
  }
  draw(ctx) {
    ctx.save();
    roundRect(ctx, this.x, this.y + this.height / 2 - 4, this.width, 8, 4);
    ctx.fillStyle = '#374151'; ctx.fill();
    roundRect(ctx, this.x, this.y + this.height / 2 - 4, this.width * this.value, 8, 4);
    ctx.fillStyle = '#3b82f6'; ctx.fill();
    const knobX = this.x + this.width * this.value;
    ctx.beginPath(); ctx.arc(knobX, this.y + this.height / 2, 12, 0, Math.PI * 2);
    ctx.fillStyle = '#fff'; ctx.fill();
    ctx.restore();
  }
  _updateFromX(px) { this.value = clamp((px - this.x) / this.width, 0, 1); this.onChange && this.onChange(this.value); }
  onPointerDown(x) { this.dragging = true; this._updateFromX(x); }
  onPointerMove(x, y, hit) { if (this.dragging) this._updateFromX(x); }
  onPointerUp() { this.dragging = false; }
}
