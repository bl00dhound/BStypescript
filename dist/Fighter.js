"use strict";
exports.__esModule = true;
var Fighter = (function () {
    function Fighter(name, power, health) {
        this.name = name;
        this.power = power;
        this.health = health;
    }
    Fighter.hit = function (enemy, point) {
        var damage = point * enemy.power;
        enemy.setDamage(damage);
    };
    Fighter.prototype.setDamage = function (damage) {
        this.health -= damage;
        console.log(this.name + " health: " + this.health);
    };
    return Fighter;
}());
exports["default"] = Fighter;
