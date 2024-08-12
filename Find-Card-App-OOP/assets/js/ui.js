import { card_game } from "./app.js"
import cards from "./cardsArr.js"
import ui from "./selector.js"

class RenderHtml {
    constructor() {}

    renderQuestion = () => {
        setTimeout(() => {
            ui.question_title.innerHTML = cards[card_game.random_title()].title
        }, 1700)
    }

    renderCards = (random_cards) => {

        ui.cards_area.innerHTML = ""

        random_cards.forEach((el) => ui.cards_area.innerHTML +=
            ` 
            <div data-name="${el.title}"
                    class="flip-card border h-[180px] relative sm:h-[210px] overflow-hidden cursor-pointer rounded-md w-full hover:scale-105 transition-all grid place-items-center">
                    <div class="flip-card-inner h-full w-full">
                        <div class="flip-card-front grid place-items-center absolute top-0 left-0 h-full w-full">
                            <img class="size-[100px] rounded-md"
                                src="https://cdn-icons-png.flaticon.com/128/5726/5726532.png" alt="${el.title}">
                        </div>
                        <div class="flip-card-back absolute top-0 left-0 h-full w-full">
                            <img class="size-full object-cover rounded-md"
                                src=${el.img} alt="${el.title}">
                        </div>
                    </div>
                </div>
            `
        )
    }

    renderAnswers = (answer, type) => {
        if (type === 'correct') {
            ui.correct_number.innerHTML = `(${answer})`

        } else {
            ui.wrong_number.innerHTML = `(${answer})`
        }
    }

    roundIncrease = (round) => {
        ui.rounds.innerHTML = `Round ${round} / 6`
    }
}

export default RenderHtml