const bands = ['Tajmahal', 'Victoria Memorial', 'The Virupaksha Temple','Say Anything', 'The Midway State'];
function stripArticle(bandName) {
	 // trim cuts of white space at the begining and end of a string.
	 // We are using the regex to check if one of the articles is included in the band names
	 return bandName.replace(/^(a |the |an )/i, '').trim();
}

const bandNamesInOrder = bands.sort(function(firstEl, secondEl) {
	//const nameFirstEl = firstEl.toUpperCase();
	//const nameSecondEl = secondEl.toUpperCase();
	// Uppercase ensures the comparision between the pair of strings get easier since they are both the same
	
	if (stripArticle(firstEl) > stripArticle(secondEl)) {
		return 1;
	} else {
		return -1;
	}
});

document.querySelector('#bands').innerHTML = 
	bandNamesInOrder
	.map(bandName => `<li>${bandName}</li>`)
	.join('');
//.join('') creates a big string out of the array data,
// if its not called a comma will appear between the band names resulting in a not desired output.
// The reason this happens is because when you try to set an array for example to innerHTML then toString will be called creating lots of seperate strings.