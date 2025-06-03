function sendMessage() {
  const status = document.getElementById("message-status");
  status.innerText = "Thank you! Your message has been sent.";
  status.style.color = "#d4af37";
  // Prevent actual form submission
  return false;
}