const { randomVerb, randomName, randomAdj} = require("./message-arrays")
// generates a random phrase everytime the program is run
// constraint requires 3 different parts of the message to be randomized
const messageOutlines = [
    `${randomName()} has been wanting to go and ${randomVerb()} the giant with ${randomName()}. They're both very ${randomAdj()}.`,
    `${randomName()} is the most ${randomAdj()} person you could ever meet. One time I saw him ${randomVerb()} a bowling ball with his hand.`,
    `${randomName()} and ${randomName()} will ${randomVerb()} on an adventure together. They both will ${randomVerb()}`
];

const sendMixedMessage = () => {
    return messageOutlines[Math.floor(Math.random() * messageOutlines.length)];
}

console.log(sendMixedMessage());