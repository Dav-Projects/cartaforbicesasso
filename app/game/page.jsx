"use client"

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { moves } from "@/lib/moves";
import MoveButton from "@/components/moveButton";

export default function Game() {

    const searchParams = useSearchParams()
    const type = searchParams.get('type')

    const [match, setMatch] = useState()

    const handleMovePlayer = (move) => {

        const player2Move = Object.keys(moves)[Math.floor(Math.random() * Object.keys(moves).length)]

        if(move == player2Move){
            setMatch({player1: move, player2: player2Move, result: "PAREGGIO"})
        } else if(moves[move].beat.includes(player2Move)){
            setMatch({player1: move, player2: player2Move, result: "HAI VINTO"})
        } else {
            setMatch({player1: move, player2: player2Move, result: "HAI PERSO"})
        }
    }
    
    const handleMovePC = () => {

        const player1Move = Object.keys(moves)[Math.floor(Math.random() * Object.keys(moves).length)]
        const player2Move = Object.keys(moves)[Math.floor(Math.random() * Object.keys(moves).length)]

        if(player1Move == player2Move){
            setMatch({player1: player1Move, player2: player2Move, result: "PAREGGIO"})
        } else if(moves[player1Move].beat.includes(player2Move)){
            setMatch({player1: player1Move, player2: player2Move, result: "HA VINTO PC 1"})
        } else {
            setMatch({player1: player1Move, player2: player2Move, result: "HA VINTO PC 2"})
        }
    }

    return(
        <div className="container p-3 mx-auto h-screen flex flex-col items-center justify-center gap-2">
            <h1 className="title">Benvenuto in carta-forbice-sasso</h1>
            <Link href={'/'} className="button bg-blue-500 text-white">Cambia modalit&agrave;</Link>
            {match && <>
                <div className="w-full flex flex-row justify-center items-center gap-4 mt-6">
                    <div className="text-center">
                        <span className="text-center font-semibold text-xl">Risultato {type == 'pchuman' ? 'giocatore' : 'PC 1'}</span><br />
                        <Image src={moves[match.player1].image} alt={match.player1} className="max-size-60 w-full" />
                    </div>
                    <div className="text-center">
                        <span className="text-center font-semibold text-xl">Risultato {type == 'pchuman' ? 'PC' : 'PC 2'}</span><br />
                        <Image src={moves[match.player2].image} alt={match.player1} className="max-size-60 w-full" />
                    </div>
                </div>
                <div>
                    <span className="font-bold text-6xl">{match.result}</span>
                </div>
            </>
            }
            {!match ?
                type == 'pchuman' ? 
                    <>
                        <p className="subtitle">Fai la tua mossa</p>
                        <div className="w-full flex flex-row justify-center items-center gap-4">
                            {Object.keys(moves).map((move) => {
                                return <MoveButton key={move} move={move} onClick={() => handleMovePlayer(move)} image={moves[move].image} />
                            })}
                        </div>
                    </>
                :
                    <div className="w-full flex flex-row justify-center">
                        <div onClick={() => {handleMovePC()}} className="button bg-green-500 text-lg">Avvia</div>
                    </div>
            : 
                <div className="w-full flex flex-row justify-center">
                    <div onClick={() => {type == 'pchuman' ? setMatch() : handleMovePC()}} className="button bg-green-500 text-lg">Rigioca</div>
                </div>
            }
        </div>
    );
}