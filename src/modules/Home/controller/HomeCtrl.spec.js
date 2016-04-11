import Home from '../Index';

describe('Controller: Home', () => {
  let TitleService, $controller, controller;

  beforeEach(() => {
    angular.mock.module(Home);
    angular.mock.module('Starter.App.TitleService');
    angular.mock.module('Starter.App.Services.ExercisesApi');
  });

  beforeEach(angular.mock.inject((_$controller_, _TitleService_) => {
    $controller  = _$controller_;
    TitleService = _TitleService_;
    let Exercises = [];
    controller   = $controller('HomeController', { TitleService , Exercises});
  }));

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be defined with TitleService', () => {
    expect(TitleService).toBeDefined();
  });
});

