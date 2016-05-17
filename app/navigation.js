/**
 * Created by Vang on 17/05/2016.
 */
angular.module('doggycloud')
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/kunder');

        $stateProvider.state('kundeformular', {
            url: '/kundeformular',
            templateUrl: 'app/partials/customerForm.html',
            controller: 'newEditCustomerController'
            //params: { customerParameter: null}
        })
            .state('dyreformular', {
                url: '/dyreformular',
                templateUrl: 'app/partials/animalForm.html',
                controller: 'newEditAnimalController'
                //params: { animalParameter: null}
            })

            .state('kunder', {
                url: '/kunder',
                templateUrl: 'app/partials/customerTable.html'
                //controller: 'customerController'
                //måske skal ovenstående controller ikke med, da den allerede er default i index.html
            })

            .state('dyr', {
                url: '/dyr',
                templateUrl: 'app/partials/animalTable',
                controller: 'animalController'
            })

    });