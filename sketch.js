let video;
let osc;
var b1, b2;
var c = "white";
function setup() {
  createCanvas(windowWidth, windowHeight);

  video = createCapture(VIDEO);
  video.hide();




}

function draw() {
  background(c);
  image(video, 0, 0, width, height);

  let mostRed = 0;
  let mostRedX = 0;
  let mostRedY = 0;

  let mostBlue = 0;
  let mostBlueX = 0;
  let mostBlueY = 0;

  let mostGreen = 0;
  let mostGreenX = 0;
  let mostGreenY = 0;

  loadPixels();
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      var currentRed = pixels[4 * (y * width + x)];
      var currentGreen = pixels[4 * (y * width + x) + 1];
      var currentBlue = pixels[4 * (y * width + x) + 2];

      if (currentRed > mostRed) {
        mostRedX = x;
        mostRedY = y;
        mostRed = currentRed;
      }
      if (currentBlue > mostBlue) {
        mostBlueX = x;
        mostBlueY = y;
        mostBlue = currentBlue;
      }
      if (currentGreen > mostGreen) {
        mostGreenX = x;
        mostGreenY = y;
        mostGreen = currentGreen;
      }

      //set(x, y, [currentBlue, currentBlue, currentBlue, currentRed]);

    }
  }
  updatePixels();
  fill("red");
  b1 = ellipse(mostRedX, mostRedY, 50);

  fill("blue");
  b2 = ellipse(mostBlueX, mostBlueY, 50);

  fill("green");
  b1 = ellipse(mostGreenX, mostGreenY, 50);
}