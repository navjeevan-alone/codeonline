// page 3 code display questions dynamically
let container = document.querySelector(".container");

let quizDB = [
  {
    ques: "What does HTML stand for?",
    a: "Hyper Text Markup Launguage",
    b: "Hper Tool Makeup Launguage",
    c: "Hello Text Markup Lang",
    d: "None of these",
    answer: "optA",
  },
  {
    ques: "Who is making the Web standards?",
    a: "Chrome",
    b: "Firefox",
    c: "Opera",
    d: "w3 corporation",
    answer: "optD",
  },
  {
    ques: "Choose the correct HTML element for the largest heading:",
    a: " &lt;h2&gt;",
    b: "&lt;h3&gt;",
    c: "&lt;h1&gt;",
    d: "&lt;h6&gt;",
    answer: "optC",
  },
  {
    ques: "What is the correct HTML element for inserting a line break?",
    a: "&lt;h2/&gt;",
    b: "&lt;br/&gt;",
    c: "&lt;span/&gt;",
    d: "&lt;h2/&gt;",
    answer: "optB",
  },
];
let score = 0;
let totalQues = quizDB.length;
// let container = document.querySelector(".container");
let i = 0;

function loadQues() {
  let container = document.querySelector(".container");
  let currentQues = document.querySelector(".currentQues");
  container.querySelector(".currentQues").innerHTML = `${i} of ${totalQues}`;
  container.querySelector(".question").innerHTML = quizDB[i].ques;
  container.querySelector(".optA").innerHTML = quizDB[i].a;
  container.querySelector(".optB").innerHTML = quizDB[i].b;
  container.querySelector(".optC").innerHTML = quizDB[i].c;
  container.querySelector(".optD").innerHTML = quizDB[i].d;
}

function nextQues() {
  if (i < quizDB.length) {
    i++;
    let chooseAns = document.querySelectorAll(".opt");
    // chooseAns.forEach()
    console.log(chooseAns);
    loadQues();
  } else {
    document.querySelector("#next").disabled = true;
  }
}
function prevQues() {
  if (i > 0) {
    i--;
    loadQues();
  } else {
    document.querySelector("#prev").disabled = true;
  }
}
// page 1 to page 2 navigation
function start() {
  let container = document.querySelector(".container");
  let temp2 = document.querySelector("#temp2").content.cloneNode(true);
  //   alert("You are moving forward");
  container.innerHTML = "";
  container.appendChild(temp2);
}
//page 2 to page 3 navigation
function proceed() {
  let container = document.querySelector(".container");
  //   let confirmQuiz = confirm("Are you Ready to Begin ?");
  //   if (confirmQuiz == true) {
  confirmProceed();
  //   } else {
  //     container.innerHTML = `<h1>If you want to give exam reload page </h1>`;
  //   }
}

function confirmProceed() {
  let container = document.querySelector(".container");
  let temp3 = document.querySelector("#temp3").content.cloneNode(true);
  container.innerHTML = "";
  container.appendChild(temp3);
  loadQues();
}

//page 4 last page show result
function showResult() {
  let confirmSubmit = confirm("Are You Sure to Submit?");
  let container = document.querySelector(".container");
  let temp4 = document.querySelector("#temp4").content.cloneNode(true);
  let scoreResult = document.querySelector(".scoreResult");
  // let temp1 = document.querySelector("#temp1").content.cloneNode(true);

  if (confirmSubmit == true) {
    container.innerHTML = "";
    container.appendChild(temp4);
    scoreResult.innerHTML = `${score} of ${totalQues}`;
  }
}
function restartQuiz() {
  let container = document.querySelector(".container");
  let temp1 = document.querySelector("#temp1").content.cloneNode(true);
  container.innerHTML = "";
  container.appendChild(temp1);
}
