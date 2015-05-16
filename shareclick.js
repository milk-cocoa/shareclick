(function(){
	var milkcocoa = new MilkCocoa("dogi9jz8c16.mlkcca.com");
	var ds = milkcocoa.dataStore('click');
	var counter = 0;
	ds.on('send', function(pushed) {
		var id = pushed.value.element_id;
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
		var element_id = "scid-" + counter + (String(Math.random()).substr(2));
		ds.send({
			element_id : element_id,
			x : e.pageX,
			y : e.pageY
		});
		counter++;
	}
}())