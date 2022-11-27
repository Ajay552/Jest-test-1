const googleDatabase = [
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

const googleSearch = (searchInput, db) => {
    const matches = db.filter(website => {
        return website.includes(searchInput);
    });
    return matches.length > 3 ? matches.slice(0, 3) : matches;
}

console.log(googleSearch("amazon", googleDatabase));
console.log(googleSearch("youtube", googleDatabase));
console.log(googleSearch("twitter", googleDatabase));
 
module.exports = googleSearch;