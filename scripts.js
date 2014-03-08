/**
 * @author Rishi Iyengar
 */

/* Project Plan 
1. Load jQuery and Google JS libraries
2. Set up document.ready function
3. Load Google Visualization Library and create a callback function (Note: These 3 steps can be done by copying earlier script)
4. Add data from Google Fusion table using SQL query
5. Filter the data using a WHERE function in the SQL
6. Feed data to visualization library
7. Create a div in HTML file for visualization
8. Create a chart using the Google Viz library and set the newly created div as its location
9. Render the chart
*/


// 3) Since I am using the GDP dataset instead of UNEMP, I will name my local dataset GDPDATA
function mloadData(GDPDATA){
console.log(GDPDATA);

//4) I will now add my datatable to the visualization using the Google Viz API
var gTable = new google.visualization.DataTable();
gTable.addColumn('string', GDPDATA.columns[0]);
gTable.addColumn('number', GDPDATA.columns[1]);
gTable.addRows(GDPDATA.rows);
	
//5) Now I will create the chart, and tell the program to put the chart in my div	
var gChart = new google.visualization.LineChart(document.getElementById("gChartDiv"));
//Options tag
var gchartOptions = {
          title: "GDP Growth", 
        };
//6) And finally, we draw the chart
gChart.draw(gTable, gchartOptions);

}	
//2) Load the Google visualization library from Google Fusion tables using an SQL query
// We replace the JSON filename in our .get function with the dataset URL
function gloadData(){

//7) Add a 'WHERE' clause to the SQL query to filter the data, then paste new URL into .get function
	
$.get("https://www.googleapis.com/fusiontables/v1/query/?sql=SELECT+*+FROM+153u1bOCk0rHRiH7hMshhuNqv_rozzMnMvn_2hRyc+WHERE+DATE>='1992-01-01'&key=AIzaSyCzc9XKi4CG-PcqBZfHBmc3fKmuq3JH9vU", mloadData , "json");

}



function mloadPage(){

console.log("My document must be ready");


google.load("visualization", "1", {packages:["corechart"], callback:"gloadData"});
}

//1) We are modifying the existing code from the earlier assignment
$(document).ready(mloadPage);