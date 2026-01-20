var input = prompt("Enter text").toLowerCase();
var words = input.split(" ");
for(var i=0;i<words.length;i++){
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}
var title = words.join(" ");
alert(title);
