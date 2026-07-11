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
    g.ui.add(new ImageButton(40, 40, 80, 80, g.assets, 'page_1/menu_button', {
      onclick: () => {
        g.scenes.switchTo('home');
      }
    }));  
    g.ui.add(new ToggleImage(40, 140, 80, 80, g.assets, 'page_1/audio_off', 'page_1/audio_on', g.audio.muted, v => {
      g.audio.setMuted(v);
    }));
  }
}