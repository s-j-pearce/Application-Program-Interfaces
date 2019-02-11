function getBook()
{
	var search = document.getElementById("search").value;
	
	document.getElementById("results").innerHTML = ""

	console.log(search)

	fetch("https://www.googleapis.com/books/v1/volumes?q=" + search)
    .then(function(response)
	{ 
		return response.json(); 
	})
    .then(function(data)
    {
		console.log(data)
		results.innerHTML += "<p>" + "Total Books: " + data.totalItems + "</p>"
		
		for (list=0; list < data.items.length; list++)
		{
			results.innerHTML += "<hr>"
			results.innerHTML += "<h3>" + "Title: " + data.items[list].volumeInfo.title + "</h3>"
			results.innerHTML += "<h4>" + "Description: " + "</h4>"
			results.innerHTML += "<p>" + data.items[list].volumeInfo.description + "</p>"
			results.innerHTML += "<img src=" + data.items[list].volumeInfo.imageLinks.thumbnail + ">"
			results.innerHTML += "<h4>" + "Click the link below to purchase:" + "</h4>"
			//results.innerHTML += "<a href=" + data.items[list].saleInfo.buyLink + ">Buy it here</a>"
			
		if (data.items[list].saleInfo.saleability == "NOT_FOR_SALE") 
		{
			results.innerHTML += "<p>" + "Not for sale" + "</p>";
		} else {
			results.innerHTML += "<a href=" + data.items[list].saleInfo.buyLink + ">Buy it here</a>"
		}
		
			results.innerHTML += "<hr>"
		
		}
    });
}

/*if (data.items[list].saleInfo.saleability = "NOT_FOR_SALE") 
{
	results.innerHTML += "<p>" + "Not for sale" + "</p>";
} else {
	results.innerHTML += "<a href=" + data.items[list].saleInfo.buyLink + ">Buy it here</a>"
} */