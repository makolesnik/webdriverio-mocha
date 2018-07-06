const MainPage = require("./main.page");

class SearchBox extends MainPage {
	static get destinationInput () {
		return $$("#ss")[0];
	}

	static get optionsList () {
		browser.waitForVisible("ul[data-list]", 3000);
		return $$("ul[data-list] li");
	}

	static get checkinfield () {
		browser.waitForVisible("[data-mode='checkin'] > div");
		browser.waitForEnabled("[data-mode='checkin'] > div");
		return $("[data-mode='checkin'] > div");
	}

	static get checkoutfield () {
		browser.waitForVisible("[data-mode='checkout'] > div");
		browser.waitForEnabled("[data-mode='checkout'] > div");
		return $("[data-mode='checkout'] > div");
	}

	static get submitButton () {
		return $("button[type='submit'][class*='search']");
	}

	static get nextMonth () {
		let buttons = [];
		browser.waitUntil(() => {
			buttons = $$("[class*='button-further']").filter(x => x.isEnabled() && x.isVisible());
			return buttons.length <= 1;
		}, "expected conditions not met");
		return buttons[0];
	}

	static months (date) {
		const timestamp = new Date(`${date.month} 1 GMT`).getTime();
		browser.waitForEnabled("[class*='calendar-body']");
		return $$(`[data-id="M${timestamp}"]`)
			.filter(x => x.isVisible());
	}

	static monthDays (date) {
		const timestamp = new Date(`${date.month} ${date.day} GMT`).getTime();
		return $$(`td[data-id="${timestamp}"]`);
	}
}

module.exports = SearchBox;
