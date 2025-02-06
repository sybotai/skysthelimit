// auth.js

// Simulate a simple user authentication system
const users = [];

export function registerUser(username, password) {
  if (users.find(user => user.username === username)) {
    throw new Error('Username already exists');
  }
  users.push({ username, password });
  return { username };
}

export function loginUser(username, password) {
  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    throw new Error('Invalid username or password');
  }
  return { username };
}

export function logoutUser() {
  // Placeholder for logout functionality
}
