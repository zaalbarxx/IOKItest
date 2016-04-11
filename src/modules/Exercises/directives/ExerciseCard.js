import angular from 'angular';

/**
 * Set pointer-events property to none on scroll for boosting
 * performance (up to 60fps). Disable css hover events
 * @module Pointer Events
 * @param {Object} $timeout - Timeout provider.
 */
const ExerciseCard = () => {
    "ngInject";

    return {
        restrict: 'E',
        template: require('./exerciseCard.jade')(),
        bindToController: {
            card: '='
        },
        controllerAs: 'Card',
        link(scope) {

        },
        controller: Controller
    };
};

const Controller = function() {
}
/**
 * Define PointerEvents module.
 * @param {String} moduleName.
 * @param {Array} dependencies.
 * @export Module name - name of this module.
 */
export default angular.module('Starter.App.Directives.ExerciseCard', []).directive('exerciseCard', ExerciseCard).name;
