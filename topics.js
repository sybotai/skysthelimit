// topics.js

// Simulate a simple debate topics library
const topics = [];

export function addTopic(title, description) {
  const topic = { id: topics.length + 1, title, description };
  topics.push(topic);
  return topic;
}

export function updateTopic(id, updatedTopic) {
  const index = topics.findIndex(topic => topic.id === id);
  if (index === -1) {
    throw new Error('Topic not found');
  }
  topics[index] = { ...topics[index], ...updatedTopic };
  return topics[index];
}

export function getTopics() {
  return topics;
}
