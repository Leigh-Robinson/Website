const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo").innerHTML = text;

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let fLen2 = fruits.length;

let text2 = "<ul>";
for (let i = 0; i < fLen; i++) {
  text2 += "<li>" + fruits[i] + "</li>";
}
text2 += "</ul>";

document.getElementById("demo").innerHTML = text;