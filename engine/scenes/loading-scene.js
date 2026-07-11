
class LoadingScene extends Scene {
  // No real assets to fetch (everything is already registered), so this
  // scene simply demonstrates a loading bar / minimum splash duration.
  create() {
    this.progress = 0;
    this.bar = new ProgressBar(BASE_WIDTH / 2 - 200, BASE_HEIGHT / 2, 400, 24, 0);
    this.label = new Label(BASE_WIDTH / 2, BASE_HEIGHT / 2 - 40, 'Loading...', { align: 'center', font: '32px sans-serif' });
  }
  update(dt) {
    this.progress = Math.min(1, this.progress + dt * 1.4);
    this.bar.value = this.progress;
    if (this.progress >= 1) this.game.scenes.switchTo('menu');
  }
  render(ctx) {
    ctx.fillStyle = '#111827'; ctx.fillRect(0, 0, BASE_WIDTH, BASE_HEIGHT);
    this.label.draw(ctx);
    this.bar.draw(ctx);
  }
}