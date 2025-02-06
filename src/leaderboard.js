// leaderboard.js

// Simulate a simple leaderboard system
const leaderboard = [];

export function updateLeaderboard(username, points) {
  const user = leaderboard.find(entry => entry.username === username);
  if (user) {
    user.points += points;
  } else {
    leaderboard.push({ username, points });
  }
  leaderboard.sort((a, b) => b.points - a.points);
}

export function getLeaderboard() {
  return leaderboard;
}
