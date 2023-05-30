import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import PokemonCard from '../components/PokemanCard'
import { Container, Grid } from '@mui/material'
import axios from "axios";

export default function Home() {

    const [pokemons, setPokemons] = useState([]);

    //mostrar os pokeons só depois do array estar pronto
    useEffect(()=>{
        getPokemons();
    }, []);

    //pegando os pokemons na api
    const getPokemons = ()=>{
        var endpoints = []
        for(var i=1;i<50;i++){
          endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
         axios.all(endpoints.map((endpoint) => 
         axios.get(endpoint)))
        .then((res)=>setPokemons(res));
    }

    //filtrando a pesquisa
    const pokemonFilter = (name)=>{
        var filteredPokemons = [];
        if(name===''){
            getPokemons();
        }
        for (var i in pokemons){
            if(pokemons[i].data.name.includes(name)){
                filteredPokemons.push(pokemons[i]);
            }
        }
 
        setPokemons(filteredPokemons);
    };

  return (
    <div>
        <NavBar pokemonFilter={pokemonFilter}/>
        <Container maxWidth="false">
            <Grid container spacing={3}>
                {pokemons.map((pokemon, key)=>(
                    <Grid item xs={12} sm={6} md={2} key={key}>
                        <PokemonCard name={pokemon.data.name} 
                        image={pokemon.data.sprites.front_default}
                        types={pokemon.data.types}/>
                    </Grid>
                ))}
            </Grid>    
        </Container>
    </div>
  )
}
