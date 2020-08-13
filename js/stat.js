var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var LEFT_INDENT = 160; /*отсутп от левого края*/
var TEXT_HIGHT = 240; /*высота на которой находиться текст*/
var TIME_HIGHT = 60; // высота времени
var COLUMN_INDENT = 50; /*отступ колонок*/
var COLUMN_WIDTH = 40; /*ширина колонки*/
var top_gap = 80; /*верхний отступ колонки*/
var max_column_height = 150; /*высота колонки*/

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, "rgba(0,0,0,0.7)");
  renderCloud(ctx, CLOUD_X, CLOUD_Y, "#fff");

  ctx.fillStyle = "#000";
  ctx.font = "16px PT Mono";
  ctx.textBaseline = "hanging";
  ctx.fillText("Ура вы победили!", (CLOUD_WIDTH *= 0.5), 2 * GAP);
  ctx.fillText("Список результатов:", (CLOUD_WIDTH *= 1), 4 * GAP);

  ctx.fillStyle = "#000";

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var column_height = (max_column_height * times[i]) / maxTime;
    var color_column = Math.floor(Math.random() * Math.floor(100));

    ctx.fillStyle = "#000";
    ctx.fillText(
      players[i],
      LEFT_INDENT + (COLUMN_INDENT + COLUMN_WIDTH) * i,
      TEXT_HIGHT
    );
    ctx.fillText(
      Math.round(times[i]),
      LEFT_INDENT + (COLUMN_INDENT + COLUMN_WIDTH) * i,
      top_gap + (max_column_height - column_height) - 2 * GAP
    );

    if (players[i] === "Вы") {
      ctx.fillStyle = "rgb(255,0,0)";
    } else {
      ctx.fillStyle = "hsl(" + 240 + "," + color_column + "%," + 50 + "%)";
    }

    ctx.fillRect(
      LEFT_INDENT + (COLUMN_INDENT + COLUMN_WIDTH) * i,
      top_gap + (max_column_height - column_height),
      COLUMN_WIDTH,
      column_height
    );
  }
};
