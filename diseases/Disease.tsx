import { Dice, AbilityTypes, DamageTypes } from '../core/Core'
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

  // incubation period with a base number in seconds with an optional modifier in dice
  incubationTime: number
  incuationDice: Dice

  // what level of exhaustion does this cause?
  exhaustion: number

  // what resistance and vulnerability is there
  resistance: DamageTypes
  vulnerability: DamageTypes

  // what is the genetic immunity
  immunity: Trait

  // effects
  savingThrow: AbilityTypes
  damage: Dice[]

  // a trigger value for the disease and time in seconds
  trigger: string
  triggerTime: number

  // notes on the disease
  notes: string

  // additional properties on the disease
  properties: object
}
