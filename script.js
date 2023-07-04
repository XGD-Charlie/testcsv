/*

https://data.weather.gov.hk/weatherAPI/hko_data/csdi/dataset/latest_1min_temperature_csdi_5.csv

https://xgd-charlie.github.io/testcsv/latest_1min_temperature_csdi_5.csv

*/

let table = document.getElementById("csv-data");
//let url = "https://xgd-charlie.github.io/testcsv/latest_1min_temperature_csdi_5.csv";
let url = "https://data.weather.gov.hk/weatherAPI/hko_data/csdi/dataset/latest_1min_temperature_csdi_5.csv";
 
fetch(url)
  .then(response => response.text())
  .then(data => {
    let rows = data.split("\n");
    for (let i = 0; i < rows.length; i++) {
      let cells = rows[i].split(",");
      let row = table.insertRow();
      for (let j = 0; j < cells.length; j++) {
        let cell = row.insertCell();
        cell.innerText = cells[j];
      }
    }
  })
  .catch(error => console.log(error));