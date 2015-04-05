Schema.addBook = new SimpleSchema({
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
	'condition': {
		type: String,
		label: 'Condition'
	},
	'course': {
		type: String,
		label: 'Course (Which class required this book?)'
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