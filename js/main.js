class Point {
    constructor(x, y, parent) {
        this.x = x;
        this.y = y;
        this.parent = parent;
    }

    getTemplate() {
        return `<div class="dot" style="left: ${this.x}px; top: ${this.y}px;"></div>`
    }

    drawPoint() {
        var elt = $(this.getTemplate());
        elt.appendTo(this.parent);
    }
}

$(document).ready(function () {
    let bez = new Bezier([0, 250], [0, 0], [250, 500], [250, 250]);

    let parent = $(".graph-container");
    let density = 50;
    let points = [];
    for (let i = 0; i < density; i++) {
        let coords = bez.getVector(i/density);
        points.push(new Point(coords[0], coords[1], parent));
    }

    bez = new Bezier([250, 250], [250, 0], [500, 0], [500, 250]);

    for (let j = 0; j <= density; j++) {
        let coords = bez.getVector(j/density);
        //points.push(new Point(coords[0], coords[1], parent));
    }

    let counter = 0;
    let intval;
    let line = $(".line");
    intval = setInterval(function() {
        if (!points[counter]) {
            clearInterval(intval);
            return;
        }

        line.css({
            top: points[counter].y + "px"
        });
        points[counter].drawPoint();

        counter++;
    }, 100);

});
