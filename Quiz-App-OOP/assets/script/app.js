import { questions } from "./questions.js";
import Quiz from "./quiz.js";

const quiz_app = new Quiz(questions)

quiz_app.RenderQuiz()
quiz_app.Events()