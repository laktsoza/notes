
// // const add = document.getElementById('plus');

// // function createNote() {
// //     let element = document.createElement("div");
// //     element.setAttribute('id', 'header');

// //     element.appendChild(document.createElement('p'));
// //     element.appendChild(document.createElement('p'));

// //     //p.setAttribute('id', 'note'); 
// //     //p1.setAttribute('id', 'clickTime'); 
    
// //     let t = new Date();
// //     let time = t.toLocaleTimeString();

// //     document.getElementById('left').appendChild(element);
// //     document.getElementsByTagName('p')[0].innerHTML = 'Note';
// //     document.getElementsByTagName('p')[1].innerHTML = time;
// // }

// // add.addEventListener('click', createNote);

// //header. .textContent = date;
// //header.appendChild(par1);

// //let par = document.createElement("p");
// //par.textContent = 'Note';
// //header.appendChild(par);

// //let par1 = document.createElement("p");

// //let x = 1; 
// //const header = document.getElementById("header");


// const add = document.getElementById('plus');
// const remove = document.getElementById('recycle');
// //const header = document.getElementById("header");
// const notelist = document.getElementById("notelist");
// const button = document.getElementById("save");
// const textarea = document.getElementById("story");

// let dated = document.getElementById('dated');
// let title = document.getElementById('note');
// let savedtext = document.createElement("p");
// let rightDiv = document.getElementById('right');
// let newNote = document.getElementById('notelist');

// function time () {
//     let t = new Date();
//     let date = t.toLocaleString();
//     document.getElementById("time").innerText = date;
// }; time();

// function addDiv () {
//     let ul = document.createElement("ul");
//     //document.newNote.createElement("div");
//     document.ul.appendChild('li');
// };

// // function addDiv1 () {
// //     if(header.style.display == "block") {
// //         header1.style.display = "block";
// //         let t = new Date();
// //         let date = t.toLocaleTimeString();
// //         if (dated.textContent == "") {
// //             dated.textContent = date;
// //         }  
// //     }
// // } 

// function showTextarea() {
//     let story = document.getElementById("story");
//     story.style.display = "block";
//     document.getElementById("save").style.display = "block";
    
// };

// function save () { 
//     let t = new Date();
//     let date = t.toLocaleTimeString();
//     if (dated.textContent == "") {
//         dated.textContent = date;
//     }   
//     savedtext.setAttribute('id', 'savedtext');
//     rightDiv.appendChild(savedtext);
//     savedtext.textContent = textarea.value; 
//     function firstWord () {
//         let x = savedtext.textContent;
//         let res = x.split( " ", 1);
//         title.textContent = res;
//     } firstWord();  
// };

// function backText() {
//     let textexist = document.getElementById("savedtext");
//     if(textexist !== null) {
//     textarea.value = textexist.textContent;
//     }
// };

// remove.addEventListener ('click', () => {
//     button.style.display = "none";
//     textarea.style.display = "none";
//     header.style.display = "none";
//     textarea.value = '';
//     title.textContent = '';
//     savedtext.textContent = '';
// })

// //add.addEventListener('click', addDiv1);
// add.addEventListener('click', addDiv);
// add.addEventListener('click', showTextarea);
// button.addEventListener("click", save);
// notelist.addEventListener("click", backText);

const add = document.getElementById('plus');
const remove = document.getElementById('recycle');
const list = document.getElementById('fornotes');
const textarea = document.getElementById('story');
const savebutton = document.getElementById('save');

let archive; 

function addtextarea () {
    textarea.style.display = 'block';
    savebutton.style.display = 'block';  
} 

function savetext () {
    let li = document.createElement('li');
    list.appendChild(li);
    li.addEventListener('click', choosenote);  
    textarea.style.display = 'none';
    savebutton.style.display = 'none'; 
    li.textContent = textarea.value;
}



add.addEventListener('click', addtextarea);
savebutton.addEventListener('click', savetext);


function choosenote () {
    textarea.style.display = 'block';
    savebutton.style.display = 'block';
}



































