export const OCCASIONS = ['None', 'Birthday', 'Anniversary'];
export const ALL_TIMES = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'];

export function localToday(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function availableTimes(date, now = new Date()) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return [];
  const [year, month, day] = date.split('-').map(Number);
  const selected = new Date(year, month - 1, day);
  if (selected.getFullYear() !== year || selected.getMonth() !== month - 1 || selected.getDate() !== day) return [];
  if (date < localToday(now)) return [];
  const dayOfWeek = selected.getDay();
  const slots = dayOfWeek === 1 ? ALL_TIMES.slice(0, -2) : ALL_TIMES;
  if (date !== localToday(now)) return slots;
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  return slots.filter(time => { const [h, m] = time.split(':').map(Number); return h * 60 + m > currentMinutes + 30; });
}

export function validateBooking(data, now = new Date()) {
  const errors = {};
  if (!data.date) errors.date = 'Please select a date.';
  else if (availableTimes(data.date, now).length === 0) errors.date = 'Select a future date with available times.';
  if (!data.time || !availableTimes(data.date, now).includes(data.time)) errors.time = 'Please select an available time.';
  if (!Number.isInteger(Number(data.guests)) || Number(data.guests) < 1 || Number(data.guests) > 10) errors.guests = 'Select between 1 and 10 guests.';
  if (!OCCASIONS.includes(data.occasion)) errors.occasion = 'Please select a valid occasion.';
  return errors;
}

export function formatTime(time) {
  const [hour, minute] = time.split(':').map(Number);
  return `${hour % 12 || 12}:${String(minute).padStart(2, '0')} ${hour >= 12 ? 'PM' : 'AM'}`;
}

export function formatDate(date) {
  const [y, m, d] = date.split('-').map(Number);
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(new Date(y, m - 1, d));
}
