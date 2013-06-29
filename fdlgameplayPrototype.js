function Dj(name, genre, fuckabilityFactor, doucheQuotient, streetCred){ 
	this.constructor.population++;

	// ************************************************************************ 
	// PRIVATE VARIABLES AND FUNCTIONS 
	// ONLY PRIVELEGED METHODS MAY VIEW/EDIT/INVOKE 
	// *********************************************************************** 
	
	// Setting the "age" of a DJ to determine how long they last in this mini game cycle
	// A full version would have a set cycle length (festival season)
	// Multiple players would compete to have the highest scoring DJ Lineup in that cycle
	var alive=true, age=1;
	var maxAge=50+Math.round(Math.random()*15)+Math.round(Math.random()*15);
	function makeOlder(){
		return alive = (++ age <= (maxAge - overKill)); 
	}

	var myName= name;

	// ************************************************************************ 
	// PRIVILEGED METHODS 
	// MAY BE INVOKED PUBLICLY AND MAY ACCESS PRIVATE ITEMS 
	// MAY NOT BE CHANGED; MAY BE REPLACED WITH PUBLIC FLAVORS 
	// ************************************************************************ 
	this.toString = this.getName = function() { 
		return myName; 
	} 

	// Function to call when an event raises a DJ's Fuckability Factor
	this.raiseFf = function() { 
		if (makeOlder()){ 
			this.ff += 2; 
			this.dq += 1;
			this.overKill++;
			return[ff, dq, sc];
		} else alert(myName+" got a real job and is no longer a DJ.");
	} 

	// Function to call when an event raises a DJ's Douche Quotient
	this.raiseDq=function(){ 
		if (makeOlder()){ 
			this.dq += 2; 
			this.sc -= 1;
			this.overKill++;
			return[ff, dq, sc];
		} else alert(myName+" is trimming for the rest of the season.");
	}

	// Function to call when an event raises a DJ's Street Cred
	this.raiseSc=function(){ 
		if (makeOlder()){
			this.sc += 2; 
			this.ff += 1;
			this.overKill++; 
			return[ff, dq, sc];
		} else alert(myName+" did too much space coke, is laying low for a while.");
	}

	// Function to call when an event lowers a DJ's Street Cred
	this.lowerSc=function(){ 
		if (makeOlder()){
			this.sc -= 2; 
			this.ff -= 1;
			this.overKill++; 
			return[ff, dq, sc];
		} else alert(myName+" is going to graduate school or something.");
	}

	// Good deeds lower a DJ's Douche Quotient
	this.bigUps=function(){ 
		if (makeOlder()){
			this.dq -= 1;
			this.overKill++; 
			return[ff, dq, sc];
		} else alert(myName + " had a kid.");
	} 

	this.getFf = function(){ 
		return this.ff; 
	}

	this.getDq = function() {
		return this.dq;
	}

	this.getSc=function() {
		return this.sc; 
	}

	this.muchTimePasses= function() { 
		age += 20; 
		this.overKill = 10; 
	}

	this.getGenre=function() { 
		return genre; 
	} 


	// ************************************************************************ 
	// PUBLIC PROPERTIES -- ANYONE MAY READ/WRITE 
	// ************************************************************************ 
	this.ff = fuckabilityFactor;
	this.dq = doucheQuotient;
	this.sc = streetCred;
	this.overKill = 0;
	this.gear = "An old laptop filled with cracked software";
}


// ************************************************************************ 
// PUBLIC METHODS -- ANYONE MAY READ/WRITE 
// ************************************************************************ 
Dj.prototype.bookOutOfTown = function() { 
	this.overKill -= 1; 
	this.streetCred += 1;
}


// ************************************************************************ 
// STATIC PROPERTIES -- ANYONE MAY READ/WRITE 
// ************************************************************************ 
Dj.population = 0;


function festivalSeason() {
	var benSamples = new Dj("Ben Samples", "bass crunk", 1, 1, 1);       //New instance of the Dj object created. 
	var snarky = new Dj("DJ Snarky", "you probably haven't heard of it", 1, 2, 1);        
	alert("There are now "+Dj.population+" DJs");

	alert(benSamples + " is known for " + benSamples.getGenre());   

	benSamples.muchTimePasses();                          

	benSamples.newGear = function(){                         
		if (this.dq < 10) {
			this.sc += 1;
			this.ff += 1;
		}
		this.gear = "New macbook pro, clean software for real";
	};

	benSamples.newGear(); 
	benSamples.bookOutOfTown();

	alert("Seasoned " + benSamples + " has a Fuckability Factor of " 
		+benSamples.getFf() +", a Douche Quotient of " 
		+benSamples.getDq() +", and " 
		+benSamples.getSc() + " Street Cred.");

	benSamples.muchTimePasses();
}
