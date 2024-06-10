import React from 'react'
import { useParams } from 'react-router-dom'
import { Games } from '../GamesData';

const GameInfo = () => {
    const { gameTitle } = useParams();
    const game = Games.find((game) => game.title === gameTitle);

    return (
        <div className="min-h-screen pt-36 text-white flex items-center">
            <img src={game.img} alt={game.title} className=''/>
            <div>
                <h1>{game.title}</h1>
                <p>{game.description}</p>
            </div>
        </div>
    )
}

export default GameInfo