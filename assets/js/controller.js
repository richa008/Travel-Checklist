travelChecklistApp.controller("travelChecklistController", ["$scope", "$uibModal", "$uibModalStack", "basicItemsDataService", "localStorageService", "methodService", function ($scope, $uibModal, $uibModalStack, basicItemsDataService, localStorageService, methodService) {

    $scope.checklist = {};
    getData();

    $scope.openCreateListModal = function () {
        $scope.model = {};
        var modalInstance = $uibModal.open({
            templateUrl: '/partials/createChecklistModal.html',
            controller: 'travelChecklistController',
            scope: $scope //Creates child scope
        });
    }


    $scope.closeModal = function () {
        $uibModalStack.dismissAll();
    };


    function getData() {
        $scope.checklist.destination = localStorageService.getDestinationFromLocalStorage();
        $scope.checklist.basicCategories = localStorageService.getBasicFromLocalStorage();
        $scope.checklist.clothesCategories = localStorageService.getClothesFromLocalStorage();
        $scope.checklist.otherCategories = localStorageService.getOtherFromLocalStorage();

    }

    $scope.createChecklist = function () {
        $scope.$parent.checklist.destination = $scope.model.destination;
        $scope.$parent.checklist.basicCategories = [basicItemsDataService.basicCategory, basicItemsDataService.electronicsCategory, basicItemsDataService.medicineCategory];
        $scope.$parent.checklist.clothesCategories = [basicItemsDataService.clothesCategory, basicItemsDataService.footwearCategory, basicItemsDataService.accessoriesCategory];
        $scope.$parent.checklist.otherCategories = [basicItemsDataService.personalHygieneCategory, basicItemsDataService.hairFaceCareCategory, basicItemsDataService.otherCategory];

        saveDestinationData($scope.$parent.checklist.destination);
        saveCategoriesData($scope.$parent.checklist.basicCategories, $scope.$parent.checklist.clothesCategories, $scope.$parent.checklist.otherCategories);
        $scope.closeModal();
    }

    function saveCategoriesData(basicCategories, clothesCategories, otherCategories) {
        localStorageService.saveBasicToLocalStorage(basicCategories);
        localStorageService.saveClothesToLocalStorage(clothesCategories);
        localStorageService.saveOtherToLocalStorage(otherCategories);
    }

    function saveDestinationData(destination) {
        localStorageService.saveDestinationToLocalStorage(destination);
    }

    $scope.$on("saveChecklist", function (event) {
        saveCategoriesData($scope.checklist.basicCategories, $scope.checklist.clothesCategories, $scope.checklist.otherCategories);
        event.stopPropagation();
    });

}]);
