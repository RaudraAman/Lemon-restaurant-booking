import BookingForm from '../components/BookingForm.jsx';
export default function BookingPage() {
  return <main className="container content booking-layout"><section className="booking-intro"><p className="eyebrow">YOUR TABLE AWAITS</p><h1>Make a <em>reservation.</em></h1><p>Pick your preferred date, time and party size. We can't wait to welcome you.</p><div className="info-box"><span aria-hidden="true">✳</span><div><strong>Little Lemon, Chicago</strong><p>Mediterranean food, made with love.</p></div></div></section><section className="form-card" aria-labelledby="booking-heading"><h2 id="booking-heading">Book a table</h2><p className="subtle">Complete the details below.</p><BookingForm/></section></main>;
}
