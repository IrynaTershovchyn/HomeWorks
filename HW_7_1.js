var chihuahua = {
    name: "Ponchick",
    weight: 2.5,
    favoriteToy: "racoon",
    getInfo: function () {
        for (var key in this) {
            if (typeof this[key] != "function")
            console.log(key + ": " + this[key]);
        };
    }
};


//chihuahua.tail = "fluffy";
chihuahua.getInfo();