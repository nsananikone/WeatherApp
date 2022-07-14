/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from "react";
import axios from "axios";


const Pokemon = () => {
    const [poke, getPoke] = useState([]);
    const [pokeName, setPokeName] = useState("");


    const searchPoke = (e) => {
        if (e.key === "Enter") {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
                .then(res => {
                    getPoke(res.data);
                    setPokeName("");
                }
                )
        }
    }
    
    return (
        <div className="app">
            <div className="search">
                <input
                    type="text"
                    value={pokeName}
                    onChange={(event) => setPokeName(event.target.value)}
                    onKeyPress={searchPoke}
                    placeholder="Enter Pokemon"
                ></input>
            </div>
            <div className="container">
                <div className="top">
                    <div className="location">
                        <p>{poke.name}</p>
                    </div>
                    <div className="temp">
                        {poke.sprites ? <img src={poke.sprites.front_default} /> : null}
                    </div>
                    <div className="description">
                        {poke.types ? <p>{poke.types[0].type.name}</p> : null}
                    </div>
                </div>
                {poke.name !== undefined && (
                    <div className="bottom">
                        <div className="feels">
                            {poke.weight ? (
                                <p className="bold">{poke.weight}</p>
                            ) : null}
                            <p>Weight</p>
                        </div>
                        <div className="humidity">
                            {poke.height ? (
                                <p className="bold">{poke.height}</p>
                            ) : null}
                            <p>Height</p>
                        </div>
                        <div className="wind">
                            {poke.abilities ? (
                                <p className="bold">{poke.abilities[0].ability.name}</p>
                            ) : null}
                            <p>Abilities</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
export default Pokemon;