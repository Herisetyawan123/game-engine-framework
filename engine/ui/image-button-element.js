class ImageButton extends UIElement {
  constructor(xOrSpec, y, w, h, assets, key, opts = {}) {
    const isObjectSpec = xOrSpec && typeof xOrSpec === 'object' && !Array.isArray(xOrSpec);
    const spec = isObjectSpec ? xOrSpec : normalizeUIPositionSpec(xOrSpec, y, w, h);
    super(spec.x, spec.y, spec.width, spec.height);
    const options = isObjectSpec ? { ...spec, ...opts } : opts;
    this.assets = options.assets || assets;
    this.key = options.key || key || '';
    this.opacity = options.opacity !== undefined ? options.opacity : 1;
    this.onclick = options.onClick ?? options.onclick ?? null;
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