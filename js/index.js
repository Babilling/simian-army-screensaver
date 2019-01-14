const fps = 60; // 60 frames/second

const logo = document.getElementById("logo"),
	statusContainer = document.getElementById("statusContainer");

let width,
	height,
	velocityX = 2, // 1 px/frame
	velocityY = 2, // 1 px/frame
	pause = true;

reset();

window.addEventListener("resize", reset, true);

setInterval(function() {
	if (pause) return;

	var rect = logo.getBoundingClientRect();

	var left = rect.x;
	var top = rect.y;

	if (left + rect.width >= width || left <= 0) {
		velocityX = -velocityX; // invert direction
		logo.style.fill = getRandomColor();
	}
	if (top + rect.height >= height || top <= 0) {
		velocityY = -velocityY; // invert direction
		logo.style.fill = getRandomColor();
	}

	logo.style.left = rect.x + velocityX + "px";
	logo.style.top = rect.y + velocityY + "px";
}, 1000 / fps);

function reset() {
	width =
		window.innerWidth ||
		document.documentElement.clientWidth ||
		document.body.clientWidth;

	height =
		window.innerHeight ||
		document.documentElement.clientHeight ||
		document.body.clientHeight;

	pause =
		width <= logo.getBoundingClientRect().width ||
		height <= logo.getBoundingClientRect().height;

	logo.style.left = "1px";
	logo.style.top = "1px";
	logo.style.fill = "#fff";
}

var lastColor = -1;

function getRandomColor() {
	var colors = [
		"#f44336",
		"#E91E63",
		"#9C27B0",
		"#673AB7",
		"#3F51B5",
		"#2196F3",
		"#03A9F4",
		"#00BCD4",
		"#009688",
		"#4CAF50",
		"#8BC34A",
		"#CDDC39",
		"#FFEB3B",
		"#FFC107",
		"#FF9800",
		"#FF5722",
		"#795548"
	];
	var index = -1;
	do {
		index = Math.floor(Math.random() * colors.length);
	} while (lastColor == index);
	lastColor = index;
	return colors[index];
}