import React, { useState, useEffect } from 'react';

 const Cards = () => {
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
           .then((response) => response.json())
           .then((data) => {
              console.log(data);
              setCard([data]);
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);
    return(
         <div>
             {card.map((e) => {
                
         return (
            <div className="post-card" key={e.id}>
               <h2 className="post-title">{e.name}</h2>
                <img src={e.url} alt='Pokemon'/>
               <div className="button">
               <div className="button">
                  <div className="delete-btn">
                     Delete
                  </div>
                  </div>
               </div>
            </div>
         );
      })}

      </div>
    )
 }

 export default Cards;