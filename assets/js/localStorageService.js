travelChecklistApp.service("localStorageService", function () {

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
