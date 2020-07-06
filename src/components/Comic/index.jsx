import React from 'react';

const Comic = ({ xkcd }) => (
  <div>
    <h2>{xkcd.title}</h2>
    <img
      src={xkcd.img}
      alt={xkcd.alt}
      title={xkcd.alt}
    />
  </div>
);

export default Comic;