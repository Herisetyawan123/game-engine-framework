class HomeScene extends Scene {
  create() {
    const g = this.game;
    this.createNavigation();
    g.ui.add(new ImageView({ x: 'center', y: 70, width: 300, height: 60, assets: g.assets, src: 'homepage/smart_steps' }));
    g.ui.add(new ImageView({ x: 'center', y: 150, width: 100, height: 40, assets: g.assets, src: 'homepage/year_1' }));
    g.ui.add(new ImageView({ x: 'center', y: 220, width: 800, height: 250, assets: g.assets, src: 'homepage/move_your_body' }));

    g.ui.add(new ImageButton({
      x: 'center',
      y: 500,
      width: 250,
      height: 100,
      assets: g.assets,
      key: 'homepage/play_button',
      onClick: () => {
        g.scenes.switchTo('page-one');
      }
    }));
    // g.ui.add(new Button(BASE_WIDTH / 2 - 140, 480, 280, 64, 'PLAY', () => { g.audio.startBacksound(); g.scenes.switchTo('game'); }));
  }
  render(ctx) { 
    setBackgroundImage(ctx, this.game.assets, 'homepage/background');
  }

  createNavigation()
  {
    const g = this.game;
    g.ui.add(new ImageButton({ x: 40, y: 40, width: 80, height: 80, assets: g.assets, key: 'homepage/menu_button', onClick: () => {
      g.scenes.switchTo('home');
    } }));
    g.ui.add(new ToggleImage({ x: 40, y: 140, width: 80, height: 80, assets: g.assets, keyOn: 'homepage/audio_off', keyOff: 'homepage/audio_on' }, null, null, null, g.assets, 'homepage/audio_off', 'homepage/audio_on', g.audio.muted, v => {
      g.audio.setMuted(v);
    }));
  }
}