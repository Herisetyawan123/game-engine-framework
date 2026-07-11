class ToggleImage extends ImageView {
  constructor(x, y, w, h, assets, keyOn, keyOff, value = false, onChange) {
    super(x, y, w, h, assets, value ? keyOn : keyOff);
    this.keyOn = keyOn;
    this.keyOff = keyOff;
    this.value = !!value;
    this.onChange = onChange;
  }
  draw(ctx) {
    if (!this.visible) return;
    const img = this.assets.getImage(this.value ? this.keyOn : this.keyOff);
    if (!img) return;
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.drawImage(img, this.x, this.y, this.width, this.height);
    ctx.restore();
  }
  onPointerDown() { 
    this.value = !this.value; 
    if (this.onChange) this.onChange(this.value); 
  }
}