console.log("Hello world!")
//ON CLICK NEW COMMENT

form.addEventListener("submit", (newPost) => {
    newPost.preventDefault();
  
    const nameInput = newPost.target.name;
    const commentInput = newPost.target.comment;
  
    if (nameInput.value.trim() === "") {
      alert("Please enter your name.");
      nameInput.focus();
      return;
    }
  
    if (commentInput.value.trim() === "") {
      alert("Please leave a cool comment!");
      commentInput.focus();
      return;
    }
  
    const newComment = {
      name: nameInput.value.trim(),
      comment: commentInput.value.trim(),
      date: timeStamp,
    };
  
    postComments(newComment);
    //CLEARS INPUT ON SUBMIT
    let formInput = document.querySelector(".comments__input-info-form");
    formInput.reset();
  });
  