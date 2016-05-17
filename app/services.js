angular.module("doggycloud")
    .factory("animalApiService", function($q, $http, $resource) {
        // configure $resource
        var animalResource =
            $resource(
                "URL for API/animals/:id",
                { id: "@id" },
                {
                    update: { method: 'PUT' }
                }
            );
        //scope fix as this is not the controller
        var animals = [];
        return {

        }


    })
