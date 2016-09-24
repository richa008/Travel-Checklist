travelChecklistApp.service("basicItemsDataService", ["Item", "Category", function (Item, Category) {
    var basics = [
        new Item(1, "Cash", false),
        new Item(2, "Credit Card", false),
        new Item(3, "ID card", false),
        new Item(4, "Wallet", false),
        new Item(5, "Keys", false)
    ]

    var electronics = [
        new Item(1, "Mobile Phone", false),
        new Item(2, "Mobile Phone Charger", false),
        new Item(3, "Laptop", false),
        new Item(4, "Laptop Charger", false),
        new Item(5, "Camera", false),
        new Item(6, "Headphones", false),
        new Item(7, "Kindle", false)
    ]

    var medicine = [
        new Item(1, "Asprin", false),
        new Item(2, "Contact lens solution", false),
        new Item(3, "Contact lenses", false),
        new Item(4, "Antacids", false),
        new Item(5, "Anteseptic cream", false)
    ]

    var clothes = [
        new Item(1, "Innerwear", false),
        new Item(2, "Pajamas", false),
        new Item(3, "Tshirts", false),
        new Item(4, "Jeans", false),
        new Item(5, "Shorts", false),
        new Item(6, "Jacket", false),
        new Item(7, "Skirts", false),
        new Item(8, "Dresses", false),
        new Item(9, "Athletic clothes", false)
    ]

    var footwear = [
        new Item(1, "Sandals", false),
        new Item(2, "Athletic shoes", false),
        new Item(3, "Slippers", false),
        new Item(4, "Jeans", false),
        new Item(5, "Boots", false)
    ]

    var accessories = [
        new Item(1, "Backpack", false),
        new Item(2, "Belt", false),
        new Item(3, "Watchers", false),
        new Item(4, "Sunglasses", false)
    ]

    var personalHygiene = [
        new Item(1, "Shampoo", false),
        new Item(2, "Conditioner", false),
        new Item(3, "Body wash", false),
        new Item(4, "Face wash", false),
        new Item(5, "Razors", false),
        new Item(6, "Toothbrush", false),
        new Item(7, "Toothpaste", false),
        new Item(8, "Pads/Tampons", false),
        new Item(9, "Deodorant", false)
    ]

    var hairFaceCare = [
        new Item(1, "Comb", false),
        new Item(2, "Lip balm", false),
        new Item(3, "Sunscreen", false),
        new Item(4, "Hair styler", false),
        new Item(5, "Lotion", false)
    ]

    var other = [
        new Item(1, "Map", false),
        new Item(2, "Book", false),
        new Item(3, "Travel pillow/Blanket", false),
    ]

    this.basicCategory = new Category(101, "Basics", basics.length, basics);
    this.electronicsCategory = new Category(102, "Electronics", electronics.length, electronics);
    this.medicineCategory = new Category(103, "Medicines", medicine.length, medicine);
    
    this.clothesCategory = new Category(104, "Clothes", clothes.length, clothes);
    this.footwearCategory = new Category(105, "Footwear", footwear.length, footwear);
    this.accessoriesCategory = new Category(106, "Accessories", accessories.length, accessories);
    
    this.personalHygieneCategory = new Category(107, "Personal Hygiene", personalHygiene.length, personalHygiene);
    this.hairFaceCareCategory = new Category(108, "Hair and Face Care", hairFaceCare.length, hairFaceCare);
    this.otherCategory = new Category(109, "Other", other.length, other);

}]);
