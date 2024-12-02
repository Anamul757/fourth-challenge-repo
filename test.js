function sendNotification(email) {
  // Validate if the input is a valid email with exactly one "@"
  if (
    typeof email !== "string" ||
    email.indexOf("@") === -1 ||
    email.split("@").length !== 2
  ) {
    return "Invalid Email";
  }

  // Split the email into username and domain name
  const [username, domain] = email.split("@");

  // Check if username and domain are non-empty
  if (!username || !domain) {
    return "Invalid Email";
  }

  // Create and return the notification message
  return username + " sent you an email from " + domain;
}

// Test Cases
// console.log(sendNotification("zihad@gmail.com")); // zihad sent you an email from gmail.com
// console.log(sendNotification("farhan34@yahoo.com")); // farhan34 sent you an email from yahoo.com
// console.log(sendNotification("nadim.naem5@outlook.com")); // nadim.naem5 sent you an email from outlook.com
// console.log(sendNotification("fahim234.hotmail.com")); // Invalid Email
// console.log(sendNotification("sadia8icloud.com")); // Invalid Email


function sendNotification(email) {
  if (typeof email !== "string" || email.indexOf("@") === -1) {
    return "Invalid Email";
  }
  const [username, domain] = email.split("@");
  const message = username + " sent you an email from " + domain;
  return message;
}
console.log(sendNotification("zihad@gmail.com")); // zihad sent you an email from gmail.com
console.log(sendNotification("farhan34@yahoo.com")); // farhan34 sent you an email from yahoo.com
console.log(sendNotification("nadim.naem5@outlook.com")); // nadim.naem5 sent you an email from outlook.com
console.log(sendNotification("fahim234.hotmail.com")); // Invalid Email
console.log(sendNotification("sadia8icloud.com"));
