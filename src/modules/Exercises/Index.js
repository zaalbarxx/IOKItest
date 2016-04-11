/*
 * Javascripts
 * ========================================================================== */

import angular        from 'angular';
import ExerciseController from './controller/ExerciseCtrl';
import ExerciseImageQuestion from './directives/ExerciseImageQuestion';
import TitleService from './../Starter/services/TitleService/TitleService';
/*
 * Stylesheets
 * ========================================================================== */

import './stylesheets/exercise.scss';

/* ========================================================================== */

/**
 * Define home page module.
 * @param {String} moduleName.
 * @param {Array} dependencies.
 * @export Module name - name of this module.
 */
export default angular.module('Starter.App.Exercises', [ExerciseImageQuestion, TitleService, 'ui.select']).controller('ExerciseController', ExerciseController).name;
