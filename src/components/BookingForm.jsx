import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { availableTimes, formatTime, localToday, OCCASIONS, validateBooking } from '../utils/booking.js';
import { saveReservation } from '../services/reservations.js';

const initialForm = () => ({ date: localToday(), time: '', guests: '2', occasion: 'None' });

export default function BookingForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const navigate = useNavigate();
  const times = useMemo(() => availableTimes(form.date), [form.date]);
  const update = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value, ...(field === 'date' ? { time: '' } : {}) }));
    setErrors(prev => ({ ...prev, [field]: undefined, ...(field === 'date' ? { time: undefined } : {}) }));
    setSubmitError('');
  };
  function submit(event) {
    event.preventDefault();
    const nextErrors = validateBooking(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    try {
      saveReservation(form);
      navigate('/confirmation');
    } catch {
      setSubmitError('Unable to save your reservation in this browser. Please enable session storage and try again.');
    }
  }
  return <form className="booking-form" onSubmit={submit} noValidate aria-label="Table reservation form">
    <div className="form-field"><label htmlFor="booking-date">Choose date <span aria-hidden="true">*</span></label><input id="booking-date" type="date" min={localToday()} value={form.date} onChange={e => update('date', e.target.value)} required aria-invalid={Boolean(errors.date)} aria-describedby={errors.date ? 'date-error' : undefined}/>{errors.date && <p className="field-error" id="date-error" role="alert">{errors.date}</p>}</div>
    <div className="form-field"><label htmlFor="booking-time">Choose time <span aria-hidden="true">*</span></label><select id="booking-time" value={form.time} onChange={e => update('time', e.target.value)} required aria-invalid={Boolean(errors.time)} aria-describedby={errors.time ? 'time-error' : undefined}><option value="">{times.length ? 'Select a time' : 'No available times'}</option>{times.map(time => <option key={time} value={time}>{formatTime(time)}</option>)}</select>{errors.time && <p className="field-error" id="time-error" role="alert">{errors.time}</p>}</div>
    <div className="form-field"><label htmlFor="booking-guests">Number of guests <span aria-hidden="true">*</span></label><select id="booking-guests" value={form.guests} onChange={e => update('guests', e.target.value)} required aria-invalid={Boolean(errors.guests)} aria-describedby={errors.guests ? 'guests-error' : undefined}>{Array.from({ length: 10 }, (_, i) => i + 1).map(count => <option key={count} value={count}>{count} {count === 1 ? 'guest' : 'guests'}</option>)}</select>{errors.guests && <p className="field-error" id="guests-error" role="alert">{errors.guests}</p>}</div>
    <div className="form-field"><label htmlFor="booking-occasion">Occasion</label><select id="booking-occasion" value={form.occasion} onChange={e => update('occasion', e.target.value)} aria-invalid={Boolean(errors.occasion)} aria-describedby={errors.occasion ? 'occasion-error' : undefined}>{OCCASIONS.map(occasion => <option key={occasion} value={occasion}>{occasion}</option>)}</select>{errors.occasion && <p className="field-error" id="occasion-error" role="alert">{errors.occasion}</p>}</div>
    {submitError && <p role="alert" className="field-error">{submitError}</p>}
    <button className="button submit-button" type="submit">Confirm reservation <span aria-hidden="true">→</span></button>
    <p className="form-note">* Required fields. This is a demo reservation; no real table will be booked.</p>
  </form>;
}
