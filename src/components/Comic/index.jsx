import React from 'react';

const Comic = ({ xkcd }) => (
  <div>
    <h2>{xkcd.title}</h2>
    <a
      href={`https://xkcd.com/${xkcd.num}/`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={xkcd.img}
        alt={xkcd.alt}
        title={xkcd.alt}
      />
    </a>
  </div>
);

export default Comic;