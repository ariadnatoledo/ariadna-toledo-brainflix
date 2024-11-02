import React from 'react';
import { Link } from 'react-router-dom';
import "../NextVideoList/NextVideoList.scss";

function NextVideosList({ list }) {
  return (
    <div>
      <h2>NEXT VIDEOS</h2>
      <div className="videolist">
        {list.map((video) => (
          <Link to={`/videos/${video.id}`} key={video.id} className="videolist__item-link">
            <div className="videolist__item">
              <img 
                src={video.image} 
                alt={video.title} 
                className="videolist__image" 
              />
              <div className="videolist__details">
                <h3 className="videolist__title">{video.title}</h3>
                <p className="videolist__channel">{video.channel}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NextVideosList;