var orm = require("../config/orm.js");

var burger = {
    all: function(){
        return new Promise (function(resolve, reject) {
            orm.all("burgers", function(res) {
                resolve(res);
            })
        })

    }
}

module.exports = burger;