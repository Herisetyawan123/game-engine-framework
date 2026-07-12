class PageOneScene extends Scene {
  create() {
    const g = this.game;
    this.createNavigation();
    
  }
  render(ctx) { 
    setBackgroundImage(ctx, this.game.assets, 'page_1/background_1');
  }

  createNavigation()
  {
    const g = this.game;
    g.ui.add(new ImageButton({ x: 40, y: 40, width: 80, height: 80, assets: g.assets, key: 'page_1/menu_button', onClick: () => {
      g.scenes.switchTo('home');
    } }));
    g.ui.add(new ToggleImage({ x: 40, y: 140, width: 80, height: 80, assets: g.assets, keyOn: 'page_1/audio_off', keyOff: 'page_1/audio_on' }, null, null, null, g.assets, 'page_1/audio_off', 'page_1/audio_on', g.audio.muted, v => {
      g.audio.setMuted(v);
    }));
  }
}