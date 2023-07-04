/*

https://data.weather.gov.hk/weatherAPI/hko_data/csdi/dataset/latest_1min_temperature_csdi_4.csv

https://xgd-charlie.github.io/testcsv/latest_1min_temperature_csdi_5.csv

*/

const rawData = `Date time (Year),Date time (Month),Date time (Day),Date time (Hour),Date time (Minute),Date time (Second),Date time (Time Zone),Automatic Weather Station,Air Temperature(degree Celsius),日期時間 (年),日期時間 (月),日期時間 (日),日期時間 (時),日期時間 (分),日期時間 (秒),日期時間 (時區),自動氣象站,氣溫（攝氏）,日期时间 (年),日期时间 (月),日期时间 (日),日期时间 (时),日期时间 (分),日期时间 (秒),日期时间 (时区),自动气象站,气温（摄氏）
2023,7,4,15,40,,UTC+8,HK Park,26.9,2023,7,4,15,40,,UTC+8,香港公園,26.9,2023,7,4,15,40,,UTC+8,香港公園,26.9
`;
const rawData2 = rawData.substr(0, rawData.length - 1);

let tempval = document.querySelector('.tempvalue');

/*
let table = document.getElementById("csv-data");
let url = "https://data.weather.gov.hk/weatherAPI/hko_data/csdi/dataset/latest_1min_temperature_csdi_4.csv";
 
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
*/

	let temp = document.querySelector('.temp');

	let rows = rawData2.split('\n');
	let titleRowArray = rows.shift().split(',');

	let housingDataArray = [];

	rows.forEach((housingEntry, index) => {
		let housingObject = new Object();
		// creat array from CSV entry string
		let housingEntryArray = housingEntry.split(",");
		// loop over every element in the housingEntryArray to build the housingObject
		housingEntryArray.forEach((e, i) => {
			// set each value with its corresponding title in the housing object
			housingObject[titleRowArray[i]] = e;
		});
		// append hosingObject to the housingDataArray
		//housingDataArray.push(housingObject[titleRowArray[8]]);
		console.log(housingObject[titleRowArray[8]]);
		tempval.innerHTML = housingObject[titleRowArray[8]];
	});




//console.log(JSON.stringify(housingDataArray));

/*
	window.addEventListener("load", () => {
		video();
		function video(){
			let tempValue = data['temp'];
		}
	});
*/
/**/