import cardsArr from "./cardsArr.js";
import Game from "./game.js";
import ui from "./selector.js";
import RenderHtml from "./ui.js";

setTimeout(() => {
    ui.loading.classList.add('active')
}, 3000);

const card_game = new Game(cardsArr)
const render_html = new RenderHtml()

render_html.renderQuestion()
render_html.renderCards(card_game.randomQuestions())

card_game.events()

export { card_game, render_html }