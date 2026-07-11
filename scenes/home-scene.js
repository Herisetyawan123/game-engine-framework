class HomeScene extends Scene {
  create() {
    const g = this.game;
    this.createNavigation();
    g.ui.add(new ImageView(BASE_WIDTH / 2 - 150, 70, 300, 60, g.assets, 'homepage/smart_steps'));
    g.ui.add(new ImageView(BASE_WIDTH / 2 - 50, 150, 100, 40, g.assets, 'homepage/year_1'));
    g.ui.add(new ImageView(BASE_WIDTH / 2 - 400, 220, 800, 250, g.assets, 'homepage/move_your_body'));

    g.ui.add(new ImageButton(
      BASE_WIDTH / 2 - 125, 
      500, 
      250, 
      100, 
      g.assets, 
      'homepage/play_button',
      {
        onclick: () => {
          g.scenes.switchTo('page-one');
        }
      })
    );
    // g.ui.add(new Button(BASE_WIDTH / 2 - 140, 480, 280, 64, 'PLAY', () => { g.audio.startBacksound(); g.scenes.switchTo('game'); }));
  }
  render(ctx) { 
    setBackgroundImage(ctx, this.game.assets, 'homepage/background');
  }

  createNavigation()
  {
    const g = this.game;
    g.ui.add(new ImageButton(40, 40, 80, 80, g.assets, 'homepage/menu_button', {
      onclick: () => {
        g.scenes.switchTo('home');
      }
    }));  
    g.ui.add(new ToggleImage(40, 140, 80, 80, g.assets, 'homepage/audio_off', 'homepage/audio_on', g.audio.muted, v => {
      g.audio.setMuted(v);
    }));
  }
}