import { Link } from 'react-router-dom';
import { getLatestReservation } from '../services/reservations.js';
import { formatDate, formatTime } from '../utils/booking.js';
export default function ConfirmationPage() {
  const booking = getLatestReservation();
  if (!booking) return <main className="container content centered"><h1>No reservation found</h1><p>Start by choosing a date and time for your table.</p><Link className="button" to="/booking">Book a table</Link></main>;
  return <main className="container content centered"><section className="confirmation-card" aria-labelledby="confirmed-heading"><div className="success-icon" aria-hidden="true">✓</div><p className="eyebrow">RESERVATION RECEIVED</p><h1 id="confirmed-heading">You're all <em>set!</em></h1><p>Your demo reservation details have been saved in this browser session.</p><dl className="summary"><div><dt>Date</dt><dd>{formatDate(booking.date)}</dd></div><div><dt>Time</dt><dd>{formatTime(booking.time)}</dd></div><div><dt>Guests</dt><dd>{booking.guests}</dd></div><div><dt>Occasion</dt><dd>{booking.occasion}</dd></div><div><dt>Reference</dt><dd>{booking.reference}</dd></div></dl><p className="form-note">Demo only — this is not a confirmed reservation at a real restaurant.</p><Link className="button" to="/">Return home</Link></section></main>;
}
