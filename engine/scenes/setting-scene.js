class SettingsScene extends Scene {
  create() {
    const g = this.game;
    const s = g.storage.getSettings();
    g.ui.add(new Label(BASE_WIDTH / 2, 100, 'SETTINGS', { align: 'center', font: 'bold 40px sans-serif' }));

    g.ui.add(new Label(BASE_WIDTH / 2 - 250, 220, 'Music / SFX Volume', { font: '24px sans-serif' }));
    g.ui.add(new Slider(BASE_WIDTH / 2 - 250, 250, 500, 40, s.volume !== undefined ? s.volume : 1, v => g.audio.setVolume(v)));

    g.ui.add(new Label(BASE_WIDTH / 2 - 250, 340, 'Mute', { font: '24px sans-serif' }));
    g.ui.add(new Toggle(BASE_WIDTH / 2 + 150, 320, 80, 40, g.audio.muted, v => g.audio.setMuted(v)));

    g.ui.add(new Button(BASE_WIDTH / 2 - 140, 460, 280, 64, 'BACK', () => { g.audio.playClick(); g.scenes.switchTo('menu'); }));
  }
  render(ctx) { drawBackdrop(ctx, this.game.assets); }
}
