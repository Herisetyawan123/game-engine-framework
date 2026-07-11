/* =================================== UI Components =================================== */
class UIElement {
  constructor(x, y, w, h) {
    this.x = x; this.y = y; this.width = w; this.height = h;
    this.visible = true; this.active = true;
  }
  contains(px, py) {
    return this.visible && this.active &&
           px >= this.x && px <= this.x + this.width &&
           py >= this.y && py <= this.y + this.height;
  }
  draw(ctx) {}
  onPointerDown() {}
  onPointerUp() {}
  onPointerMove() {}
}
