import { useEffect, useState } from "react";
import Pokemon from "../Pokemon/Pokemon";
const ItemListContainer = () => {
    const [ pokemonList, setPokemonList ] = useState ([]);
    const getPokemons = fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=12&offset=0",
        {
            method: "GET",
        }
    );
    useEffect(() => { getPokemons
        .then(resp => resp.json())
        .then(async(data) => {
            setPokemonList(data.results);
            const lista=  Promise.all(data.results.map((pokemonItem)=>{
                return fetch (pokemonItem.url)
                .then((response)=>response.json())
                .then ((detail)=>{
                    console.log(detail)
                    const newObject = {
                        name:detail.name,
                        frontImg: detail.sprites.front_default,
                        weight:detail.weight
                    };
                    setPokemonList ([...pokemonList, detail.name, detail.sprites.front_default]);
                  
                })
                .catch(error=>console.log(error))
            }))

            return (
                <div>
                    {pokemonList.map((pokemon)=>{
                        return (<Pokemon />)
                    })}
                </div>
            );
         })

    
        .catch((error) => console.log(error));
    }
    )
  

     return (
    <div>
        {pokemonList.map ((pokemon)=> (<Pokemon key={pokemon.name} pokemonItem = {pokemon}/>
        ))} 
    </div>
    );}


    export default ItemListContainer;