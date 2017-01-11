var travelChecklistApp = angular.module('travelChecklistApp', ['ui.bootstrap']);
;travelChecklistApp.service("basicItemsDataService", ["Item", "Category", function (Item, Category) {
    var basics = [
        new Item(1, "Cash", false),
        new Item(2, "Credit Card", false),
        new Item(3, "ID card", false),
        new Item(4, "Keys", false),
        new Item(5, "Wallet", false)
    ]

    var electronics = [
        new Item(1, "Camera", false),
        new Item(2, "Headphones", false),
        new Item(3, "Kindle", false),
        new Item(4, "Laptop", false),
        new Item(5, "Laptop Charger", false),
        new Item(6, "Mobile Phone", false),
        new Item(7, "Mobile Phone Charger", false)
    ]

    var medicine = [
        new Item(1, "Antacids", false),
        new Item(2, "Anteseptic cream", false),
        new Item(3, "Asprin", false),
        new Item(4, "Band-aid", false),
        new Item(5, "Contact lenses", false),
        new Item(6, "Contact lens solution", false)      
    ]

    var clothes = [
        new Item(1, "Active wear", false),
        new Item(2, "Dresses/Skirts", false),
        new Item(3, "Inner wear", false),
        new Item(4, "Jacket", false),
        new Item(5, "Jeans", false),
        new Item(6, "Sleep wear", false),
        new Item(7, "Shorts", false),
        new Item(8, "Swimsuit", false),
        new Item(9, "Tshirts/Tops", false)
    ]

    var footwear = [
        new Item(1, "Athletic shoes", false),
        new Item(2, "Boots", false),
        new Item(3, "Sandals", false),
        new Item(4, "Slippers", false)
    ]

    var accessories = [
        new Item(1, "Backpack", false),
        new Item(2, "Belt", false),
        new Item(3, "Sunglasses", false),
        new Item(4, "Watch", false)
    ]

    var personalHygiene = [
        new Item(3, "Body wash", false),
        new Item(2, "Conditioner", false),
        new Item(4, "Face wash", false),
        new Item(8, "Pads/Tampons", false),
        new Item(5, "Razors", false),
        new Item(1, "Shampoo", false),
        new Item(6, "Toothbrush", false),
        new Item(7, "Toothpaste", false),
        new Item(8, "Towel", false)
    ]

    var hairFaceCare = [
        new Item(1, "Comb", false),
        new Item(4, "Hair gel", false),
        new Item(2, "Lip balm", false),
        new Item(5, "Lotion", false),
        new Item(3, "Sunscreen", false)
            
    ]

    var other = [
        new Item(1, "Book", false),
        new Item(2, "Map", false),
        new Item(3, "Travel pillow/Blanket", false),
    ]

    this.basicCategory = new Category(101, "Basics", basics.length, basics);
    this.electronicsCategory = new Category(102, "Electronics", electronics.length, electronics);
    this.medicineCategory = new Category(103, "Medicines", medicine.length, medicine);

    this.clothesCategory = new Category(104, "Clothes", clothes.length, clothes);
    this.footwearCategory = new Category(105, "Footwear", footwear.length, footwear);
    this.accessoriesCategory = new Category(106, "Accessories", accessories.length, accessories);

    this.personalHygieneCategory = new Category(107, "Personal Hygiene Items", personalHygiene.length, personalHygiene);
    this.hairFaceCareCategory = new Category(108, "Hair and Face Care", hairFaceCare.length, hairFaceCare);
    this.otherCategory = new Category(109, "Other", other.length, other);

}]);
;travelChecklistApp.controller("travelChecklistController", ["$scope", "$uibModal", "$uibModalStack", "basicItemsDataService", "localStorageService", "methodService", function ($scope, $uibModal, $uibModalStack, basicItemsDataService, localStorageService, methodService) {

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
;travelChecklistApp.directive("checklistCategory", ["$uibModal", "$uibModalStack", "methodService", function ($uibModal, $uibModalStack, methodService) {
    return {
        restrict: 'E',
        scope: {
            category: '=',
            colNo: '@'
                //addItem: '&',
                //onCheckboxChange: '&'
        },
        templateUrl: 'partials/checklistCategory.html',
        link: function (scope, element, attr) {

            scope.onChange = function (item) {
                scope.$emit("saveChecklist");
            }

            scope.openAddItemModal = function () {
                scope.model = {};
                var modalInstance = $uibModal.open({
                    templateUrl: '/partials/addChecklistItemModal.html',
                    controller: 'travelChecklistController',
                    scope: scope //Creates child scope
                });
            }

            scope.addItemToCategory = function () {
                methodService.addItemToCategory(scope.category, scope.model.itemName);
                scope.$emit("saveChecklist");
                $uibModalStack.dismissAll();
            }

            scope.deleteItem = function (item) {
                var index = scope.category.items.indexOf(item);
                if (index !== -1) {
                    scope.category.items.splice(index, 1);
                }
                scope.$emit("saveChecklist");
            }
        }
    }
}]);

travelChecklistApp.directive("showButtonOnHover", function () {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            element.bind("mouseenter", function () {
                var btn = element.find("button");
                (btn).removeClass('ng-hide');
            });

            element.bind("mouseleave", function () {
                var btn = element.find("button");
                (btn).addClass('ng-hide');
            });
        }
    }
})
;travelChecklistApp.service("localStorageService", function () {

    this.saveDestinationToLocalStorage = function (data) {
        localStorage.setItem('Destination', JSON.stringify(data));
    };


    this.getDestinationFromLocalStorage = function () {
        var data = localStorage.getItem('Destination');
        if (data !== null) {
            return JSON.parse(data);
        }
    };

    this.saveBasicToLocalStorage = function (data) {
        localStorage.setItem('BasicCategories', JSON.stringify(data));
    };


    this.getBasicFromLocalStorage = function () {
        var data = localStorage.getItem('BasicCategories');
        if (data !== null) {
            return JSON.parse(data);
        }
    };

    this.saveClothesToLocalStorage = function (data) {
        localStorage.setItem('ClothesCategories', JSON.stringify(data));
    };


    this.getClothesFromLocalStorage = function () {
        var data = localStorage.getItem('ClothesCategories');
        if (data !== null) {
            return JSON.parse(data);
        }
    };

    this.saveOtherToLocalStorage = function (data) {
        localStorage.setItem('OtherCategories', JSON.stringify(data));
    };


    this.getOtherFromLocalStorage = function () {
        var data = localStorage.getItem('OtherCategories');
        if (data !== null) {
            return JSON.parse(data);
        }
    };

});
;travelChecklistApp.factory("Item", function () {

    function Item(id, name, done) {
        this.id = id;
        this.name = name;
        this.done = done;
    }

    return Item;
});

travelChecklistApp.factory("Category", function () {

    function Category(id, name, count, items) {
        this.id = id;
        this.name = name;
        this.count = count;
        this.items = items; //Array of items 
    }

    return Category;
});


travelChecklistApp.service("methodService", ["Item", function (Item) {

    this.addItemToCategory = function (category, itemName) {
        var itemNo = ++category.count;
        var item = new Item(itemNo, itemName, false);
        category.items.push(item);

        return category;
    }

}]);
