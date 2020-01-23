$(document).ready(function() {
	$('form.translator').submit(function(event) {
		var string = $('input#sentence').val();
		var letters = string.split('');
		console.log(letters);
		
		
		  for (var index = 1; index < letters.length; index +=1) {
			if (letters[index] === 'a' || letters [index] === 'e' || letters [index] === 'i' || letters [index] === 'o' || letters [index] === 'u' ) {
			letters.push('way')
	}

	
			
	
			event.preventDefault();
	}
	$('p').text(letters.join(''));
	

	});
});