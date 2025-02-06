// feedback.js

// Simulate a simple feedback system
const feedbacks = [];

export function submitFeedback(username, type, content) {
  const feedback = { id: feedbacks.length + 1, username, type, content, timestamp: new Date() };
  feedbacks.push(feedback);
  return feedback;
}

export function getFeedbackForUser(username) {
  return feedbacks.filter(feedback => feedback.username === username);
}
