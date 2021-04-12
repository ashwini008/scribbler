var postDataSet = [
    {
      id: 1,
      user: "Srishti Gupta",
      postLikes: 0,
      comments: [],
      title: "'let' me be a 'const'(ant), not a 'var'(iable)!",
      info:
        "Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable of any type (datatype) in JavaScript. Though all the three keywords are used for the same purpose, they are different."
    },
    {
      id: 2,
      user: "Colby Fayock",
      postLikes: 0,
      comments: [],
      title: "What is linting and how can it save you time?",
      info:
        "One of the biggest challenges in software development is time. It's something we can't easily get more of, but linting can help us make the most out of the time we have."
    },
    {
      id: 3,
      user: "Yazeed Bzadough",
      postLikes: 0,
      comments: [],
      title: "How to Get More Views on Your Tech Blog",
      info:
        "If you're a developer with a Twitter account, you've already seen everyone and their cat start a blog, YouTube channel, or Patreon. We all want to become stars, or at the very least, a recognizable name in the industry."
    },
    {
      id: 4,
      user: "Cedd Burge",
      postLikes: 0,
      comments: [],
      title: "How to write easily describable code",
      info:
        "When code is not describable using words, most people have to do some mental mapping to turn it in to words. This wastes mental energy, and you run the risk of getting the mapping wrong. Different people will map to different words, which" +
        "leads to confusion when discussing the code."
    },
    {
      id: 5,
      user: "Srishti Gupta",
      postLikes: 0,
      comments: [],
      title: "Everything you should know about 'module' & 'require' in Node.js",
      info:
        "Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you've created a module" +
        "named xyz."
    }
  ];

loadPostList(postDataSet);

// Load all the posts
function loadPostList(postList) {
  let listElement = document.getElementById("post-container");
  let listItem = "";
  postList.map(post => {
    listItem += `
        <div class="post-holder">
            <div class="post-name">
                <p>${post.user}</p>
            </div>

            <div class="post-desc">
                <div class="post-header">
                    <p class="post-header-text">‘${post.title}</p>
                    <span class="post-delete">
                        <i class="fa fa-trash" onclick="deletePost(${post.id})"></i>
                    </span>
                </div>
                <p class="post-body-info">${post.info}</p>
                <span class="post-footer">
                    <i class="fa fa-ellipsis-h" onclick="editPost(${post.id})"></i>
                </span>
            </div>
        </div>
      `;
  });
  listElement.innerHTML = listItem;
}

// Method to show delete popup and store selected post
function deletePost(id) {
    this.selectedId = id;
    document.getElementById('modal-bg').style.display = "block";
    document.getElementsByClassName('modal-delete')[0].style.display = "block";
}
  
// method to edit a post
function editPost(editedPost) {
    sessionStorage.setItem(
      "post-user",
      JSON.stringify(postDataSet.filter(post => post.id == editedPost))
    );
    location.href = "../html/post.html";
}

var selectedId = null;

let confirmDelete = document.getElementById("confirm-delete");

// Delete the post
confirmDelete.onclick = function() {
  postDataSet = postDataSet.filter(post => post.id != selectedId);
  loadPostList(postDataSet);
  closeModal()
};