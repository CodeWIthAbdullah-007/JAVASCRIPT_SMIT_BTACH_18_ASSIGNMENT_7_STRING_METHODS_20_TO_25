var username;
while(true){
    username = prompt("Enter username");
    if(username.indexOf("@")===-1 && username.indexOf(".")===-1 && username.indexOf(",")===-1 && username.indexOf("!")===-1){
        break;
    }
}
alert("Valid username: " + username);
