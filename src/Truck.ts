/**
 * Truck
 * By       Lily Liu
 * Version  1.0
 * Since    2022-10-31
 */

import Vehicle from './Vehicle'

class Truck extends Vehicle {
  private licensePlate: string
  private airPressure: number

  constructor(
    licensePlate: string,
    colour: string,
    maxSpeed: number,
    numTires: number,
    airPressure: number
  ) {
    super(colour, maxSpeed, numTires)
    this.licensePlate = licensePlate
    this.airPressure = airPressure
  }

  // getters and setters
  status(): void {
    console.log(
      `        --> Speed: ${super.getSpeed()}
        --> MaxSpeed: ${super.getMaxSpeed()}
        --> License Plate: ${this.licensePlate}
        --> Color: ${super.getColor()}
        --> Number of tires: ${super.getTires()}`
    )
  }

  getLicensePlate(): string {
    return this.licensePlate
  }

  setLicensePlate(newLicensePlate: string): void {
    this.licensePlate = newLicensePlate
  }

  getAirPressure(): number {
    return this.airPressure
  }

  setAirPressure(airPressure: number): void {
    this.airPressure = airPressure
  }

  // break method - break but with air pressure.
  break(breakPower: number, breakTime: number): void {
    super.setSpeed(
      super.getSpeed() - breakPower * breakTime - this.airPressure * breakTime
    )

    if (super.getSpeed() < 0) {
      super.setSpeed(0)
    }
  }
}

export = Truck
