// JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız.
//Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.

function findPrime(...numbers) {
  let result = [];

  numbers.forEach((number) => {
    if (primeNumber(number)) {
      result.push("asal : " + number);
    } else {
      result.push("asal değil : " + number);
    }
  });

  return result;
}

//console.log(findPrime(2, 10));

//birden fazla sayının asal olup olmadığını bulma
function isPrimeNumber(...sayi) {
  for (let j = 0; j < sayi.length; j++) {
    let sayac = 0;
    for (let i = 2; i < sayi[j]; i++) {
      if (sayi[j] % i == 0) {
        sayac += 1;
      }
    }
    if (sayac == 0) {
      // console.log(sayi[j] + "is a prime number");
    } else {
      //console.log(sayi[j] + " is not a prime number!");
    }
  }
}
isPrimeNumber(3, 21, 7);
//console.log(isPrimeNumber(3, 21, 7));

//arkadaş sayı bulma
function friendNumber(number1, number2) {
  let total1 = 0;
  let total2 = 0;

  for (let i = 1; i < number1; i++) {
    if (number1 % i == 0) {
      total1 = total1 + i;
    }
  }

  for (let i = 1; i < number2; i++) {
    if (number2 % i == 0) {
      total2 = total2 + i;
    }
  }

  if (number1 == total2 && number2 == total1) {
    console.log("Bu sayılar arkadaş sayılardır");
  } else {
    console.log("Bu sayılar arkadaş sayı değildir");
  }
}
friendNumber(220, 284);

//1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

function perfectNumber() {
  for (let i = 1; i < 1000; i++) {
    let total = 0;
    for (let j = 1; j < i; j++) {
      if (i % j == 0) {
        total = total + j;
      }
    }

    if (i == total) {
      console.log(i + "is a perfect number");
    }
  }
}
console.log(perfectNumber());

//1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

function listOfPrimes() {
  for (let i = 2; i < 1000; i++) {
    if (primeNumber(i) == true) {
      console.log(i + "is a prime number");
    }
  }
}
console.log(listOfPrimes());
