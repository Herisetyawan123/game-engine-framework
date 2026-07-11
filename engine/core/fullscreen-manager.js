/* ============================ FullscreenManager ============================ */
/* Guarantees fullscreen is only ever requested ONCE per application lifetime. */
class FullscreenManager {
  constructor() { this.requested = false; }
  requestOnce() {
    if (this.requested) return;
    this.requested = true;
    const el = document.documentElement;
    const req = el.requestFullscreen || el.webkitRequestFullscreen ||
                el.mozRequestFullScreen || el.msRequestFullscreen;
    if (req) { try { req.call(el).catch(() => {}); } catch (e) {} }
  }
}
