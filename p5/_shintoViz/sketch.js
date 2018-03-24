var table;
var array = [];
var totals = [];
var boxsize = 25;
var margin = 25;
function preload() {
  table = loadTable("shinto.csv", "csv", "header");
}

function setup() {
  createCanvas(24*25+margin*2,24*25+margin*2);
  background(150,150,150);
  colorMode(HSB, 255);
  var rows = table.getRowCount();
  var cols = table.getColumnCount();
  print(rows + " total rows in table");
  print(cols + " total columns in table");

  console.log(table);

  	//initialize array
	for (var a = 0; a < 24; a++) {
			array[a]=[];
			totals.push(0);
	    for (var b = 0; b < 24; b++) {
	    	array[a].push(0);
	    }	
	}

  //cycle through the table
	for (var r = 0; r < table.getRowCount(); r++) {
    	for (var c = 0; c < table.getColumnCount(); c++) {

	    	//for any given response per person, look at the remaining responses
	    	for( var next = 0; next < cols-c; next++){

	    		var currentVal = parseInt(table.getString(r,c));
	    		var nextVal = parseInt(table.getString(r,(c+next)%cols));

	    		array[ (((c+next)%cols)*4) + nextVal -1 ][ (c*4) + currentVal -1 ] += 1;
	    		// totals[ (c*4) + currentVal -1 ] +=1;
	    	}
   		}
	}

	console.log(array);
	console.log(totals);

	//Get the max, hopefully
	var maxRow = array.map(function(row){ return Math.max.apply(Math, row); });
	var max = Math.max.apply(null, maxRow);
	console.log(max);

	//Draw Visualization
	for (var h = 0; h < array.length; h++) {

    	for (var w = 0; w < array[h].length; w++) {

    		var percentVal = (array[h][w]);

	    	var col = color(Math.floor(w/4)*255/6,
	    					255,
	    					255);

	    	fill(col);
	    	noStroke();
	    	rect(w*boxsize+margin,h*boxsize+margin,boxsize*map(percentVal,0,max,0,1),boxsize*map(percentVal,0,max,0,1));

	    	if ( w%4 == 0) {
				stroke(0,0,100);
				line(w*boxsize+margin,margin,w*boxsize+margin,height-margin)
			}

			noStroke();
			fill(color(255,100,100));
	    	// text(array[h][w],w*boxsize+boxsize/3,h*boxsize+boxsize*2/3);
    	}//end inner for

    	if ( h%4 == 0) {
			stroke(0,0,100);
			line(margin,h*boxsize+margin,width-margin,h*boxsize+margin)
		}
    }//end outer for

}//end setup