let textbox = document.getElementById("input");

textbox.oninput = (e) => {
  if (e.target.value.indexOf("yes") > -1 || e.target.value.includes("yes"))
    document.getElementById("text").textContent = e.target.value;
  else document.getElementById("text").textContent = "";
};
