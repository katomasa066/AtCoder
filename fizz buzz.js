for (let number = 1; number<=100; number++) {
  if (number % 3 === 0 && number % 15 !== 0){
    console.log('Fizz');

  } else if (number % 5 === 0 && number % 15 !== 0){
    console.log('Buzz');

  } else if (number % 3 === 0 && number % 5 === 0){
    console.log('FizzBuzz');

  } else {
    console.log(number);
  }
}

// 答え : http://www.python.rdy.jp/wiki.cgi?page=FizzBuzz&action=PDF

const judgeFizzBuzz = (num) => {
  if (num % 15 === 0) {
    return 'FzzBuzz'
  }
  else if (num % 3 === 0) {
    return 'Fizz'
  }
  else if (num % 5 === 0) {
    return 'Buzz'
  } else {
    return num
  }
}

for (let i = 1; i <= 100; i++) {
  console.log(judgeFizzBuzz(i))
}