function f_gold(XY, n, Xmin, Ymin, Xmax, Ymax) {
  console.log("Point inside the viewing pane:");
  for (let i = 0; i < n; i++) {
    if ((XY[i][0] >= Xmin) && (XY[i][0] <= Xmax)) {
      if ((XY[i][1] >= Ymin) && (XY[i][1] <= Ymax)) console.log("[" + XY[i][0] + ", " + XY[i][1] + "]", "");
    }
  }
  console.log("\n\nPoint outside the viewing pane:");
  for (let i = 0; i < n; i++) {
    if ((XY[i][0] < Xmin) || (XY[i][0] > Xmax)) console.log("[" + XY[i][0] + ", " + XY[i][1] + "]", "");
    if ((XY[i][1] < Ymin) || (XY[i][1] > Ymax)) console.log("[" + XY[i][0] + ", " + XY[i][1] + "]", "");
  }
}

