/*
 * Javascripts
 * ========================================================================== */

import angular        from 'angular';
import HomeController from './controller/HomeCtrl';

/*
 * Stylesheets
 * ========================================================================== */

import './stylesheets/home.scss';
import ExercisesApi from './../Exercises/services/ExercisesApi';
/* ========================================================================== */

/**
 * Define home page module.
 * @param {String} moduleName.
 * @param {Array} dependencies.
 * @export Module name - name of this module.
 */
export default angular.module('Starter.App.Home', [ExercisesApi]).controller('HomeController', HomeController).name;
