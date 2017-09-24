let CommonSteps = require('./common.steps');

class SearchBoxSteps extends CommonSteps {

    onPage() {
        this.page.open();
        return this;
    }

    fromPage() {
        return this.page;
    }


    submit() {
        this.page.submitButton.click();
        return this;
    }

    selectDestination(text, index = 0) {
        this.page.destination.setValue(text);
        this.page.waitMenu();
        this.page.optionsList[index].click();
        return this;
    }

    selectDate(date) {
        this.selectMonth(date.month);
        this.selectDay(date);
        return this;
    }


    selectCheckinDate(date) {
        this.selectDate(date);

        return this;
    }


    selectCheckoutDate(date) {
        this.page.checkoutfield.click();
        this.selectDate(date);
        return this;
    }

    selectDay(date) {
        this.page.monthDays(date.month).filter(x => x.getText() === date.day.toString())[0].click();
        return this;
    }


    selectMonth(text) {
        let months = this.page.monthNames.map(m => m.getText()).filter(m => m !== '');

        let leftMonth = months[0];
        let rightMonth = months[1];
        if (leftMonth === text || rightMonth === text) {
            return this;
        } else {

            this.page.nextMonth.click();

            this.selectMonth(text);

        }
        return this;
    }

}

module.exports = SearchBoxSteps;

