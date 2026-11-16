import { describe, expect, it } from 'vitest';
import { availableTimes, formatTime, validateBooking } from './booking.js';
const now = new Date(2026, 10, 16, 12, 0);
describe('booking validation', () => {
  it('rejects a past date', () => { expect(validateBooking({date:'2026-11-15',time:'18:00',guests:'2',occasion:'None'},now).date).toBeDefined(); });
  it('rejects missing time', () => { expect(validateBooking({date:'2026-11-17',time:'',guests:'2',occasion:'None'},now).time).toBeDefined(); });
  it('rejects invalid guest counts', () => { expect(validateBooking({date:'2026-11-17',time:'18:00',guests:'11',occasion:'None'},now).guests).toBeDefined(); });
  it('accepts a valid booking', () => { expect(validateBooking({date:'2026-11-17',time:'18:00',guests:'2',occasion:'Birthday'},now)).toEqual({}); });
  it('filters past times on the current day', () => { expect(availableTimes('2026-11-16',new Date(2026,10,16,19,0))).not.toContain('18:00'); });
  it('formats time for people', () => { expect(formatTime('19:30')).toBe('7:30 PM'); });
});
