const { expect } = require("chai");
const steps = require("../../steps/steps");
const Order = require("../../model/order");

describe.skip("Search using float SearchBox after scroll", () => {
	it("search tickets on specified destination", () => {

		const order = new Order();
		order.destination = "New York";
		order.checkin = {
			month: "December 2018",
			day: 10
		};
		order.checkout = {
			month: "December 2018",
			day: 15
		};


		steps.searchBoxFloat.onPage()
			.scrollDown()
			.selectDestination(order.destination)
			.selectCheckinDate(order.checkin)
			.selectCheckoutDate(order.checkout)
			.submit()
			.fromPage().shouldNavigateTo("search-results.page");

		const addresses = steps.searchResult.getAddressList();
		const wrong_address = addresses.filter(x => !x.match(order.destination));

		expect(wrong_address,
			`Results should contain address "${order.destination}", but got: ${wrong_address}"`).to.be.empty;

		expect(browser.getTitle()).to.contain(order.destination);
	});
});