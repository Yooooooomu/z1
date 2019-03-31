"use strict";
// namespace
var mingxing;
(function (mingxing) {
    class Yangfan {
        constructor(height, money) {
            this.height = height;
            this.money = money;
        }
        msg() {
            console.log('wo shi ming xing');
        }
    }
    mingxing.Yangfan = Yangfan;
})(mingxing || (mingxing = {}));
var kenglao;
(function (kenglao) {
    class Yangfan {
        constructor(height, money) {
            this.height = height;
            this.money = money;
        }
        msg() {
            console.log('duren 13');
        }
    }
    kenglao.Yangfan = Yangfan;
})(kenglao || (kenglao = {}));
let y1 = new mingxing.Yangfan(180, 1000000);
let y2 = new kenglao.Yangfan(150, 0);
y1.msg();
y2.msg();
