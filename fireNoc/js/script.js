window.onload = function(){
let loader=document.getElementById("loader");
if(loader) loader.style.display="none";
};

let links=document.querySelectorAll(".nav-link");
let current=window.location.pathname.split("/").pop();

links.forEach(link=>{
if(link.getAttribute("href")==current){
link.style.color="red";
}
});

let cards=document.querySelectorAll(".card");

let total=Math.floor(Math.random()*200);
let approved=Math.floor(Math.random()*100);
let pending=total-approved;

if(cards.length>0){
cards[0].innerText="Total: "+total;
cards[1].innerText="Approved: "+approved;
cards[2].innerText="Pending: "+pending;
}

let ctx=document.getElementById("myChart");

if(ctx){
new Chart(ctx,{
type:'bar',
data:{
labels:['Total','Approved','Pending'],
datasets:[{data:[total,approved,pending]}]
}
});
}

function checkStatus(){
let result=document.getElementById("result");
let status=["Pending","Approved","Rejected"];
let random=status[Math.floor(Math.random()*3)];
result.innerText="Status: "+random;
}