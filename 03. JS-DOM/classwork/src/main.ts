const button = document.getElementById("button");
button?.addEventListener("click", handleClick);

const posts: { id: number; content: string }[] = [];
let runningId = 0;

function handleClick() {
  // @ts-ignore
  const content = document?.getElementById("input")?.value;
  console.log(content);

  posts.push({ id: ++runningId, content });

  renderPosts();
}

function renderPosts() {
  const postsContainer = document.getElementById("posts");

  postsContainer!.innerHTML = "";
  document.getElementsByTagName("input")[0].value = "";

  posts.forEach((post) => {
    const newPost = document.createElement("p");
    newPost.classList.add("post");
    newPost.textContent = post.content;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      const index = posts.findIndex((p) => p.id === post.id);
      posts.splice(index, 1);
      renderPosts();
    });

    postsContainer!.appendChild(newPost);
    postsContainer!.appendChild(deleteButton);
  });
}
