travelChecklistApp.factory("Item", function () {

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
