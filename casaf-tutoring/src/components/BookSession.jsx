import React, { useState } from 'react';
import Calendar from 'react-calendar';

export default function BookSession() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">Book a Tutoring Session</h2>

      <Calendar onChange={setDate} value={date} />

      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
        Confirm Session
      </button>
    </div>
  );
}
