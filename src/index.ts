import Fighter from "./Fighter"
import IMatch from "./IMatch"
import ImprovedFighter from "./ImprovedFighter"

const fighter: Fighter = new Fighter("Ordinary", 14, 8000)
const improvedFighter: ImprovedFighter = new ImprovedFighter("Improved", 14, 6000)
const fightOptions: IMatch = {first: fighter, second: improvedFighter, points: [4, 56, 23, 54, 8, 45]}

function fight(match: IMatch) {
    let round: number = 0

    while (match.first.getHealth() > 0 && match.second.getHealth() > 0) {
        if (match.first.getHealth() > 0) {
            Fighter.hit(match.second, match.points[getRandomNumber(match.points.length)])
        }
        if (match.second.getHealth() > 0) {
            ImprovedFighter.doubleHit(match.first, match.points[getRandomNumber(match.points.length)])
        }
        round++
    }

    const winner: string = match.first.getHealth() > 0 ? match.first.getName() : match.second.getName()

    console.log(`${winner} has won in ${round}th round.`)
}

function getRandomNumber(max: number, min = 0): number {
    return Math.floor(Math.random() * (max - min)) + min
}

fight(fightOptions)
