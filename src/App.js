import React, { useState, useEffect } from 'react';

const App = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loadmore, setLoadmore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

    const getpokemons = async () => {
        const res = await fetch(loadmore)
        const data = await res.json()
        console.log(data)
        setLoadmore(data.next)

        function createPokemonobject(result) {
            result.forEach( async (e) =>  {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${e.name}`)
                const data = await res.json()

                setPokemons(currentList => [...currentList, data])
            })

        }

        createPokemonobject(data.results)
      
    }

    useEffect(() => {
        getpokemons()
    }, []);

    useEffect(() => {
        console.log(pokemons);
      }, [pokemons]);

 return (
  <div className='app-container'>
    <h1>Pokemon Collection!</h1>
    <div className='pokeman-container'>
        <div className='all-container'>

            </div>
        <button className='load-more'>Load more</button>
    </div>

  </div>
 );
};
export default App;
