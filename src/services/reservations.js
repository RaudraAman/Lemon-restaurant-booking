const STORAGE_KEY = 'little-lemon-latest-booking';
export function saveReservation(booking) {
  const reservation = { ...booking, reference: `LL-${Date.now()}` };
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(reservation));
  return reservation;
}
export function getLatestReservation() {
  try { const value = sessionStorage.getItem(STORAGE_KEY); return value ? JSON.parse(value) : null; }
  catch { return null; }
}
