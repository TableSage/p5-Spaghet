//night one

//TODO: Replace switch case with grammer dictionary that can be edited on the fly
//key is the word, value is word after production;
//for each turtle, it scans the dictionary, finds the matching key, 
//then changes itself to the first letter of the value, and appends the remaining values

var axiom = "A";
plant = new Plant(axiom);

//////////////////////////////////////Setup/////////////////////////////
function setup() {
    createCanvas(100, 100);
    frameRate(1);
} //end setup

///////////////////////////////////////Draw/////////////////////////////
function draw() {
} //end draw

///////////////////////////////////MouseClicked//////////////////////////
function mouseClicked(){

	plant.grow();
    plant.readDNA();

}//end mouseclicked

//////////////////////////////////////Plant//////////////////////////////
function Plant(axi) {

	this.dna = "";
	this.turtles = [new Turtle(axi, this)];
	console.log("Axiom: "+axi);

	this.grow = function() {
		for (var i = 0; i < this.turtles.length; i++) {
        if(this.turtles[i].production(i)){ i+=1; };
    	}//end for
	}

	this.readDNA = function() {
		plant.dna="";
		for (var i = 0; i < this.turtles.length; i++) {
			this.dna+=this.turtles[i].word;
		}
		console.log(this.dna);
	}
}//end plant

//////////////////////////////////////Turtle/////////////////////////////
function Turtle(w, parent) {

    this.word = w;

    this.production = function(index) {
    	growth = false;
        switch (this.word) {
            case "A":
                parent.turtles.splice(index+1,0,new Turtle("B", parent));
                growth = true;
                break;
            case "B":
                this.word = "A";
                break;
        } //end switch
        return growth;
    };//end production

    this.render = function() {
        console.log("render");
    } //end this.render

} //end turtle
