// Your code goes here
let rootNode = document.getElementById("root");
renderList();
function renderTank(obj){
  let title = document.createElement("div");
  title.className="title";
  let h1 = document.createElement("h1");
  h1.className="details-heading";
  let flag = document.createElement('img');
  flag.title=obj.country;
  flag.className="details-flag";
  flag.src = obj.country_image;  
  h1.innerHTML = `${obj.model} (level ${obj.level})`;
  title.appendChild(flag);
  title.appendChild(h1);
  rootNode.appendChild(title);
  let detailsWrapper = document.createElement("div");
  detailsWrapper.className= "details-wrapper";
  let detailsLeft =document.createElement("div");
  detailsLeft.className="details-left";
  let img =document.createElement("img");
  img.className="details-tank-img";
  img.src = obj.preview;   
  let preview= document.createElement("h2");
  preview.innerHTML="Preview";
  let back = document.createElement("a");
  back.addEventListener('click', () => {
      location.hash = '';
      window.history.go();
  });
  back.className="back";
  back.innerHTML="Back to list view";
  detailsLeft.appendChild(preview);
  detailsLeft.appendChild(img);
  detailsLeft.appendChild(back);
  detailsWrapper.appendChild(detailsLeft); 
  let detailsRight =document.createElement("div");
  detailsRight.className="details-right";
  let characteristic=document.createElement("h2");
  characteristic.innerHTML="Characteristic";
  let tbl = document.createElement("table");
  let tblBody = document.createElement("tbody");
  for (let key in obj.details) {
    let row = document.createElement("tr");  
    let cell = document.createElement("td");
    let cellText = document.createTextNode(key.replace( /_/g , " "));
    cell.appendChild(cellText);
    row.appendChild(cell);
    cell = document.createElement("td");
    cellText = document.createTextNode(obj.details[key]);
    cell.appendChild(cellText);
    row.appendChild(cell);
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  detailsRight.appendChild(characteristic);
  detailsRight.appendChild(tbl);
  detailsWrapper.appendChild(detailsRight);
  rootNode.innerHTML="";
  rootNode.appendChild(title);
  rootNode.appendChild(detailsWrapper);

}

function renderList() {
  const backgroundColors=["#2c2c2c" ,"#44596d",
  "#447a66","#4b4376","#d05883",
  "#94823e","#3040b9"];
   var styleSheet = document.createElement('style');
  let h1 = document.createElement("h1");
  h1.innerHTML = "Most popular tanks";
  let tanksWrapper = document.createElement("div");
  tanksWrapper.className= "tanks-wrapper";
  for ( let i = 0; i < tanks.length; i++) {    
    let tankItem = document.createElement("div");
    tankItem.title="Click to details";
    tankItem.className="tank-item";
    let img = document.createElement('img');
    img.className= "tank-img";
    img.src = tanks[i].preview;
    tankItem.appendChild(img);
    tankTitle = document.createElement("div");
    tankTitle.className="tank-title";
    let flag = document.createElement('img');
    flag.title=tanks[i].country;
    flag.className="flag";
    flag.src = tanks[i].country_image;
    let level = document.createElement('p');
    level.className="level";
    level.innerHTML=tanks[i].level;
    let model = document.createElement('p');
    model.title=tanks[i].model;
    model.className="model";
    model.innerHTML=tanks[i].model;
    tankItem.appendChild(img);
    tankTitle.appendChild(flag);
    tankTitle.appendChild(level);
    tankTitle.appendChild(model);
    tankItem.appendChild(tankTitle);
    tankItem.addEventListener('click', () => {
        location.hash = tanks[i].model;
    });
    tanksWrapper.appendChild(tankItem);
    let style = `.tank-item:nth-child(${i+1}):hover {
    background-color: ${backgroundColors[i]};
    }`;
    styleSheet.appendChild(document.createTextNode(style));
  }
  document.head.appendChild(styleSheet);
  rootNode.appendChild(h1);   
  rootNode.appendChild(tanksWrapper);
}
function details(){
  let hash = location.hash.slice(1);
  for(let i = 0; i < tanks.length; i++){    
        if (tanks[i].model === hash) {
            renderTank(tanks[i]);
        }
  } 
}
window.onhashchange = details;