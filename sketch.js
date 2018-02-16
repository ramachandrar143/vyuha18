var l = [];
var l1 = [];
// var w=windowWidth;
// var h=windowHeight;
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-2');
    for (var i = 0; i < 50; i++) {
        l[i] = new lin(random(0, windowWidth), random(0, windowHeight), 3, random(0, 1));
    }
    for (var i = 0; i < 100; i++) {
        l1[i] = new lin1(random(0, windowWidth), random(0, windowHeight), 3, random(0, 1));
    }

}

function draw() {
    background(0);
    for (var i = l.length - 1; i >= 0; i--) {

        if (l[i].x1 >= windowWidth) {
            l[i].x1 = 0;
            l[i].y1 = random(0, windowWidth);
            l[i].speed = random(1, 10);
            l[i].dir = random(0, 1);
        }
        l[i].mv();
        l[i].sho();
    }
    for (var i = l1.length - 1; i >= 0; i--) {

        if (l1[i].y1 >= windowHeight) {
            l1[i].y1 = 0;
            l1[i].x1 = random(0, windowWidth);
            l1[i].speed = random(1, 10);
            l1[i].dir = random(0, 1);
        }
        l1[i].mv();
        l1[i].sho();
    }
}

function lin(x, y, s, d) {
    this.x1 = x;
    this.y1 = y;
    this.x2;
    this.y2;
    this.speed = s;
    this.dir = d;
    this.mv = function () {
        this.x1 += this.speed;
        this.x2 = (windowWidth * 0.01) + this.x1 + this.speed * 5;
        this.y2 = this.y1;
    };
    this.sho = function () {
        push();
        stroke(0);
        strokeWeight(this.speed * 0.5);
        pop();
    };
}
function lin1(x, y, s, d) {
    this.x1 = x;
    this.y1 = y;
    this.x2;
    this.y2;
    this.speed = s;
    this.dir = d;
    this.interects = function (other) {
        if (dist(this.x1, this.y1, other.x1, other.y1) < 50) {
            stroke(0);
            line(this.x1, this.y1, other.x1, other.y1);
        }
    }
    this.mv = function () {
        this.y1 += this.speed;
        this.y2 = (windowWidth * 0.01) + this.y1 + this.speed * 5;
        this.x2 = this.x1;

    };
    this.sho = function () {

        push();
        stroke(255);
        strokeWeight(this.speed * 0.5);
        fill(255, 255, 255);
        ellipse(this.x1, this.y1, this.speed);
        pop();
    };
} 