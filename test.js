var duplicatesLink = document.getElementById("duplicatesLink");
const form = document.getElementById('form');
const listDivEl = document.querySelector("#listDiv"); 
const duplicatesError = document.querySelector("#removeDuplicatesError");
const message = document.querySelector("#exampleFormControlTextarea");
const messageError = document.querySelector("#messageError");
const subject = document.querySelector("#exampleInputSubject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#exampleInputEmail");
const emailError = document.querySelector("#emailError"); 
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

logSubmit = () => {
    if(subject.value == ""){
        subjectError.style.display = "block"; 
    }
    if(message.value == ""){
        messageError.style.display = "block"; 
    }
    if(email.value == ""){
        emailError.style.display = "block"; 
    } else {
        if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email.value)){
            console.log('valid email'); 
        } else {
            emailError.style.display = "block"; 
        }
    }
}

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
form.addEventListener('submit', event => {
    event.preventDefault(); 
    logSubmit(); 
});