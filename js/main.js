
let myLeads = [];


const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');

let leadsFromLocal = (JSON.parse(localStorage.getItem("myLeads")));

if(leadsFromLocal){
    myLeads = leadsFromLocal;
    renderLeads();
}

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads();
});


function renderLeads(){
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++){
        // const li = document.createElement('li');
        // li.textContent = myLeads[i];
        // ulEl.append(li);
    
        listItems  += `
        <li>
            <a href='${myLeads[i]}' target='_blank'>${myLeads[i]}</a>
        </li>`;
    }
    ulEl.innerHTML = listItems;
}
