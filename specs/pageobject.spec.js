var expect = require('chai').expect;

var MainPage = require('../pageobjects/main.page');

describe('proof of PageObject concept', function () {

    it('can use pageobjects directly', function () {
        MainPage.open();
        expect(browser.getTitle()).to.contain('WebdriverIO - getTitle');
    });
});