travelChecklistApp.directive("checklistCategory", ["$uibModal", "$uibModalStack", "methodService", function ($uibModal, $uibModalStack, methodService) {
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
