class SceneManager {
  constructor(game) { this.game = game; this.scenes = {}; this.current = null; this.currentKey = null; }
  register(key, SceneClass) { this.scenes[key] = SceneClass; }
  switchTo(key, data) {
    if (this.current) this.current.destroy();
    this.game.ui.clear();
    this.game.tweens.clear();
    this.game.animations.clear();
    const SceneClass = this.scenes[key];
    if (!SceneClass) { console.error('Unknown scene:', key); return; }
    this.current = new SceneClass(this.game);
    this.currentKey = key;
    this.current.create(data);
  }
  update(dt) { if (this.current) this.current.update(dt); }
  render(ctx) { if (this.current) this.current.render(ctx); }
}
