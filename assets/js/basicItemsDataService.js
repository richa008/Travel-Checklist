travelChecklistApp.service("basicItemsDataService", ["Item", "Category", function (Item, Category) {
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
