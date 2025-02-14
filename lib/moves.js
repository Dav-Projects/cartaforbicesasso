import rock from "@/assets/rock.png"
import paper from "@/assets/paper.png"
import scissors from "@/assets/scissors.png"

export const moves = {
    rock: {
        beat: ['scissors'],
        image: rock
    },
    scissors: {
        beat: ['paper'],
        image: scissors
    },
    paper: {
        beat: ['rock'],
        image: paper
    }
}


// per estendere il gioco alla variante rock-paper-scissors-spock-lizar e' sufficente:
// - aggiungere le due mosse con le relative immagini
// - modificare le combinazioni di vittoria per ogni mossa
/*
import spock from "@/assets/spock.png"
import lizard from "@/assets/lizard.png"
export moves = {
    rock: {
        beat: ['scissors', 'lizard'],
        image: rock
    },
    scissors: {
        beat: ['paper', 'lizard'],
        image: scissors
    },
    paper: {
        beat: ['rock', 'spock'],
        image: paper
    },
    spock: {
        beat: ['rock', 'scissors'],
        image: spock
    },
    lizard: {
        beat: ['spock', 'paper'],
        image: lizard
    },
}
*/