//// [source.js]
/**
 * @param {number} len
 */ import { _ as _instanceof } from "@swc/helpers/_/_instanceof";
export function Vec(len) {
    /**
     * @type {number[]}
     */ this.storage = Array(len);
}
Vec.prototype = {
    /**
     * @param {Vec} other
     */ dot: function(other) {
        if (other.storage.length !== this.storage.length) throw Error("Dot product only applicable for vectors of equal length");
        for(var sum = 0, i = 0; i < this.storage.length; i++)sum += this.storage[i] * other.storage[i];
        return sum;
    },
    magnitude: function() {
        for(var sum = 0, i = 0; i < this.storage.length; i++)sum += Math.pow(this.storage[i], 2);
        return Math.sqrt(sum);
    }
};
/**
 * @param {number} x
 * @param {number} y
 */ export function Point2D(x1, y1) {
    if (!_instanceof(this, Point2D)) return new Point2D(x1, y1);
    Vec.call(this, 2), this.x = x1, this.y = y1;
}
Point2D.prototype = {
    __proto__: Vec,
    get x () {
        return this.storage[0];
    },
    /**
     * @param {number} x
     */ set x (x){
        this.storage[0] = x;
    },
    get y () {
        return this.storage[1];
    },
    /**
     * @param {number} y
     */ set y (y){
        this.storage[1] = y;
    }
};
//// [referencer.js]
import { Point2D } from "./source";
export var origin = new Point2D(0, 0); // export const res = Point2D(2, 3).dot(origin); // TODO: when __proto__ works, validate this
