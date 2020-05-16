import React from 'react';
import './episode-card.styles.css';

export const EpisodeCard = (props) => (
    
            <div className="card">
  <div className="card-header">
  <h3>{props.episode.name}</h3>
  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-1"><footer>
<p>Episode Code : {props.episode.episode}</p>
Air Date : {props.episode.air_date}</footer>
  </blockquote>
  </div>
</div>
           
      
    
     
            

    

)