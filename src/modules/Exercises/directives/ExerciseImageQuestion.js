import angular from 'angular';

/**
 * Set pointer-events property to none on scroll for boosting
 * performance (up to 60fps). Disable css hover events
 * @module Pointer Events
 * @param {Object} $timeout - Timeout provider.
 */
const ExerciseImageQuestion = () => {
    "ngInject";

    return {
        restrict: 'E',
        template: require('./exerciseImageQuestion.jade')(),
        bindToController: {
            image: '=',
            answers: '='
        },
        controllerAs: 'ExerciseImageQuestion',
        link(scope) {

        },
        controller: Controller
    };
};

const Controller = function() {
    this.getCssClasses = function() {
        if(!this.image || !angular.isDefined(this.image.valid)) return {};
        return {
            valid: this.image.valid,
            invalid: !this.image.valid
        };
    }
}
/**
 * Define PointerEvents module.
 * @param {String} moduleName.
 * @param {Array} dependencies.
 * @export Module name - name of this module.
 */
export default angular.module('Starter.App.Directives.ExerciseImageQuestion', []).directive('exerciseImageQuestion', ExerciseImageQuestion).name;
