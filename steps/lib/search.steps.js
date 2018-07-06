const CommonSteps = require("./common.steps");

class SearchBoxSteps extends CommonSteps {
	onPage () {
		this.page.open();
		return this;
	}

	fromPage () {
		return this.page;
	}

	submit () {
		this.page.submitButton.click();
		return this;
	}

	selectDestination (text, index = 0) {
		this.page.destinationInput.setValue(text);
		this.page.optionsList[index].click();
		return this;
	}

	selectDate (date) {
		this.selectMonth(date);
		this.selectDay(date);
		return this;
	}

	selectCheckinDate (date) {
		this.page.checkinfield.click();
		if (!this.page.nextMonth) this.page.checkinfield.click();
		this.selectDate(date);
		return this;
	}

	selectCheckoutDate (date) {
		this.page.checkoutfield.click();
		if (!this.page.nextMonth) this.page.checkoutfield.click();
		this.selectDate(date);
		return this;
	}

	selectDay (date) {
		this.page.monthDays(date).filter(x => x.getText() === date.day.toString())[0].click();
		return this;
	}

	findMonth (date) {
		const month = this.page.months(date).filter(x => x.getText().match(date.month));
		const button = this.page.nextMonth;
		if (month[0] || !button) {
			return this;
		} else {
			button.click();
			this.findMonth(date);
		}
	}

	selectMonth (date) {
		this.findMonth(date);
		return this;
	}
}

module.exports = SearchBoxSteps;
