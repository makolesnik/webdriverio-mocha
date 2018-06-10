const SearchBox = require("./searchbox.page");

class SearchBoxFloat extends SearchBox {
	static get destinationInput () {
		return $$("#ss")[0];
	}

	static get optionsList () {
		browser.waitForVisible("ul li[role='option']", 3000);
		return $$("ul li[role='option']");
	}

	static get checkoutfield () {
		return $$("[data-placeholder='Check-out Date']")[1];
	}

	static get submitButton () {
		return $$("button[class*='searchbox__button'][type='submit']")[1];
	}

	static months (date) {
		return $$(`//th[contains(text(),"${date.month}")]`)
			.filter(x => x.isVisible());
	}
}

module.exports = SearchBoxFloat;
