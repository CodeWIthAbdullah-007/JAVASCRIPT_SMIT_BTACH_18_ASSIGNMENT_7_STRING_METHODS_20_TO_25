var password;
while(true){
    password = prompt("Enter password (letters+numbers, start with letter, min 6 chars)");
    if(/^[A-Za-z][A-Za-z0-9]{5,}$/.test(password)){
        break;
    }
}
alert("Valid password: " + password);
