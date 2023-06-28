import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

type Event = {
  year: number;
  event: string;
};

function HistoricalEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [pageOffset, setPageOffset] = useState(0);

  const key = 'odGOiSepqFpCCqEER8Rhtg==dB7kB8Zj1Zomb08K';

  useEffect(() => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDay() + 1;

    const config = {
      params: {
        month: month,
        day: day,
        offset: pageOffset,
      },
      headers: {
        'X-API-Key': key,
      },
    };

    axios.get('https://api.api-ninjas.com/v1/historicalevents?text=', config)
      .then(({ data }) => {
        setEvents(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [pageOffset]);

  function nextEvents() {
    setPageOffset((prevOffset) => prevOffset + 10);
  }

  function resetEvents() {
    setPageOffset(0);
  }

  return (
    <div className="default-container">
      <p>Click the button to display events that happened today in history!</p>
      <div className='btn-group'>
        <button onClick={resetEvents}>Display/ Reset Events</button>
        <button onClick={nextEvents}>Next 10 Events</button>
      </div>
      {events.map((event, index) => (
        <p key={index}>
          {event.year}: {event.event}
        </p>
      ))}
      {error && <p>{error.message}</p>}
    </div>
  );
}

export default HistoricalEvents;
