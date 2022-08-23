function greetMessage(name) {
console.log('Good Morning, '+name);
}

function greetUsers(users, gM){
length= users.length;
for(i=0; i<length;i++){
gM(users[i]);
}
}

greetUsers(["John","Peter","Mark"], greetMessage)
