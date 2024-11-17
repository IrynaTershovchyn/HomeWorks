var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
  
     price: function () {
        let servicesTotal = 0;
        for (var key in this) {
            if (typeof this[key] === "string") {
                servicesTotal += Number.parseFloat(this[key]);
            }
        }
        return servicesTotal
    },

    minPrice: function () {
        let min = Infinity;
        for (var key in this) {
            if (typeof this[key] === "string") {
                let price = Number.parseFloat(this[key]);
                if (price < min) {
                    min = price;
                }
            }
        }
        return min
    },

    maxPrice: function () {
        let max = 0;
        for (var key in this) {
            if (typeof this[key] === "string") {
                let price = Number.parseFloat(this[key]);
                if (price > max) {
                    max = price;
                }
            }
        }
        return max
    }
}

console.log("Загальна вартість послуг: " + services.price());
console.log("Найменша ціна: " + services.minPrice());
console.log("Найбільша ціна: " + services.maxPrice());



