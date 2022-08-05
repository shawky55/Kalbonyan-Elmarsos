// sync code
console.log("rabbits win game")
console.log('tortoise lose game')

//async code
setTimeout(()=>console.log('rabbits lose game '),1000)
console.log('tortoise win game ')




//Event emmiters
const EventEmitter = require('events');
const actor = new EventEmitter();
const fansCon = () => {
  console.log('you deserve it !');
};
const fansSad = () => {
  console.log('good luck! next time ,you did well');
};

////////


//1-eventName 2-listern
actor.on('win oscar', fansCon);
actor.on('lose oscar', fansSad);
const actorState = 1;
if (actorState) {
  actor.emit('win oscar');
} else {
  actor.emit('lose oscar');
}

//combine them
actor.on('oscar', (winState) => {
  if (winState) {
    fansCon();
  } else {
    fansSad();
  }
});
actor.emit('oscar', 0);

///porcess on
process.on('exit', (code) => {
  //code =0 with no error in code (succes)
  //code =1 or non zero with error
  console.log('code finished', code);
});
