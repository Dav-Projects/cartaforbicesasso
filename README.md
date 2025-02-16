# Gioco Carta-Forbice-Sasso

Un semplice gioco di carta-forbice-sasso realizzato con Next.js che supporta due modalità di gioco:
1. Giocatore vs Computer
2. Computer vs Computer

## Caratteristiche
- Due diverse modalità di gioco
- Design responsive

## Tecnologie Utilizzate
- Next.js
- React
- Tailwind CSS

## Come Iniziare

### Prerequisiti
- Node.js (v16 o superiore)
- npm o yarn

### Installazione

1. Clona il repository:
   ```bash
   git clone https://github.com/your-username/cartaforbicesasso.git
   ```

2. Accedi alla directory del progetto:
   ```bash
   cd cartaforbicesasso
   ```

3. Installa le dipendenze:
   ```bash
   npm install
   # oppure
   yarn install
   ```

### Avvio dell'Applicazione

1. Avvia il server di sviluppo:
   ```bash
   npm run dev
   # oppure
   yarn dev
   ```

2. Apri il browser e visita:
   ```bash
   http://localhost:3000
   ```

3. Scegli la modalità di gioco e inizia a giocare!


### Varianti
È possibile estendere il gioco alla variante rock-paper-scissors-spock-lizar semplicemente:

1. Aggiungendo le due mosse con le relative immagini
2. Modificando le combinazioni di vittoria per ogni mossa

Nuovo file lib/moves.js
```
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
```
