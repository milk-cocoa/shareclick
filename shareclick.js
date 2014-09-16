(function(){
	var milkcocoa = new MilkCocoa("https://io-ehz546bne.mlkcca.com");
	var ds = milkcocoa.dataStore('click');
	var counter = 0;
	ds.on('push', function(pushed) {
		var id = 'id' + counter;
		counter++;
		var cursor = document.createElement('div');
		cursor.className = "shared_click";
		cursor.id = id;
		cursor.style.position = 'absolute';
		cursor.style.left = (pushed.value.x - 25) + 'px';
		cursor.style.top = (pushed.value.y - 25) + 'px';
		var objBody = document.getElementsByTagName("body").item(0);
		objBody.appendChild(cursor);
		setTimeout(function() {
			objBody.removeChild(document.getElementById(id));
		}, 500);
	});

	window.document.onmousedown = function(e) {
		ds.push({
			x : e.pageX,
			y : e.pageY
		});
	}
}())