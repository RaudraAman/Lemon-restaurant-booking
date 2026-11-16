import { Link, Route, Routes } from 'react-router-dom';
import BookingPage from './pages/BookingPage.jsx';
import ConfirmationPage from './pages/ConfirmationPage.jsx';

function Home() {
  return <main className="hero container"><div className="hero-copy"><p className="eyebrow">CHICAGO • MEDITERRANEAN CUISINE</p><h1>Good food. <em>Great company.</em></h1><p>Fresh Mediterranean flavors, warm hospitality, and a table waiting for you.</p><Link className="button" to="/booking">Reserve a table</Link></div><div className="hero-art" role="img" aria-label="Illustration of a lemon on a restaurant plate"><div className="plate"><div className="lemon">✦</div></div></div></main>;
}

export default function App() {
  return <><header className="site-header"><div className="container header-inner"><Link to="/" className="brand" aria-label="Little Lemon home"><span className="brand-icon">✳</span> LITTLE LEMON</Link><nav aria-label="Main navigation"><Link to="/">Home</Link><Link to="/booking">Reservations</Link></nav></div></header><Routes><Route path="/" element={<Home/>}/><Route path="/booking" element={<BookingPage/>}/><Route path="/confirmation" element={<ConfirmationPage/>}/><Route path="*" element={<main className="container content"><h1>Page not found</h1><Link to="/">Return home</Link></main>}/></Routes><footer className="site-footer"><div className="container">© {new Date().getFullYear()} Little Lemon · Chicago · Demo capstone project</div></footer></>;
}
