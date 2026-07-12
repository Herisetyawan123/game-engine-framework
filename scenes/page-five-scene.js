class PageFiveScene extends Scene {
  create() {
    const g = this.game;
    this.createNavigation();
    this.playAudio();

    g.ui.add(new ImageView({ x: 'center', y: 50, width: 300, height: 60, assets: g.assets, src: 'page_1/title' }));
    g.ui.add(new ImageView({ x: BASE_WIDTH / 2 - 310, y: 500, width: 350, height: 100, assets: g.assets, src: 'page_5/empty_word_panel', key: 'empty_word_panel' }));
    g.ui.add(new ImageView({ x: BASE_WIDTH / 2 + 150, y: 150, width: 350, height: 400, assets: g.assets, src: 'page_1/body_part_panel' }));

    // Drop Area
    const dropArea = new DropArea({
      x: BASE_WIDTH / 2 - 250,
      y: 200,
      width: 250,
      height: 250,
      label: 'DROP HERE',
      assets: g.assets,
      imageKey: 'page_2/answer_drop_panel',
      accepts: item => item.id === 'arm',
      onDrop: (dragItem, success) => {
        if(success) {
          // replace image empty_word_panel with image of the body part that was dropped
          const emptyWordPanel = g.ui.getElementByKey('empty_word_panel');
          if (emptyWordPanel) {
            emptyWordPanel.setImage('page_5/arm_answer_panel', {
              x: BASE_WIDTH / 2 - 335, y: 475, width: 400, height: 150,
            });
          }
          this.playSuccess();
          dragItem.setImage('page_5/arm_drop_answer')

          // delay 1 second then switch to next scene
          setTimeout(() => {
            g.scenes.switchTo('page-end');
          }, 1000);
        }else{
          this.playWrong();
        }
      }
    });

    g.ui.add(dropArea);

    let dragItems = [
      new DragArea({ 
        x: BASE_WIDTH / 2 + 300, 
        y: 150, 
        width: 180, 
        height: 180, 
        assets: g.assets, 
        imageKey: 'page_5/fingers_1', 
        id: 'fingers',
        key: 'fingers'
      }),
      new DragArea({ 
        x: BASE_WIDTH / 2 + 150, 
        y: 240, 
        width: 180, 
        height: 240, 
        assets: g.assets, 
        imageKey: 'page_5/legs', 
        id: 'legs',
        key: 'legs'
      }),
      new DragArea({ 
        x: BASE_WIDTH / 2 + 320, 
        y: 300, 
        width: 140, 
        height: 250, 
        assets: g.assets, 
        imageKey: 'page_5/arm_1', 
        id: 'arm',
        key: 'arm'
      }),
    ]

    for (let item of dragItems) {
      item.dropAreas = [dropArea];
      g.ui.add(item);
    }

  }
  render(ctx) { 
    setBackgroundImage(ctx, this.game.assets, 'page_1/background_1');
  }

  playAudio() {
    const g = this.game;
    const src = g.assets.getSound('vo/word_a');
    g.audio.play(src);
  }

  playSuccess()
  {
      const g = this.game;
      const src = g.assets.getSound('vo/correct');
      g.audio.play(src);
  }

  playWrong()
  {
      const g = this.game;
      const src = g.assets.getSound('vo/wrong');
      g.audio.play(src);
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
    g.ui.add(new ImageButton({ x: 40, y: 240, width: 80, height: 80, assets: g.assets, key: 'page_1/reset_button', onClick: () => {
      g.scenes.switchTo('page-one');
    }}));
  }
}