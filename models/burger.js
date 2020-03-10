var orm = require("../config/orm.js");

var burger = {
    all: function(){
        return new Promise (function(resolve, reject) {
            orm.all("burgers", function(res) {
                resolve(res);
            })
        })
    },
    update: function(id, cb) {
        orm.update("burgers", id, cb)

    },

    add: function(name, cb) {
        orm.add("burgers", name, cb)
    }
}

module.exports = burger;