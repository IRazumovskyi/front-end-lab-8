let rootNode = document.getElementById("root");

function createTree(node, parentNode) {
  for (let i = 0; i < node.length; i++) {
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let div = document.createElement("div");
    let icon = document.createElement("i");
    icon.className = "material-icons";

    if (node[i].folder) {
      icon.innerHTML = "folder";
    } else {
      icon.innerHTML = "insert_drive_file";
      div.className = "file";
    }

    let p = document.createElement("p");
    p.innerHTML = node[i].title;
    div.appendChild(icon);
    div.appendChild(p);
    li.appendChild(div);
    parentNode.appendChild(li);
    div.addEventListener("click", toggle);

    if (node[i].children) {
      li.appendChild(ul);
      if (node[i].folder) {
        icon.innerHTML = "folder";
      } else {
        icon.innerHTML = "insert_drive_file";
      }

      ul.style.display = "none";
      createTree(node[i].children, ul);
    } else if (node[i].folder && !node[i].children) {
      parentNode.appendChild(ul);

      let blank = document.createElement("li");
      blank.className = "empty";
      blank.innerHTML = "Folder is empty";
      li.appendChild(blank);
      blank.style.display = "none";
    }
  }
}
function toggle(e) {
  e.preventDefault();
  if (this.nextElementSibling.style.display === "none") {
    this.nextElementSibling.style.display = "block";
    this.children[0].innerHTML = "folder_open";
  } else {
    this.nextElementSibling.style.display = "none";
    this.children[0].innerHTML = "folder";
  }
}

createTree(structure, rootNode);