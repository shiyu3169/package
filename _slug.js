const slug = require("slug");

// function slugify(words) {
//     return slug(words);
// }
// function slugify(words) {
//     return slug(words, {
//         lower: true
//     });
// }
// function slugify(words) {
//     return slug(words, {
//         lower: true,
//         replacement: "_"
//     });
// }
function slugify(words) {
    return slug(words, {
        replacement: ""
    });
}

console.log(slugify("Blog Post One"));
