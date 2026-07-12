class PageEndScene extends Scene {
  create() {
    const g = this.game;
    this.createNavigation();
    g.ui.add(new ImageView({ x: 'center', y: 0, width: 400, height: 400, assets: g.assets, src: 'end_page/welldone_icon' }));
    g.ui.add(new ImageView({ x: 'center', y: 350, width: 520, height: 150, assets: g.assets, src: 'end_page/5_stars' }));

    g.ui.add(new ImageButton({
      x: 'center',
      y: 500,
      width: 150,
      height: 150,
      assets: g.assets,
      key: 'end_page/replay_button',
      onClick: () => {
        g.scenes.switchTo('home');
      }
    }));
  }
  render(ctx) { 
    setBackgroundImage(ctx, this.game.assets, 'end_page/background_1');
  }

  createNavigation()
  {
    const g = this.game;
    g.ui.add(new ImageButton({ x: 40, y: 40, width: 80, height: 80, assets: g.assets, key: 'end_page/menu_button', onClick: () => {
      g.scenes.switchTo('home');
    } }));
    g.ui.add(new ToggleImage({ x: 40, y: 140, width: 80, height: 80, assets: g.assets, keyOn: 'end_page/audio_off', keyOff: 'end_page/audio_on' }, null, null, null, g.assets, 'end_page/audio_off', 'end_page/audio_on', g.audio.muted, v => {
      g.audio.setMuted(v);
    }));
  }

  playSound()
  {
      const g = this.game;
      const src = g.assets.getSound('vo/well_done');
      g.audio.play(src);
  }
}