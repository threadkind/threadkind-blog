document.querySelector('nav').addEventListener('mouseover', (e) => {
	if(e.target.innerText === 'Eat'){
		document.getElementById('eat-menu').classList.toggle('hide');
	}
	else if(e.target.innerText === 'Make'){
		document.getElementById('make-menu').classList.toggle('hide');
	}
	else if(e.target.innerText === 'Play'){
		document.getElementById('play-menu').classList.toggle('hide');
	}
	else if(e.target.innerText === 'Code'){
		document.getElementById('code-menu').classList.toggle('hide');
	}
});


document.querySelector('nav').addEventListener('mouseout', (e) => {
	console.log('mouseout')
	const menuArr = ['eat-menu', 'make-menu', 'play-menu', 'code-menu'];

	console.log('mouseout');

	// menuArr.forEach((item) => {
	// 	console.log(document.getElementById(item).classList.con);
	// });

	menuArr.forEach((item) => {
		if(document.getElementById(item).classList.contains('hide') === false){
			document.getElementById(item).classList.toggle('hide');
		}
	});
});