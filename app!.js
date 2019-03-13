function init() {
    var data = [{
      values: [  98, 80, 71, 51, 46, 33, 31, 30 ,25 ,25],
      labels: ["1166", "2858", "481", "2263", "40","1188","351","188","2317","1976"],
      type: "pie"
    }];
  
    var layout = {
      height: 600,
      width: 800
    };
  
    Plotly.plot("pie", data, layout);
  }
  
  function updatePlotly(newdata) {
    var PIE = document.getElementById("pie");
    Plotly.restyle(PIE, "values", [newdata]);
  }
  
  function getData(dataset) {
    var data = [];
    switch (dataset) {
    case "dataset1":
      data = [1, 2, 3, 39];
      break;
    case "dataset2":
      data = [10, 20, 30, 37];
      break;
    case "dataset3":
      data = [100, 65, 300, 23];
      break;
    case "dataset4":
      data = [100, 75, 300, 23];
      break;
    case "dataset5":
      data = [100, 200, 300, 50];
      break;
    case "dataset6":
      data = [100, 75, 300, 23];
      break;
    case "dataset7":
      data = [50, 200, 300, 23];
      break;
    case "dataset8":
      data = [100, 200, 300, 150];
      break;
    case "dataset9":
      data = [100, 200, 100, 23];
      break;
    case "dataset10":
      data = [100, 50, 300, 23];
      break;
    default:
      data = [30, 30, 30, 11];
    }
    updatePlotly(data);
  }
  
  init();
  