function tellFortune(numChildren, partnerName, location, jobTitle) {
    let fortune = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;
    document.getElementById("fortune").innerHTML += `<p>${fortune}</p>`;
  }

  function calculateDogAge(puppyAge) {
    let dogAge = puppyAge * 7;
    let result = `Your doggie is ${dogAge} years old in dog years!`;
    document.getElementById("dogAge").innerHTML += `<p>${result}</p>`;
  }

  function reverseNumber(number) {
    let numString = number.toString();
    let newNumber = [];

    for (let i = numString.length - 1; i >= 0; i--) {
      newNumber += numString[i];
    }
    document.getElementById(
      "reverseNumber"
    ).innerHTML += `<p>${newNumber}</p>`;
  }

  function alphabet(word) {
    let newWordArray = [];

    for (let i = 0; i < word.length; i++) {
      newWordArray.push(word[i]);
    }
    newWordArray.sort();
    let newWord = "";
    for (let i = 0; i < newWordArray.length; i++) {
      newWord += newWordArray[i];
    }
    document.getElementById(
      "alphabetOrder"
    ).innerHTML += `<p>${newWord}</p>`;
  }

  function titleCase(sentence) {
    let result = "";

    for (let i = 0; i < sentence.length; i++) {
      if (i === 0 || sentence[i - 1] === " ") {
        result += sentence[i].toUpperCase();
      } else {
        result += sentence[i];
      }
    }
    document.getElementById("titleCase").innerHTML += `<p>${result}</p>`;
  }