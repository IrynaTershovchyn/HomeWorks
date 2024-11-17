var chihuahua = {
    name: "Ponchick",
    weight: 2.5,
    favoriteToy: "racoon",
};

var x = chihuahua;
function getInfo() {
    for (var key in x) {
        console.log(key + ": " + x[key]);
    };
};

// chihuahua.tail = "fluffy";
getInfo();
