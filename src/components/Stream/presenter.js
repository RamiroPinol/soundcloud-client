import React from 'react';

function Stream({ tracks = [], onAuth }) {
  return (
    <div>
      <div>
        <button onClick={onAuth} type="button">Login</button>
      </div>
      <br />
      <div>
        {tracks.map((track, key) =>
          <div className="track" key={key}>{track.title}</div>)}
      </div>
    </div>
  );
}

// Stream.propTypes = {
//   tracks: PropTypes.array,
// };

export default Stream;
