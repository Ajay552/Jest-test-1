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

it("This is a silly test", () => {
    expect("hello").toBe("hello");
});

it("is google search", () => {
    expect(googleSearch("youtube", mockDatabase)).toEqual(["youtube.com", "youtube.in"]);
})