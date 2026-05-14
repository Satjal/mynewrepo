
fetch("food_order.csv")
.then(res => res.text())
.then(data => {
  const rows = data.split("\n").slice(1);

  let x = [], y = [], prep = [], delivery = [], cost = [];

  rows.forEach(r => {
    let c = r.split(",");
    if(c.length > 5){
      x.push(parseFloat(c[0]) || 0);
      y.push(parseFloat(c[1]) || 0);
      prep.push(parseFloat(c[2]) || 0);
      delivery.push(parseFloat(c[3]) || 0);
      cost.push(parseFloat(c[4]) || 0);
    }
  });

  createChart("chart1", x, y, "Rating vs Orders");
  createChart("chart2", prep, delivery, "Prep vs Delivery");
  createChart("chart3", x, cost, "Cost vs Orders");

  regression(x, y);
});

function createChart(id, x, y, label){
  new Chart(document.getElementById(id), {
    type: "scatter",
    data: {
      datasets: [{
        label: label,
        data: x.map((v,i)=>({x:v,y:y[i]}))
      }]
    }
  });
}


function regression(x,y){
  let n=x.length, sx=0, sy=0, sxy=0, sx2=0;

  for(let i=0;i<n;i++){
    sx+=x[i];
    sy+=y[i];
    sxy+=x[i]*y[i];
    sx2+=x[i]*x[i];
  }

  let m=(n*sxy-sx*sy)/(n*sx2-sx*sx);
  let b=(sy-m*sx)/n;

  let pred = m*50 + b;

  document.getElementById("prediction").innerText =
    "Prediction for x=50: " + pred.toFixed(2);
}

// WEATHER API
fetch("https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=17816ed5ab6f1e0f0aac5770db18b2c8&units=metric")
.then(res=>res.json())
.then(data=>{
  document.getElementById("city").innerText = data.name;
  document.getElementById("temp").innerText = "Temp: " + data.main.temp + "°C";
  document.getElementById("desc").innerText = data.weather[0].description;
});