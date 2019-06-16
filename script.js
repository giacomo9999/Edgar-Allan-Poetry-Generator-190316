function createKVObject(wordArr) {
  // create an object of "word : next word" key-value pairs
  const obj = {};
  for (let j = 0; j < wordArr.length - 1; j++) {
    if (obj[wordArr[j]]) {
      obj[wordArr[j]].push(wordArr[j + 1]);
    } else {
      obj[wordArr[j]] = [wordArr[j + 1]];
    }
  }

  return obj;
}

function writeTitle(obj) {
  let keys = Object.keys(obj);
  let line = "";
  let randNum = Math.floor(Math.random() * keys.length);
  let randNum2 = 0;
  let randAdj = Math.floor(Math.random() * 3 + 3);
  let nextWord = keys[randNum];
  let revNextWord = "";
  let endOK = false;
  const forbEndWords = [
    "A",
    "And",
    "The",
    "As",
    "Of",
    "To",
    "In",
    "Nor",
    "These",
    "I",
    "By",
    "We",
    "My",
    "An",
    "But",
    "When",
    "She",
    "That",
    "From"
  ];
  // console.log (randAdj);

  for (var loop = 0; loop <= randAdj; loop++) {
    // console.log (loop);
    // console.log (nextWord);
    line = line + " " + revNextWord;
    // console.log (line);
    randNum2 = Math.floor(Math.random() * obj[nextWord].length);
    nextWord = obj[nextWord][randNum2];
    if (
      loop === randAdj &&
      (nextWord === "and" ||
        nextWord === "the" ||
        nextWord === "as" ||
        nextWord === "a" ||
        nextWord === "in")
    ) {
      // console.log ("Loop ",loop+" - Next Word:",nextWord);
      nextWord = "darkness";
    }
    revNextWord = nextWord[0].toUpperCase() + nextWord.slice(1);
  }
  line = line.slice(2);

  while (!endOK) {
    endTest = line.slice(line.lastIndexOf(" ") - line.length + 1);
    // console.log (endTest);
    if (forbEndWords.indexOf(endTest) != -1) {
      line = line.slice(0, line.lastIndexOf(" "));
    } else {
      endOK = true;
    }
  }
  return line;
}

function writeLine(obj) {
  let keys = Object.keys(obj);
  let line = "";
  let randNum = Math.floor(Math.random() * keys.length);
  let randNum2 = 0;
  let randAdj = Math.floor(Math.random() * 2 - 2);
  let nextWord = keys[randNum];
  let loopEnd = 11 + randAdj;
  let endOK = false;
  const forbEndWords = [
    "our",
    "a",
    "and",
    "the",
    "as",
    "of",
    "to",
    "in",
    "nor",
    "these",
    "I",
    "by",
    "we",
    "my",
    "an",
    "tis",
    "that",
    "its",
    "let",
    "most",
    "newly",
    "while",
    "yet",
    "out",
    "he",
    "thus",
    "but",
    "than",
    "till",
    "ah",
    "if",
    "gave",
    "so",
    "or",
    "is",
    "she",
    "who",
    "mid",
    "from",
    "has",
    "when"
  ];
  // console.log ("Line Length: ",loopEnd);
  for (var loop = 0; loop <= loopEnd; loop++) {
    line = line + " " + nextWord;
    randNum2 = Math.floor(Math.random() * obj[nextWord].length);
    nextWord = obj[nextWord][randNum2];
  }

  line = line[1].toUpperCase() + line.slice(2);

  while (!endOK) {
    endTest = line.slice(line.lastIndexOf(" ") - line.length + 1);
    // console.log (endTest);
    if (forbEndWords.indexOf(endTest) != -1) {
      line = line.slice(0, line.lastIndexOf(" "));
    } else {
      endOK = true;
    }
  }

  return line;
}

function writeStanza(stanzaLength, obj) {
  var termCharArr = [";", "--", ".", " "];
  var stanza = "";
  for (loop = 0; loop < stanzaLength; loop++) {
    if (loop === stanzaLength - 1) {
      var termChar = 2;
    } else {
      termChar = Math.floor(Math.random() * 4);
    }
    stanza += writeLine(obj) + termCharArr[termChar] + "<br/>";
  }
  return stanza;
}

// N.B.: textArray is defined in textSource.js and imported by index.html
var kVObj = createKVObject(textArray);

let newPoem = document.querySelector(".poem_text");
let newTitle = document.querySelector(".poetry_title");
newTitle.innerHTML = writeTitle(kVObj);
newPoem.innerHTML = writeStanza(4, kVObj) + "<br/>" + writeStanza(4, kVObj);