function wakeDog(dogName, dogBread) {
  return `Wake ${dogName} the ${dogBread}`;
  }
function leashDog(dogName, dogBread) {
  return `Leash ${dogName} the ${dogBread}`;
}
function walkToPark(dogName, dogBread) {
  return `Walk to the park with ${dogName} the ${dogBread}`;
}
function throwFrisbee(dogName, dogBread) {
  return `Throw the frisbee for ${dogName} the ${dogBread}`;
}
function walkHome(dogName, dogBread) {
  return `Walk home with ${dogName} the ${dogBread}`;
}
function unleashDog(dogName, dogBread) {
  return `Unleash ${dogName} the ${dogBread}`;
}
  let routine = [ 
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
  ]
  let arr = [];
  function exerciseDog(dogName, dogBread) {
    for (let i = 0; i<routine.length; i++) {
      arr.push(routine[i](dogName, dogBread))
    }
    return arr;
  }

