// messaging.js

// Simulate a simple private messaging system
const messages = [];

export function sendMessage(sender, receiver, content) {
  const message = { id: messages.length + 1, sender, receiver, content, timestamp: new Date() };
  messages.push(message);
  return message;
}

export function getMessagesForUser(username) {
  return messages.filter(message => message.receiver === username || message.sender === username);
}
