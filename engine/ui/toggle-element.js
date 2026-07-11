class Toggle extends UIElement {
  constructor(x, y, w, h, value, onChange) {
    super(x, y, w, h);
    this.value = !!value; this.onChange = onChange;
  }
  draw(ctx) {
    ctx.save();
    roundRect(ctx, this.x, this.y, this.width, this.height, this.height / 2);
    ctx.fillStyle = this.value ? '#22c55e' : '#4b5563';
    ctx.fill();
    const knobX = this.value ? this.x + this.width - this.height / 2 : this.x + this.height / 2;
    ctx.beginPath(); ctx.arc(knobX, this.y + this.height / 2, this.height / 2 - 4, 0, Math.PI * 2);
    ctx.fillStyle = '#fff'; ctx.fill();
    ctx.restore();
  }
  onPointerDown() { this.value = !this.value; this.onChange && this.onChange(this.value); }
}
