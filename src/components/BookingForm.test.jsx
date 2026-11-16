// Component test: booking validation is visible and accessible to users.
import React from 'react';
import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookingForm from './BookingForm.jsx';
describe('BookingForm', () => {
  it('shows a validation message when no time is selected', () => {
    render(<MemoryRouter><BookingForm /></MemoryRouter>);
    fireEvent.click(screen.getByRole('button', { name: /confirm reservation/i }));
    expect(screen.getByRole('alert').textContent).toMatch(/select an available time/i);
  });
});
