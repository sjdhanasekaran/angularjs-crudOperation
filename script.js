
    var myApp = angular.module('myApp', []);

    myApp.controller('myController', ['$scope','$window', function ($person,$window) {
	
            $person.add = function () 
            {
				 
                if (angular.isDefined($person.name) && $person.name != '' && $person.email != '' &&  $person.age != '') 
                {
                    $person.list.push({ name: $person.name,email:$person.email ,age: $person.age });
                    $person.name = '';
                    $person.email = '';
                    $person.age = '';
				
					  $window.alert('Details Added SuccessFully.To view The Added Detail Click view On Home ');
                }
            }

 $person.Delete= function (index,names) {
     $person.list.splice(index,1);

    }

        }]
    );
	