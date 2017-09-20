var expect = require('chai').expect;

describe('proof of concept', function() {
    it('can open page in browser from wdio.config', function () {
         browser.url('/api.html');
    });
});