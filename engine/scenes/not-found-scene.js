class NotFoundScene extends Scene {
  create() {
    const g = this.game;
    g.ui.add(new Label(BASE_WIDTH / 2, BASE_HEIGHT / 2 - 60, 'Scene Not Found', { align: 'center', font: 'bold 40px sans-serif' }));
    g.ui.add(new Label(BASE_WIDTH / 2, BASE_HEIGHT / 2, 'The requested scene could not be found.', { align: 'center', font: '22px sans-serif' }));
  }
  render(ctx) { drawBackdrop(ctx, this.game.assets); }
}