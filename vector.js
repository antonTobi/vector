V = Array.prototype;

V.add = function (other) {
  this[0] += other[0];
  this[1] += other[1];
};

V.sub = function (other) {
  this[0] -= other[0];
  this[1] -= other[1];
};

V.mult = function (scalar) {
  this[0] *= scalar;
  this[1] *= scalar;
};

V.div = function (scalar) {
  this[0] /= scalar;
  this[1] /= scalar;
};

V.plus = function (other) {
  return [this[0] + other[0], this[1] + other[1]];
};

V.minus = function (other) {
  return [this[0] - other[0], this[1] - other[1]];
};

V.times = function (scalar) {
  return [this[0] * scalar, this[1] * scalar];
};

V.over = function (scalar) {
  return [this[0] / scalar, this[1] / scalar];
};

V.dot = function (other) {
  return this[0] * other[0] + this[1] * other[1];
};

V.mag = function () {
  return Math.sqrt(this[0] ** 2 + this[1] ** 2);
};

V.magSq = function () {
  return this[0] ** 2 + this[1] ** 2;
};

V.dist = function (other) {
  return Math.sqrt((this[0] - other[0]) ** 2 + (this[1] - other[1]) ** 2);
};

V.distSq = function (other) {
  return (this[0] - other[0]) ** 2 + (this[1] - other[1]) ** 2;
};

V.inside = function (other, r) {
  return (this[0] - other[0]) ** 2 + (this[1] - other[1]) ** 2 < r ** 2;
};

V.rotate = function (angle) {
  return [
    this[0] * Math.cos(angle) - this[1] * Math.sin(angle),
    this[0] * Math.sin(angle) + this[1] * Math.cos(angle),
  ];
};

V.arg = function () {
  return Math.atan2(this[1], this[0]);
};

// complex multiplication
V.ctimes = function (other) {
  return [
    this[0] * other[0] - this[1] * other[1],
    this[0] * other[1] + this[1] * other[0],
  ];
};

// complex exponentiation
V.cpow = function (scalar) {
  let r = this.mag() ** scalar;
  let a = Math.atan2(this[1], this[0]) * scalar;
  return [r * cos(a), r * sin(a)];
};

function random2D() {
  let theta = Math.random() * 2 * Math.PI;
  return [Math.cos(theta), Math.sin(theta)];
}

// p5.js helper methods
V.circle = function (r) {
  circle(this[0], this[1], r);
};

V.line = function (other) {
  line(this[0], this[1], other[0], other[1]);
};

V.translate = function () {
  translate(this[0], this[1]);
};
