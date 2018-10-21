import { Dice, ExpandedAlignments, AdvantageTypes, DamageTypes } from '../core/Core'
import { LinkDialog } from '../dialogs/Dialog'

// types and properties of weapons
export enum WeaponTypes {
  Simple,
  Martial,
}
export enum WeaponProperties {
  Ammunition,
  Finesse,
  Heavy,
  Light,
  Loading,
  Range,
  Reach,
  Special,
  Thrown,
  TwoHanded,
  Versatile,
}

// weapon range
export interface WeaponRange {
  normal: number
  long: number
}

// types of armors
export enum ArmorTypes {
  Light,
  Medium,
  Heavy,
  Shield,
}

// types of items
export enum ItemTypes {
  Weapon,
  Armor,
  Tool,
  Container,
  Consumable,
  Interactable,
  Magic,
}

// types of rarity
export enum RarityTypes {
  Common,
  Uncommon,
  Rare,
  VeryRare,
  Legendary,
  Artifact,
}

// locations of equipment
export enum EquipmentLocations {
  Head,
  LeftBrow,
  LeftEye,
  LeftEar,
  RightBrow,
  RightEye,
  RightEar,
  Eyes,
  Nose,
  Mouth,
  Chin,
  Neck,
  LeftShoulder,
  LeftBreast,
  LeftArm,
  LeftWrist,
  LeftHand,
  LeftFingers,
  LeftGrip,  
  RightShoulder,
  RightBreast,
  RightArm,
  RightWrist,
  RightHand,
  RightFingers,
  RightGrip,
  Torso,
  Back,
  Abdomen,
  Waist,
  Groin,
  Rear,
  LeftThigh,
  LeftLeg,
  LeftKnee,
  LeftShin,
  LeftAnkle,
  LeftFoot,
  LeftToes,
  RightThigh,
  RightLeg,
  RightKnee,
  RightShin,
  RightAnkle,
  RightFoot,
  RightToes,
}

export interface LinkItem {
  // uuid for this item
  uuid: string

  // name of the item
  name: string

  // personalized nickname of the item
  nickcname: string
}

export interface Item {
  // uuid for this item
  uuid: string
  
  // name of the item
  name: string

  // personalized nickname of the item
  nickcname: string

  // attributes of the item
  type: ItemTypes
  weaponProperties: WeaponProperties[]
  range?: WeaponRange
  ammunition: number
  ammunitionItem: LinkItem
  attributeDice: Dice // usually used with versatile

  // damage value for the item is based on the amount of dice and the dice type
  damageDice: Dice[]
  damageType: DamageTypes

  // is this an abstract concept of an item like a template?
  abstract: boolean
  abstractProperties: object

  // derived source or template this person was based on
  derivation: LinkItem

  // base cost in cp of the item
  cost: number

  // a list of items for containers
  items: LinkItem[]
  magicItems: LinkItem[]

  // weight of the item
  weight: number

  // stealth advantage/disadvantage
  stealth: AdvantageTypes

  // rarity of the item
  rarity: RarityTypes

  // AC for the item
  AC: number

  // a list of locations this item can be equipped
  equippable: EquipmentLocations[]

  // if the item is sentient or not
  sentient: boolean

  // ability scores
  abilities: {
    STR?: number // Strength, measuring physical power
    DEX?: number // Dexterity, measuring agility
    CON?: number // Constitution, measuring endurance
    INT?: number // Intelligence, measuring reasoning and memory
    WIS?: number // Wisdom, measuring Perception and Insight
    CHA?: number // Charisma, measuring force of personality
  }

  // hit dice information
  hitDice: Dice[]
  maxHP: number
  tempHP: number
  HP: number

  // alignment for the sentient item
  alignment: ExpandedAlignments

  // purpose and conflict for the sentient item
  purpose: string
  conflict: string

  // a trigger value for interaction
  trigger: string

  // for interacting with the item
  dialogs: LinkDialog[]
  currentDialog: number

  // special notes for the item
  notes: string

  // additional properties on the item
  properties: object
}
