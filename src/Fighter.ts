export default class Fighter {

    public static hit(enemy: Fighter, point: number): void {
        const damage: number = point * enemy.power
        enemy.setDamage(damage)
    }

    private name: string
    private power: number
    private health: number

    constructor(name: string, power: number, health: number) {
        this.name = name
        this.power = power
        this.health = health
    }

    public getName() {
        return this.name
    }

    public getHealth() {
        return this.health
    }

    public setDamage(damage: number): void {
        this.health -= damage
        console.log(`${this.name} health: ${this.health}`)
    }

}
