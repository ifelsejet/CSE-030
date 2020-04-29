$(document).ready(function(){
	// The entire database should be displayed when your app starts
	$.get("/getAll", {}, function(response1){
		var vals = Object.values(JSON.parse(response1));
		var mainContainer = document.getElementById("area");
		mainContainer.style.justifyContent = "flex-start";
		mainContainer.style.maxHeight = "200px";
		var htmlCode = "";
		for(var i in vals){
			//for(var j in vals[i]){
				//var div = document.createElement("div");
				//div.innerHTML = "<img src = images/" + vals[i][j] + ">";
				//div.style.maxHeight = "200px";
				//div.style.justifyContent = "flex-start";
				//mainContainer.appendChild(div);
				var currentList = vals[i];
				for(var j in currentList){
				var filename = currentList[j];
				htmlCode += '<img style="width:200px;"src="images/' + filename + '">'
				}
			//}
		}

		$("#area").html(htmlCode);
	});

	// The Search button should be programmed to hit the /search endpoint along with the query string from the text box
	$("#search-btn").click(function(){
		var query = $("#search-input").val();
		$.get("/search", {"query" : query}, function(response){
			var resp = JSON.parse(response);
			var area = document.getElementById("area");
			area.innerHTML = "";
			for (var i in resp) {
				var div = document.createElement("div");
				div.innerHTML = '<img style="width:200px;"src = "images/' + resp[i] + '">';
				area.appendChild(div);
			}
		})
	})
});
