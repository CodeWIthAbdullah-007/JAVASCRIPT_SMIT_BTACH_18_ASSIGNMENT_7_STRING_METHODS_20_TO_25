var str = "Pakistan".toLowerCase();
var vowels = 0;
var consonants = 0;
for(var i=0;i<str.length;i++){
    if("aeiou".indexOf(str[i]) !== -1){
        vowels++;
    } else if(str[i]>="a" && str[i]<="z"){
        consonants++;
    }
}
alert("Vowels: " + vowels + "\nConsonants: " + consonants);
