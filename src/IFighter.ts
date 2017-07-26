interface IFighter {

    name: string
    power: number
    health: number

    getName(): string
    getHealth(): number
    setDamage(damage: number): void

}

export default IFighter
