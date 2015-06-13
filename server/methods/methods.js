// Meteor.methods({
// 	addBook: function(data) {
// 		Books.insert(data);
// 	}
// })

// Meteor.methods({
// 	searchBooks: function(data) {
// 		check(data, String);
// 		this.unblock();
// 		try {
// 			var result = HTTP.call("GET", )
// 		}
// 	}
// })

Meteor.methods({
	addBook: function(book) {
		var context = Schema.addBook.newContext(),
			isValid = context.validate(book);

		if(isValid) {
			Books.insert(book)
		} else {
			console.log('error')
		}
	},

	getLatLon: function(address) {
		var geo = new GeoCoder();
		var latLon = geo.geocode(address);
		return latLon;
	}
})