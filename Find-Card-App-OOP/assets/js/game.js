import { card_game, render_html } from "./app.js";
import cardsArr from "./cardsArr.js";
import ui from "./selector.js";

class Game {
    constructor(cards) {
        this.cards = cards
        this.correct = 0
        this.wrong = 0
        this.round = 0
    }

    random_title = () => {
        return Math.floor(Math.random() * this.cards.length);
    }

    getFindCard = (e) => {
        const obj = e.target.closest('[data-name]')
        const data_name = obj.dataset.name
        if (data_name) {
            this.checkAnswer(data_name)
            obj.classList.add('active')
            this.round += 1

            if (this.round >= 6) {
                ui.modal.classList.add('active')
            }

            if (this.round) {
                render_html.roundIncrease(this.round)
            }

            setTimeout(() => {
                obj.classList.remove('active')
            }, 1500)
        }
    }

    checkAnswer = (data_name) => {

        if (data_name) {
            setTimeout(() => {
                render_html.renderCards(card_game.randomQuestions())
            }, 1800)

            if (data_name === ui.question_title.innerHTML) {
                ui.answer_correct.classList.add('active')
                ui.cards_area.classList.add('pointer-events-none')
                this.correct += 1
                render_html.renderAnswers(this.correct, 'correct')
                render_html.renderQuestion()
                ui.total_point.innerHTML = `Game over! Total points : ${this.correct}`

                setTimeout(() => {
                    ui.answer_correct.classList.remove('active')
                    ui.cards_area.classList.remove('pointer-events-none')
                }, 1500)

            } else {
                ui.answer_wrong.classList.add('active')
                ui.cards_area.classList.add('pointer-events-none')
                this.wrong += 1
                render_html.renderAnswers(this.wrong, 'wrong')
                render_html.renderQuestion()

                setTimeout(() => {
                    ui.answer_wrong.classList.remove('active')
                    ui.cards_area.classList.remove('pointer-events-none')
                }, 1500)
            }
        }
    }

    startAgain = () => {
        window.location.reload()
    }

    randomQuestions = () => {
        return cardsArr.sort(() => Math.random() - 0.5);
    }

    events = () => {
        ui.cards_area.addEventListener('click', this.getFindCard)
        ui.start_again.addEventListener('click', this.startAgain)
    }
}

export default Game