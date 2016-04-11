/**
 * @module Controller for page home of public section layout.
 * @class HomeController
 */
import {chunk} from 'lodash';

export default class HomeController {
  /**
   * @constructor
   * @param {object} TitleService - Controlling our title.
   */
  constructor(TitleService, Exercises) {
    "ngInject";

    TitleService.setTitle({
      newTitle: 'Home'
    });
    this.exercises = chunk(Exercises, 3);
  }
}
