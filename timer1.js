const times = process.argv.slice(2);

timesNew = times
.filter(Boolean)
.filter(num => num > 0)
.map( i => i *= 1000);
console.log(timesNew);


const beep = function(timesNew){
  for (const time of timesNew){
    setTimeout (() => {
      process.stdout.write('Mine doesn\'t beep');
    },time);
  };
}

beep(timesNew);
