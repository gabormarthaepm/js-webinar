/**
 * Create Elements class which represents a collection of
 * elements of the application, and
 * 
 * 1. It has a protractor locator (.locator),
 *    e.g. by.css("h1.title")
 * 2. It has a name (.name), e.g. "Document Title"
 * 3. It can have a parent Element, 
 *    which is the context of the element (.parent)
 * 4. It cannot have children elements
 * 5. It has a method to retrieve all protractor elements
 *    in the collection by the locator (.all()) in it's context
 * 6. It has a method to retrieve one element from the collection
 *    by the locator (.get(n)) in it's context
 * 
 * Use Protractor API to retrieve elements
 * @see {@link https://www.protractortest.org/#/api?view=ElementArrayFinder}
 */

/*
const Element = require("./Element");

class Elements extends Element {
    constructor(name, locator) {
        super(name, locator);

        this.children = null;
    }

    addChildren() {
        throw new Error("Element cannot have children!");
    }

    all(){
        return element.all(this.locator);
    }

    get(n) {
        return this.all().get(n);
    }
}

module.exports = Elements;
*/

//const { element } = require("../test/mock/ElementFinder");
const { prototype } = require("mocha");
const Element = require("./Element");

function Elements(name, locator) {
    Element.call(this, name, locator);
    this.children = null;

}

Elements.prototype = Object.create(
    Element.prototype
);
Elements.prototype.constructor = Elements;

Object.defineProperty(this, "name", {
    writable: false
});

Object.defineProperty(this, "locator", {
    writable: false
});

Elements.prototype.addChildren = function () {
    throw new Error("Element cannot have children!");
};

Elements.prototype.all = function () {
    return element.all(this.locator);
};

Elements.prototype.get = function (n) {
    return this.all().get(n);
};

module.exports = Elements;