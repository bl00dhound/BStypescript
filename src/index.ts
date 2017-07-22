import Fighter from "./Fighter"
import ImprovedFighter from "./ImprovedFighter"

const fighter = new Fighter("Ordinary", 14, 8000)
const improvedFighter = new ImprovedFighter("Improved", 14, 6000)

function fight(first: Fighter, second: ImprovedFighter, ...point: number[]): void {
    let round: number = 0

    while (first.getHealth() > 0 && second.getHealth() > 0) {
        if (first.getHealth() > 0) {
            Fighter.hit(second, point[getRandomNumber(point.length)])
        }
        if (second.getHealth() > 0) {
            ImprovedFighter.doubleHit(first, point[getRandomNumber(point.length)])
        }
        round++
    }

    const winner: string = first.getHealth() > 0 ? first.getName() : second.getName()

    console.log(`${winner} has won in ${round}th round.`)
}

function getRandomNumber(max: number, min = 0): number {
    return Math.floor(Math.random() * (max - min)) + min
}

fight(fighter, improvedFighter, 4, 56, 23, 54, 8, 45)
