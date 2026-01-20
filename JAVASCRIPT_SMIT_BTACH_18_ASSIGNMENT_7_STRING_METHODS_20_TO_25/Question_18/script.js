var A = ["cake","apple pie","cookie","chips","patties"];
var search = prompt("Search item").toLowerCase();
var found = false;
for(var i=0;i<A.length;i++){
    if(A[i].toLowerCase()===search){
        found = true;
        break;
    }
}
alert(found ? search + " is available" : search + " is not available");
