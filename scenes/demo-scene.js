class DemoScene extends Scene {
  create() {
    const g = this.game;
    g.ui.add(new Label({ x: 'center', y: 140, text: 'DemoScene' }, null, 'DemoScene', { align: 'center', font: 'bold 36px sans-serif' }));
    g.ui.add(new Button({ x: 'center', y: 260, width: 280, height: 64, label: 'BACK', onClick: () => g.scenes.switchTo('home') }));
  }

  render(ctx) {
    drawBackdrop(ctx, this.game.assets);
  }
}
