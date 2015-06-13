if (Books.find().count() === 0) {
	Books.insert({
		"title": "Understanding Business, 10th Edition",
		"author": "Logan Sparlin",
		"slug": "understanding-business-10th-edition",
		"new_price": "255.00",
		"price":"45.00",
		"zip":64801,
		"location": {
			"type":"Point",
			"coordinates": [
				-94.399068,
				37.151607
			]
		}
	});
	Books.insert({
		"title": "Astronomy & The Stars",
		"author": "Jane Doe",
		"slug": "astronomy-and-the-stars",
		"new_price": "140.00",
		"price":"20.00",
		"zip":65802,
		"location": {
			"type":"Point",
			"coordinates": [
				-93.273022,
				37.203412
			]
		}
	});
	Books.insert({
		"title":"Harry Potter & The Sorcerer's Stone",
		"author":"J.K.Rowling",
		"slug":"harry-potter-sorcerers-stone",
		"new_price":"50,00",
		"price":"5.00",
		"zip":85001,
		"location": {
			"type":"Point",
			"coordinates": [
				-112.074037,
				33.448377
			]
		}
	})
}