function writeCards(names, event) {
    let messages = []; // empty array to store the mwessage
  
   for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
  
    return messages; 
  }

function countDown(number) {
  while (number >=0) {
    console.log(number);
    number--; 
  }
}

countDown(10);

