import Exercise from '../Index';

describe('Controller: Exercise', () => {
    let TitleService, $controller, controller;

    beforeEach(() => {
        angular.mock.module(Exercise);
        angular.mock.module('Starter.App.TitleService');
        angular.mock.module('Starter.App.Services.ExercisesApi');
    });

    beforeEach(angular.mock.inject((_$controller_, _TitleService_) => {
        $controller  = _$controller_;
        TitleService = _TitleService_;
        let Exercise = {};
        controller = $controller('ExerciseController', {TitleService, Exercise});
    }));

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('should be defined with TitleService', () => {
        expect(TitleService).toBeDefined();
    });
});

