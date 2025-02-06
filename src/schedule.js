// schedule.js

// Simulate a simple debate scheduling system
const schedules = [];

export function createSchedule(topic, date, time) {
  const schedule = { id: schedules.length + 1, topic, date, time };
  schedules.push(schedule);
  return schedule;
}

export function updateSchedule(id, updatedSchedule) {
  const index = schedules.findIndex(schedule => schedule.id === id);
  if (index === -1) {
    throw new Error('Schedule not found');
  }
  schedules[index] = { ...schedules[index], ...updatedSchedule };
  return schedules[index];
}

export function deleteSchedule(id) {
  const index = schedules.findIndex(schedule => schedule.id === id);
  if (index === -1) {
    throw new Error('Schedule not found');
  }
  schedules.splice(index, 1);
}
