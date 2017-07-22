import Fighter from "./Fighter"

export default class ImprovedFighter extends Fighter {

    public static doubleHit(enemy: Fighter, point: number) {
        super.hit(enemy, point * 2)
    }

    constructor(name: string, power: number, health: number) {
        super(name, power, health)
    }

}
