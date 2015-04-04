Schema.newBook = new SimpleSchema({
	'title': {
		type: String,
		label: 'Title'
	},
	'author': {
		type: String,
		label: 'Author'
	},
	'edition': {
		type: Number,
		label: 'Edition (Optional)',
		optional: true
	},
	'newPrice': {
		type: Number,
		decimal: true,
		label: 'Price at bookstore'
	},
	'price': {
		type: Number,
		decimal: true,
		label: 'Your Price'
	}
})