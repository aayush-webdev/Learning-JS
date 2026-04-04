function profileLekarAao(username, cb) {
    setTimeout(() => {
        cb({ _id: 12122, username, age: 26, email: "huihui@hui.com" });
    }, 2000);
}

function saarePostLekarAao(id, cb) {
    setTimeout(() => {
        cb({ _id: id, posts: ["hey", "hello", "good morning"] });
    }, 3000);
}
function savePostsNikalo(id, cb) {
    console.log("getting your saved posts....");
    setTimeout(() => {
        cb({ _id: id, saved: [1, 2, 3, 4, 5] });
    }, 3000);
}

profileLekarAao("harsh", function (data) {
    console.log(data);
    saarePostLekarAao(data._id, function (posts) {
        console.log(posts);
        savePostsNikalo(data._id, function (saved) {
            console.log(saved);
        });
    });
});
