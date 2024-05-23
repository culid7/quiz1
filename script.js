document.getElementById("submit-btn").addEventListener("click", submitQuiz);

function submitQuiz() {
  let answer1 = document.getElementById("answer1").value.toLowerCase();
  let answer2 = document.getElementById("answer2").value.toLowerCase();
  let answer3 = document.getElementById("answer3").value.toLowerCase();
  let answer4 = document.getElementById("answer4").value.toLowerCase();
  let totalScore = 0;
  let feedback = document.getElementById("feedback");

  if (answer1 == "8") {
    document.getElementById("score1").innerHTML = "1";
    document.getElementById("question1").style.color = "green";
    totalScore += 1;
  } else {
    document.getElementById("score1").innerHTML = "0";
    document.getElementById("question1").style.color = "red";
  }

  if (answer2 == "8") {
    document.getElementById("score2").innerHTML = "1";
    document.getElementById("question2").style.color = "green";
    totalScore += 1;
  } else {
    document.getElementById("score2").innerHTML = "0";
    document.getElementById("question2").style.color = "red";
  }

  if (answer3 == "42") {
    document.getElementById("score3").innerHTML = "1";
    document.getElementById("question3").style.color = "green";
    totalScore += 1;
  } else {
    document.getElementById("score3").innerHTML = "0";
    document.getElementById("question3").style.color = "red";
  }

  if (answer4 == "9") {
    document.getElementById("score4").innerHTML = "1";
    document.getElementById("question4").style.color = "green";
    totalScore += 1;
  } else {
    document.getElementById("score4").innerHTML = "0";
    document.getElementById("question4").style.color = "red";
  }

  document.getElementById("totalGrade").innerHTML = totalScore;
  let percentageScore = Math.round((totalScore / 4) * 100);
  document.getElementById("percentageScore").innerHTML = percentageScore + "%";

  if (totalScore == 4) {
    feedback.innerHTML = "good job🤓";
  } else if (totalScore == 3) {
    feedback.innerHTML = "Not bad😁";
  } else if (totalScore == 2) {
    feedback.innerHTML = "barley passed🥶";
  } else if (totalScore == 1) {
    feedback.innerHTML = "failed😂😁😀.";
  } else {
    feedback.innerHTML = "how is this possible😂😁😀.";
  }
}