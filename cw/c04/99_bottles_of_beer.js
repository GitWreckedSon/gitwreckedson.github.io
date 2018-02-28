// 99 BOTTLES OF BEER
// Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal
// Make sure your program can handle both singular and plural cases (i.e. both "99 bottles of beer" and "1 bottle of beer")
// Hint: you will want to use a for loop that starts at 99 and counts down to 0

// don't let your life get stuck in a for loop
// get help
// www.aa.org
var dumbLyrics1 = " bottles of beer on the wall, "
var dumbLyrics2 = " bottles of beer! take one down, pass it around, "
var dumbLyrics3 = " bottles of beer on the wall!"
var dumbSingularLyrics1 = " bottle of beer on the wall, "
var dumbSingularLyrics2 = " bottle of beer! take one down, pass it around, "
var dumbSingularLyrics3 = " bottles of beer on the wall!"
var i === 99

for (i = 99; i!==0; i--){
	if (i===1){
		console.log (i + dumbSingularLyrics1 + i + dumbSingularLyrics2 + (i-1) + dumbSingularLyrics3);
	} else {
		console.log (i + dumbLyrics1 + i + dumbLyrics2 + (i-1) + dumbLyrics3);
	}
}
	