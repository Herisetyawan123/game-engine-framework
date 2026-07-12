// tempat semua route di daftarin, biar gampang di switchTo
// misal g.scenes.switchTo('menu') bakal switch ke scene menu
// semua scene harus di register dulu disini, biar bisa di switchTo
// kalau ga di register, bakal switch ke scene 404 (NotFoundScene)

function registerAllScenes(game) {
    game.first_scene = "home"; // set first scene to menu

    game.scenes.register('home', HomeScene);
    game.scenes.register('page-one', PageOneScene);
    game.scenes.register('page-two', PageTwoScene);
    game.scenes.register('page-three', PageThreeScene);
}