
class ResultScene extends Scene {
  create(data) {
    const g = this.game;
    const d = data || { score: 0, time: 0 };
    g.ui.add(new Label(BASE_WIDTH / 2, 180, 'LEVEL COMPLETE!', { align: 'center', font: 'bold 44px sans-serif', color: '#facc15' }));
    g.ui.add(new Label(BASE_WIDTH / 2, 260, 'Score: ' + d.score, { align: 'center', font: '30px sans-serif' }));
    g.ui.add(new Label(BASE_WIDTH / 2, 300, 'Time: ' + d.time + 's', { align: 'center', font: '30px sans-serif' }));
    g.ui.add(new Button(BASE_WIDTH / 2 - 140, 380, 280, 64, 'PLAY AGAIN', () => { g.audio.playClick(); g.scenes.switchTo('game'); }));
    g.ui.add(new Button(BASE_WIDTH / 2 - 140, 460, 280, 64, 'MAIN MENU', () => { g.audio.playClick(); g.scenes.switchTo('menu'); }, { color: '#6b7280', hoverColor: '#4b5563' }));
  }
  render(ctx) { drawBackdrop(ctx, this.game.assets); }
}
