import {chunk, map} from 'lodash';
/**
 * @module Root controller
 * @class StarterController
 */
export default class ExerciseController {
    /**
     * @constructor Bootstrap app.
     */
    constructor(TitleService, Exercise) {
        "ngInject";
        TitleService.setTitle({newTitle: `Exercise - ${Exercise.name}`});
        this.exercise= Exercise;
        this.questions = this.exercise.images;
        this.chunks = chunk(this.exercise.images, 3);

        this.validate = function () {
            this.questions = map(this.questions, function (question) {
                question.valid = question.answer_id == question.answer.id;
                return question;
            });
        }
    }
}
