import React from 'react';
import { EpisodeCard } from '../episode-card/episode-card.component'
import './episode-list.styles.css';

export const CardList = (props) => (

  <div className="abc">
       {
         props.episodes.map(items=>(
         <EpisodeCard  key={items.id} episode={items}></EpisodeCard >
         ))         
       } 
    </div>
 
 
)
