
class CommonSteps {

    constructor(page){
        this.page = page;
    };

    scrollDown() {
        this.page.scrollDown();
        return this;
    }
}

module.exports = CommonSteps;

