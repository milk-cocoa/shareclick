(function(){
	var milkcocoa = new MilkCocoa("https://mlkcca.com:3000", "mlkdev-0002", function() {});
	var ds = milkcocoa.DataStore('click');
	var counter = 0;
	ds.on('push', function(pushed) {
		var id = 'id' + counter;
		counter++;
		var cursor = document.createElement('p');
		cursor.id = id;
		cursor.style.position = 'absolute';
		cursor.style.left = pushed.x + 'px';
		cursor.style.top = pushed.y + 'px';
		cursor.innerHTML = 'click!!';
		var objBody = document.getElementsByTagName("body").item(0);
		objBody.appendChild(cursor);
		setTimeout(function() {
			objBody.removeChild(document.getElementById(id));
		}, 2000);
	});
	window.document.onmousedown = function(e) {
		console.log(e);
		ds.push({
			x : e.x,
			y : e.y
		}, function() {
			
		});
	}
}())