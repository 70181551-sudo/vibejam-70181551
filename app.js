const chatBox = document.getElementById("chat-box");
const input = document.getElementById("user-input");

// Enter dabane se bhi send ho
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") sendMessage();
});

// Quick button ka text send karo
function quickAsk(text) {
  input.value = text;
  sendMessage();
}

// Question ke hisab se jawab
function getReply(question) {
  if (question.includes("library")) {
    return "The library is open from 08:30 AM to 08:00 PM, Monday to Thursday.";
  } else if (question.includes("admission")) {
    return "Please contact the university admission office for admission details.";
  } else if (question.includes("fee")) {
    return "Please contact the accounts office for fee details.";
  } else if (question.includes("exam")) {
    return "Please check your department notice board or portal for the exam schedule.";
  } else if (question.includes("hello") || question.includes("salam")) {
    return "Assalam-o-Alaikum! Welcome to AskSE Help Desk. How can I help you?";
  } else {
    return "Sorry, I could not find an answer. Please try another university-related question.";
  }
}

function addMessage(text, className) {
  const div = document.createElement("div");
  div.className = className;
  div.textContent = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
  return div;
}

function sendMessage() {
  const message = input.value.trim();
  if (message === "") return;

  addMessage(message, "user-message");
  input.value = "";

  // Typing dots
  const typing = document.createElement("div");
  typing.className = "bot-message typing";
  typing.innerHTML = "<span></span><span></span><span></span>";
  chatBox.appendChild(typing);
  chatBox.scrollTop = chatBox.scrollHeight;

  // 0.7 second baad jawab
  setTimeout(function () {
    typing.remove();
    addMessage(getReply(message.toLowerCase()), "bot-message");
  }, 700);
}