/*

DJ Fantasy League 

Book your fantasy DJ lineup
Watch scores change week by week
Compete to finish with the highest scoring lineup

*/


// Fuckability Factor == ff == swagger + likability + appeal to 16 year old girls, 
//   results in +dq
// Street Cred == sc == skills + paid dues + consistency, 
//   results in +ff
// Douche Quotient == dq == lame posts/quotes/tweets + pointless moves + appeal to 16 year old girls, 
//   results in -ff
// Big Ups == caused by helping a competing DJ, hooking up fan in need, or giving back to community, 
//   results in -dq, +ff

var ff, sc, dq;

var swagger, likability, appeal16, skills, dues, consistency, lametweets, pointless_;

// will modify these so they are method of a DJ prototype
var raiseFf = function(dj) {
	ff += 2; // as in dj.ff += 2;
	dq += 1;
}

var raiseSc = function(dj) {
	sc += 2;
	ff += 1;
}

var raiseDq = function(dj) {
	dq += 2;
	sc -= 1;
}

var lowerSc = function(dj) {
	sc -= 2;
	ff -= 1;
}

var adjustFf = function(ff) {
	ff += swagger + likability + appeal16;
}

var adjustSc = function(sc) {
	sc += skills + dues + consistency;
}

var adjustDc = function(dc) {
	dq += lametweets + pointless_ + appeal16;
}

var bigUps = function(dq, ff) {
	dq -= 1;
	ff += 1;
}

