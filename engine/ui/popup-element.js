class Popup extends UIElement {
  constructor(x, y, w, h, opts = {}) {
    super(x, y, w, h);
    this.panel = new Panel(x, y, w, h, opts);
    this.children = [];
  }
  add(el) { this.children.push(el); return el; }
  draw(ctx) {
    if (!this.visible) return;
    this.panel.draw(ctx);
    this.children.forEach(c => c.draw(ctx));
  }
}