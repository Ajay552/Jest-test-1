const googleSearch = require("./index");

const mockDatabase = [
    "google.com",
    "amazon.com",
    "reactjs.org",
    "facebook.com",
    "amazon.in",
    "youtube.com",
    "google.in",
    "amazon.uk",
    "twitter.com",
    "amazon.eu",
    "google.uk",
    "youtube.in",
];

describe("googleSearch Tests", () => {

    it("This is a silly test", () => {
        expect("hello").toBe("hello");
    });

    it("is google search", () => {
        expect(googleSearch("nothing", mockDatabase)).toEqual([]);
        expect(googleSearch("youtube", mockDatabase)).toEqual(["youtube.com", "youtube.in"]);
        expect(googleSearch("google.in", mockDatabase)).toEqual(["google.in"]);
    });

    it("works with undefinded and null inputs", () => {
        expect(googleSearch(undefined, mockDatabase)).toEqual([]);
        expect(googleSearch(null, mockDatabase)).toEqual([]);
    });

    it("does not return more than 3 matches", () => {
        expect(googleSearch("amazon", mockDatabase).length).toBe(3);
    });

})