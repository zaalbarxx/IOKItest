import ExercisesApi from './ExercisesApi';

describe('Service: ExercisesApi', () => {
    let $compile;

    beforeEach(inject((_$compile_) => {
        $compile = _$compile_;
    }));

    it('should be defined', () => {
        expect($compile).toBeDefined();
    });
});
