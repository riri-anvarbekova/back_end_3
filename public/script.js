const API = "http://localhost:5000/blogs";

async function createBlog() {
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;
  const author = document.getElementById("author").value;

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, body, author })
  });

  loadBlogs();
}

async function loadBlogs() {
  const res = await fetch(API);
  const blogs = await res.json();

  const list = document.getElementById("blogs");
  list.innerHTML = "";

  blogs.forEach(blog => {
    const li = document.createElement("li");
    li.textContent = `${blog.title} - ${blog.author}`;
    list.appendChild(li);
  });
}

loadBlogs();
