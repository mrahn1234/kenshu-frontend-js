function fetchData(data) {
  let list = document.getElementById("list");
  data.forEach((item) => {
    let li_item = document.createElement("li");
    let title = document.createElement("h3");
    let body = document.createElement("p");
    title.innerText = item.title;
    body.innerText = item.body;
    li_item.appendChild(title);
    li_item.appendChild(body);
    list.appendChild(li_item);
  });
}

fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
  .then((res) => {
    if (!res.ok) {
      console.log(`error status code: ${res.status}`);
      return;
    }
    return res.json();
  })
  .then((data) => {
    fetchData(data);
  })
  .catch((err) => {
    console.log(err);
  });
