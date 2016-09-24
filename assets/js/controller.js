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
        $uibModalStack.dismissAll();
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

    //    $scope.onChange = function () {
    //        saveCategoriesData($scope.checklist.basicCategories, $scope.checklist.clothesCategories, $scope.checklist.otherCategories);
    //    }

    //    $scope.openAddItemModal = function (categoryId, colNo) {
    //        $scope.model = {};
    //        $scope.selectedCategoryInfo = {
    //            "categoryId": categoryId,
    //            "colNo": colNo
    //        };
    //        var modalInstance = $uibModal.open({
    //            templateUrl: '/partials/addChecklistItemModal.html',
    //            controller: 'travelChecklistController',
    //            scope: $scope //Creates child scope
    //        });
    //    }
    //
    //    $scope.addItemToCategory = function () {
    //        var category = findCategory($scope.selectedCategoryInfo.categoryId, $scope.selectedCategoryInfo.colNo);
    //        category = methodService.addItemToCategory(category, $scope.model.itemName);
    //        saveCategoriesData($scope.checklist.basicCategories, $scope.checklist.clothesCategories, $scope.checklist.otherCategories);
    //
    //        $scope.$parent.checklist.basicCategories = $scope.checklist.basicCategories;
    //        $scope.$parent.checklist.clothesCategories = $scope.checklist.clothesCategories;
    //        $scope.$parent.checklist.otherCategories = $scope.checklist.otherCategories;
    //        
    //        $scope.closeModal();
    //    }

    //    $scope.openDeleteItemModal = function (categoryId, colNo) {
    //        $scope.model = {};
    //        $scope.selectedCategoryInfo = {
    //            "categoryId": categoryId,
    //            "colNo": colNo
    //        };
    //        var modalInstance = $uibModal.open({
    //            templateUrl: '/partials/deleteItemModal.html',
    //            controller: 'travelChecklistController',
    //            scope: $scope //Creates child scope
    //        });
    //    }
    //
    //    $scope.deleteItemFromCategory = function () {
    //        var category = findCategory($scope.selectedCategoryInfo.categoryId, $scope.selectedCategoryInfo.colNo);
    //        category = methodService.addItemToCategory(category, $scope.model.itemName);
    //        saveCategoriesData($scope.checklist.basicCategories, $scope.checklist.clothesCategories, $scope.checklist.otherCategories);
    //
    //        $scope.$parent.checklist.basicCategories = $scope.checklist.basicCategories;
    //        $scope.$parent.checklist.clothesCategories = $scope.checklist.clothesCategories;
    //        $scope.$parent.checklist.otherCategories = $scope.checklist.otherCategories;
    //        
    //        $scope.closeModal();
    //    }

    function findCategory(id, colNo) {
        if (colNo === 1) {
            return $scope.checklist.basicCategories.find(x => x.id === id);
        } else if (colNo == 2) {
            return $scope.checklist.clothesCategories.find(x => x.id === id);
        } else {
            return $scope.checklist.otherCategories.find(x => x.id === id);
        }

    }


}]);
