import ExerciseCard from './ExerciseCard';

describe('Directive: ExerciseCard', () => {
    let $compile, $rootScope;

    beforeEach(angular.mock.module(ExerciseCard));

    beforeEach(inject((_$compile_, _$rootScope_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('should be defined', () => {
        expect($compile).toBeDefined();
    });

    it('should return an element with appropriate content', function() {
        $rootScope.card = {
            id: 1,
            name: 'Card',
            description: 'Some description'
        };
        let element = $compile('<exercise-card card="card"></exercise-card>')($rootScope);
        $rootScope.$digest();
        expect(element.html()).toContain('Card');
        expect(element.html()).toContain('Some description');

    })
});
