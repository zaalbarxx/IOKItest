/*
 * Javascripts
 * ========================================================================== */

import angular from 'angular';

import Layout  from './Index';
import Home    from '../Home/Index';
import Exercises from '../Exercises/Index';
/**
 * Define app module.
 * @param {String} moduleName.
 * @param {Array} dependencies.
 * @export Controllers module
 */
export default angular.module('Starter.App.controllers', [
  Layout, Home, Exercises
]).name;
