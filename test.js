var listDivEl = document.querySelector("#listDiv"); 
var duplicatesLink = document.getElementById("duplicatesLink"); 
var duplicatesError = document.querySelector("#removeDuplicatesError");

var names1 = [
    { name: "Matt Johnson"}, 
    { name: "Bart Paden"},
    { name: "Ryan Doss"}, 
    { name: "Jared Malcom"}
];
var names2 = [
    { name: "Matt Johnson"},
    { name: "Bart Paden"},
    { name: "Jordan Heigle"},
    { name: "Tyle Viles"}
];

removeDuplicates = (a,b) => {
    if(listDivEl.hasChildNodes()) {
        duplicatesError.style.display = "block"; 
    } else {
        let names = a.map(c => c.name);
        names3 = a.concat(b.filter(({name}) => !names.includes(name)));
        for(let i = 0; i < names3.length; i++){
            var liElement = document.createElement("li");
            liElement.innerHTML = names3[i].name
            listDivEl.appendChild(liElement); 
        }
    }
}

duplicatesLink.addEventListener('click', event => {
    removeDuplicates(names1, names2); 
}); 