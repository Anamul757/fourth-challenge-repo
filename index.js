
function calculateTax(income, expense) {
  if (
    typeof income !== "number" ||
    typeof expense !== "number" ||
    income < 0 ||
    expense < 0 ||
    income < expense
  ) {
    return "Invalid Input";
  } else {
    const taxableAmount = income - expense;
    const totalTax = taxableAmount * 0.2;
    return totalTax;
  }
}


function sendNotification(email) {
  if (typeof email !== "string" || email.indexOf("@") === -1) {
    return "Invalid Email";
  }
  const [username, domain] = email.split("@");
  const message = username + " sent you an email from " + domain;
  return message;
}


function checkDigitsInName(input) {
  if (typeof input !== "string") {
    return "Invalid Input";
  }
  for (let i = 0; i < input.length; i++) {
    const str = input[i];
    if (str >= 0 && str <= 9) {
      return "true";
    }
  }
  return "false";
}


function calculateFinalScore(input) {
  if(typeof input !== "object" || typeof input.name !== "string" || typeof input.testScore !== "number" || typeof input.schoolGrade !== "number" || typeof input.isFFamily !== "boolean"){
    return "Invalid Input"
  }
  if(input.testScore <= 50 && input.schoolGrade <= 30){
    let finalScore = input.testScore + input.schoolGrade;
    if(input.isFFamily === true){
        finalScore += 20;
    }
    if(finalScore >= 80){
    return true;
    }
    else{
        return false;
    }
  }
}


function waitingTime(interviewTimes, serialNumber){
if(!Array.isArray(interviewTimes) || typeof serialNumber !== "number"){
    return "Invalid Input";
}
let totalTime = 0;
for(let i = 0; i<interviewTimes.length; i++){
    totalTime += interviewTimes[i];
}
const totalInterviews = interviewTimes.length;
const remainingPeople = (serialNumber - totalInterviews) - 1 ;
const averageTime = Math.round(totalTime / totalInterviews);
if(remainingPeople <= 0){
    return 0;
}
const waitingTime = averageTime * remainingPeople;
return waitingTime;
}
