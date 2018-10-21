// the modes of transporation
export enum TransporationModes {
  Land,
  Air,
  Water,
}

export interface Vehicle {
  // uuid for this object
  uuid: string

  // name for the vehicle
  name: string

  // mode of transport
  mode: TransporationModes

  // is it an abstract concept like a template for a vehicle?
  abstract: boolean

  // a generic multiplier
  multiplier: number

  // properties can vary differently based on the type
  properties: object
}
