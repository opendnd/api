import { Dice, AbilityTypes } from '../core/Core'
import { Trait } from '../dna/DNA'

export enum ConditionTypes {
  Acute,
  Chronic,
}

export enum AgentTypes {
  Bacterium,
  Virus,
  Fungus,
  Protist,
}

export enum TransmissionTypes {
  Air,
  Vector,
  Animal,
  Food,
  Environmental,
}

export enum DiseaseTypes {
  Infectious,
  Autoimmune,
  Congenital,
  Dietary,
  Cognitive,
}

export interface LinkDisease {
  // uuid for this object
  uuid: string
}

export interface Disease {
  // uuid for this object
  uuid: string

  // name for the disease
  name: string

  // is it an abstract concept like a template for a disease?
  abstract: boolean
  abstractProperties: object

  // derived source or template this vehicle was based on
  derivation: LinkDisease

  // condition, agent, transmission, disease
  type: DiseaseTypes
  condition: ConditionTypes
  agent: AgentTypes
  transmission: TransmissionTypes

  // incubation period with a base number in hours with an optional modifier in dice
  incubation: number
  incuationDice: Dice

  // what level of exhaustion does this cause?
  exhaustion: number

  // what is the genetic immunity
  immunity: Trait

  // effects
  savingThrow: AbilityTypes
  damage: Dice[]

  // notes on the disease
  notes: string

  // additional properties on the disease
  properties: object
}
