import Exercises from '../Index';
import uiSelect from 'ui-select/src/common';

describe('Controller: Exercise', () => {
    let TitleService, $controller, controller;

    beforeEach(() => {
        angular.mock.module(Exercises);
        angular.mock.module('Starter.App.TitleService');
        angular.mock.module('ui.select');
        angular.mock.module('Starter.App.Directives.ExerciseImageQuestion');
    });
    beforeEach(angular.mock.inject((_$controller_, _TitleService_) => {
        $controller  = _$controller_;
        TitleService = _TitleService_;
        let Exercise = {};
        controller = $controller('ExerciseController', { TitleService , Exercise});
    }));

    it('should be defined', () => {
        console.log($controller);
        expect(controller).toBeDefined();
    });

    it('should be defined with TitleService', () => {
        expect(TitleService).toBeDefined();
    });
});

