class Quiz {
    constructor(questions) {
        this.questions = questions
        this.index = 0
        this.correct = 0
        this.wrong = 0
        this.total = 0
        this.time = 10
        this.timer = null
        this.not_answered = 0
        this.ui = {
            quiz: document.querySelector('#quiz'),
            result: document.querySelector('#result'),
            content: document.querySelector('#content'),
            next_btn: document.querySelector('#next_btn'),
            current_question_number: document.querySelector('#current_question_number'),
            quesion_length: document.querySelector('#quesion_length'),
            result_area: document.querySelector('#result-area'),
            restart_btn: document.querySelector('#restart_btn'),
            set_time: document.querySelector('#set_time'),
            initial_load: document.querySelector('#initial_load'),
            start_game_btn: document.querySelector('#start_game_btn')
        }
    }

    GetCurrentQuestion = () => {
        return this.questions[this.index]
    }

    DisabledClick = (status) => {
        if (status) {
            this.ui.quiz.classList.add('pointer-events-none')
        } else {
            this.ui.quiz.classList.remove('pointer-events-none')
        }
    }

    ShowNextBtn = (status) => {
        if (status) {
            this.ui.next_btn.classList.remove('hidden')
        } else {
            this.ui.next_btn.classList.add('hidden')
        }
    }

    SelectAnswer = (e) => {
        const obj = e.target.closest('[data-answer]') ? e.target.closest('[data-answer]') : e.target
        const data_answer = obj.dataset.answer
        if (data_answer) {
            this.DisabledClick(true)
            this.ShowNextBtn(true)

            if (this.GetCurrentQuestion().answer === data_answer) {
                this.CorrectAnswer(data_answer)
                this.SetTime(data_answer)
            } else {
                this.WrongAnswer(data_answer)
                this.SetTime(data_answer)
            }
        }
    }

    CorrectAnswer = (data_answer) => {
        const data_el = this.ui.quiz.querySelector(`[data-answer="${data_answer}"]`)

        if (data_el) {
            data_el.classList.add('bg-green-300')
            this.correct += 1
            this.total += 20
        }
    }

    WrongAnswer = (data_answer) => {
        const data_el = this.ui.quiz.querySelector(`[data-answer="${data_answer}"]`)
        const data_correct_el = this.ui.quiz.querySelector(`[data-answer="${this.GetCurrentQuestion().answer}"]`)

        if (data_el) {
            data_el.classList.add('bg-red-300')
            this.wrong += 1
        }

        if (data_correct_el) {
            data_correct_el.classList.add('bg-green-300')
        }
    }

    FinishGame = () => {
        this.ui.content.classList.add('hidden')
        this.ui.result_area.classList.add('active')
        clearInterval(this.timer)

        this.ui.result.innerHTML = ""

        this.ui.result.innerHTML = `
            <ul class="flex flex-col">
                <li class="border-b p-4">
                    Total Points : <strong>${this.total}</strong>
                </li>
                <li class="border-b p-4">
                    Correct Answers : <strong>${this.correct}</strong>
                </li>
                <li class="border-b p-4">
                    Wrong Answers : <strong>${this.wrong}</strong>
                </li>
                 <li class="border-b p-4">
                   Not Answered : <strong>${this.not_answered}</strong>
                </li>
            </ul>
        `
    }

    NextQuiz = () => {
        if (this.index < this.questions.length - 1) {
            this.index++
            this.GetCurrentQuestion()
            this.RefreshTimer()
            this.DisabledClick()
            this.RenderQuiz()
            this.ShowNextBtn()
        } else {
            this.FinishGame()
        }

        if (this.questions.length - 1 <= this.index) {
            this.ui.next_btn.innerHTML = 'Finish Quiz'
        }
    }

    RestartGame = () => {
        window.location.reload()
    }

    RefreshTimer = () => {
        clearInterval(this.time)
        this.time = 10
        this.SetTime()
    }

    SetTime = (not_answered) => {
        clearInterval(this.timer);
        this.ui.set_time.innerHTML = this.time;

        this.timer = setInterval(() => {
            this.time--;
            this.ui.set_time.innerHTML = this.time;
            if (this.time === 0) {
                if (not_answered === undefined) {
                    this.not_answered += 1
                }
                clearInterval(this.timer);
                this.NextQuiz();
            }
        }, 1000);
    }

    StartGame = () => {
        this.ui.initial_load.classList.add('hidden')
        this.ui.content.classList.add('active')

        this.SetTime()
    }

    RenderQuiz = () => {
        this.ui.quiz.innerHTML = "";

        this.ui.quiz.innerHTML += `
           <h2 class="text-md mb-5">
                <span class="font-bold"> ${this.index + 1}.</span>
                ${this.GetCurrentQuestion().question}
            </h2>
            <ul id="options-list" class="space-y-4"></ul>
        `;

        const variants = ['a', 'b', 'c', 'd']

        const optionsList = document.getElementById('options-list');

        this.GetCurrentQuestion().options.forEach((option, index) => {
            optionsList.innerHTML += `
                <li data-answer=${option} class="border border-[#A7A7A7] py-2 px-3 rounded-md cursor-pointer hover:scale-105 transition-all flex gap-2">
                    <span class="font-bold">${variants[index]}.</span> 
                    <p>${option}</p>
                </li>
            `;
        });

        this.ui.quesion_length.innerHTML = this.questions.length
        this.ui.current_question_number.innerHTML = this.index + 1
    }

    Events = () => {
        this.ui.next_btn.addEventListener('click', this.NextQuiz)
        this.ui.quiz.addEventListener('click', this.SelectAnswer)
        this.ui.restart_btn.addEventListener('click', this.RestartGame)
        this.ui.start_game_btn.addEventListener('click', this.StartGame)
    }
}

export default Quiz