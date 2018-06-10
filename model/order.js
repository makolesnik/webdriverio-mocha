class Order {
	constructor (destination = "Wonderland",
		checkin = {month: "December 2018", day: 1},
		checkout = {month: "December 2018", day: 1}) {
		this.destination = destination;
		this.checkin = checkin;
		this.checkout = checkout;
	}
}

module.exports = Order;
