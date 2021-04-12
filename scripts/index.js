function signUpModal() {
    document.getElementById('modal-bg').style.display = "block";
    document.getElementsByClassName('modal-sign-up')[0].style.display = "block";
}

function signInModal() {
    document.getElementById('modal-bg').style.display = "block";
    document.getElementsByClassName('modal-sign-in')[0].style.display = "block";
}

function closeModal() {
    document.getElementById('modal-bg').style.display = "none";
    document.getElementsByClassName('modal-sign-up')[0].style.display = "none";
    document.getElementsByClassName('modal-sign-in')[0].style.display = "none";
    if (document.getElementsByClassName('modal-create-post')[0])
        document.getElementsByClassName('modal-create-post')[0].style.display = "none";
    if (document.getElementsByClassName('modal-delete')[0])
        document.getElementsByClassName('modal-delete')[0].style.display = "none";
}

function createPostModal() {
    document.getElementById('modal-bg').style.display = "block";
    document.getElementsByClassName('modal-create-post')[0].style.display = "block";
}

function viewPosts() {
    window.location.href = "./html/postslist.html";
}