let SearchBox = require('../../pages/searchbox.page');

class SearchBoxSteps {
    constructor() {    };

    static onPage(){
        SearchBox.open();
        return this;
    }

    static fromPage(){
        return SearchBox;
    }


    static submit() {
            SearchBox.submitButton.click();
            return this;
        }

    static selectDestination(text, index = 0) {
            SearchBox.destination.setValue(text);
            SearchBox.waitMenu();
            SearchBox.optionsList[index].click();
            return this;
        }


    static selectDate(date) {
            this.selectMonth(date.month);
            this.selectDay(date);
            return this;
        }


    static selectCheckinDate(date) {
            this.selectDate(date);
            return this;
        }


    static selectCheckoutDate(date) {
        SearchBox.checkoutfield.click();
        this.selectDate(date);
            return this;
        }


    static selectDay(date) {
        SearchBox.monthDays(date.month).filter(x => x.getText() === date.day.toString())[0].click();
            return this;
        }


    static selectMonth(text) {
            let months = SearchBox.monthNames.map(m => m.getText()).filter(m => m !== '');
            let leftMonth = months[0];
            let rightMonth = months[1];
            if (leftMonth === text || rightMonth === text) {
                return this;
            } else {
                SearchBox.nextMonth.click();
                this.selectMonth(text);
            }
            return this;
        }


}

module.exports = SearchBoxSteps;

