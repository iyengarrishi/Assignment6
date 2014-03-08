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



function stepThree(DATASET){
	console.log(DATASET);
}
// 5) Since we are only interested in the observations, we will now pull those out using a variable

/*
 
 var pullOut = DATASET.observations;
 
// 6) We arrange the data we have as an array of arrays

 var ideserveArrays = [];
 
	//We should also add headers to name our variables
	
 var myHeader = ["Date", "Value"];
 ideserveArrays.push(myHeader);	

// 7) After making the empty parent array, we create a for loop
// Since there are too many data points, we use the .length property to specify number of loops

for (var i=0; i<pullOut.length; i++) {
// 8) Within this for loop, we create our second array, i.e. the child array
	
	//Observations is an array of objects, so this next variable will loop through each of them
	var iObject = pullOut[i];
	
    //For the chart, we only need two variables - date and value
    //We need to specify that value is a number, because it is a string in the data set
    
    var udeserveArrays = [iObject.date, Number(iObject.value)];

// 9) We now push our second array into its parent array

	ideserveArrays.push(udeserveArrays);
	
	}
	
	  
	console.log(ideserveArrays);
// 10) Next, I will feed the data into the Google Visualization library using the array to data table function

	var dataHere = google.visualization.arrayToDataTable(ideserveArrays);

// 11) We must put the chart on our page using a div, which I will go create in the HTML file now	
 	
 	var makeChart = new google.visualization.BarChart(document.getElementById("chartHere"));
 	
// 12) Finally, we render the chart on the page, but not before determining what we want it to look like using the 'options' tag

	var options = {
		title:"Unemployment Trends", curveType:"function", backgroundColor:"white"
	};
	
	makeChart.draw(dataHere, options);
}

*/
// 3) Now, we define the callback function for the Google Visualization Library

function stepTwo(){
	console.log ("Google has come to the party");
	
// 4) We load our data within this function using .get
// I will be safe and use the same data set from class.

$.get("https://www.googleapis.com/fusiontables/v1/query/?sql=SELECT+*+FROM+153u1bOCk0rHRiH7hMshhuNqv_rozzMnMvn_2hRyc&key=AIzaSyCzc9XKi4CG-PcqBZfHBmc3fKmuq3JH9vU", stepThree, "json");

//The .get includes file name, function name and file type
}

// 2) Next, we define the callback function for document ready

function stepOne(){
//Console log to make sure it is working
console.log("My document must be ready");


google.load("visualization", "1", {packages:["corechart"], callback:"stepTwo"});
}


$(document).ready(stepOne);