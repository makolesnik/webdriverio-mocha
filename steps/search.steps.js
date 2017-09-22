let searchBox = require('../pages/searchbox.page');

let searchSteps = Object.create(searchBox, {
    submit: {
        value: function () {
            this.submitButton.click();
            return this;
        }
    },

    selectDestination: {
        value: function (text, index = 0) {
            this.destination.setValue(text);
            this.waitMenu();
            this.list_options[index].click();
            return this;
        }
    },

    selectDate: {
        value: function (date) {
            this.selectMonth(date.month);
            this.selectDay(date);
            return this;
        }
    },

    selectCheckinDate: {
        value: function (date) {
            this.selectDate(date);
            return this;
        }
    },

    selectCheckoutDate: {
        value: function (date) {
            this.checkoutfield.click();
            this.selectDate(date);
            return this;
        }
    },

    selectDay: {
        value: function (date) {
            this.monthDays(date.month).filter(x => x.getText() === date.day.toString())[0].click();
            return this;
        }
    },

    selectMonth: {
        value: function (text) {
            let months = this.monthNames.map(m => m.getText()).filter(m => m !== '');
            leftMonth = months[0];
            rightMonth = months[1];
            if (leftMonth === text || rightMonth === text) {
                return this;
            } else {
                this.nextMonth.click();
                this.selectMonth(text);
            }
            return this;
        }
    }

});

module.exports = searchSteps;

