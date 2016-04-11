import angular from 'angular';

/**
 * @constructor
 */
const Service = ($q) => {
    "ngInject";
    const exercises = {};

    class ExerciseApi {

        static getAll(params = {}) {
            return $q(function (resolve, reject) {
                setTimeout(function () {
                    const items = [];
                    for (let i = 1; i <= 10; i++) {
                        items.push({
                            id: i,
                            name: `Exercise ${i}`,
                            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis, inventore minima omnis repellat similique. Commodi consequatur dignissimos eius itaque labore, minima odio omnis qui quisquam quo ratione sint sit!"
                        });
                    }
                    resolve(items);
                }, 1000);
            });
        }

        static getById(id) {
            return $q(function (resolve, reject) {
                setTimeout(function () {
                    let exercise;
                    if(!exercises[id]) {
                        exercises[id] = exercise = exercises[id] = exercise = exercises[id] = {
                            id: id,
                            name: `Exercise ${id}`,
                            type: 'images',
                            images: [
                                {
                                    id: 1,
                                    url: 'assets/images/exercises/icon_book.jpg',
                                    answer_id: 1
                                },
                                {
                                    id: 2,
                                    url: 'assets/images/exercises/icon_gauge.jpg',
                                    answer_id: 2
                                },
                                {
                                    id: 3,
                                    url: 'assets/images/exercises/icon_globe2.jpg',
                                    answer_id: 3
                                },
                                {
                                    id: 4,
                                    url: 'assets/images/exercises/icon_graph.jpg',
                                    answer_id: 4
                                },
                                {
                                    id: 5,
                                    url: 'assets/images/exercises/icon_share.jpg',
                                    answer_id: 5
                                },
                                {
                                    id: 6,
                                    url: 'assets/images/exercises/icon_speech_bubble2.jpg',
                                    answer_id: 6
                                }
                            ],
                            answers: [
                                {
                                    id: 1,
                                    text: 'Book'
                                },
                                {
                                    id: 2,
                                    text: 'Gauge'
                                },
                                {
                                    id: 3,
                                    text: 'Globe'
                                },
                                {
                                    id: 4,
                                    text: 'Graph'
                                }, {
                                    id: 5,
                                    text: 'Share'
                                }, {
                                    id: 6,
                                    text: 'Speech'
                                }
                            ]
                        };;
                    }
                    else {
                        exercise = exercises[id];
                    }
                    resolve(exercise, 1000);
                });
            });
        }
    }
    return {
        getAll: ExerciseApi.getAll,
        getById: ExerciseApi.getById
    };
}
export default angular.module('Starter.App.Services.ExercisesApi', []).factory('ExercisesApi', Service).name;
