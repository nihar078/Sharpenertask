const posts = [];
let lastActivityTime;

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        });
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastActivityTime = new Date();
            resolve(lastActivityTime);
        }, 1000);
    });
}

function deleteLastPost(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(posts.length > 0){
                const deletedPost = posts.pop();
                resolve(deletedPost);
            }
            else{
                reject("ERROR: NO POSTS FOUND");
            }
        });
    });
}

function getAllPostsAndActivityTime(){
    let output = ""
    posts.forEach((post) => {
        output += `<li>${post.title}</li>`;
    })
    document.body.innerHTML = output
    console.log("All Posts: ", posts);
    console.log("Last activity time: ", lastActivityTime);
}

function userLastActivityTime(){
    console.log("User last activity time: ", lastActivityTime)
}

function beforeUserLastActivityTime(){
    console.log("Before create post user last activity time: ", lastActivityTime)
}


updateLastUserActivityTime().then(() =>{
    beforeUserLastActivityTime();
    Promise.all([createPost({title: "First Post", body: "This is first post"}), updateLastUserActivityTime()]).then(()=>{
        getAllPostsAndActivityTime();
        Promise.all([createPost({title: "Second Post", body: "This is Second post"}), updateLastUserActivityTime()]).then(()=> {
            getAllPostsAndActivityTime();
            deleteLastPost().then((updatPost1) =>{
                console.log(updatPost1)
                updateLastUserActivityTime().then(()=>{
                    getAllPostsAndActivityTime();
                    deleteLastPost().then((updatPost2) =>{
                        console.log(updatPost2)
                        updateLastUserActivityTime().then(()=>{
                            getAllPostsAndActivityTime();
                            deleteLastPost().catch((err) =>{
                                console.log(err);
                                updateLastUserActivityTime().then(()=>{
                                    userLastActivityTime();
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

