class ImageView extends UIElement {
  constructor(xOrSpec, y, w, h, assets, key, opts = {}) {
    const isObjectSpec = xOrSpec && typeof xOrSpec === 'object' && !Array.isArray(xOrSpec);
    const spec = isObjectSpec ? xOrSpec : normalizeUIPositionSpec(xOrSpec, y, w, h);
    super(spec.x, spec.y, spec.width, spec.height);
    const options = isObjectSpec ? { ...spec, ...opts } : opts;
    this.assets = options.assets || assets;
    this.key = options.key || options.id || key || '';
    this.src = options.src || options.image || options.imageSrc || null;
    this.opacity = options.opacity !== undefined ? options.opacity : 1;
  }
  _resolveImage() {
    if (this.src) return this.src;
    if (this.assets && this.key) return this.assets.getImage(this.key);
    return null;
  }
  draw(ctx) {
    if (!this.visible) return;
    const img = this._resolveImage();
    if (!img) return;
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.drawImage(img, this.x, this.y, this.width, this.height);
    ctx.restore();
  }
  setImage(key) { this.key = key; }  // ganti gambar saat runtime
}