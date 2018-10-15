import { DNA } from '../dna/DNA'
import { LinkItem, WeaponTypes, ArmorTypes } from '../items/Item'
import { LinkBackground } from '../backgrounds/Background'
import { LinkBuilding } from '../buildings/Building'
import { LinkCampaign } from '../campaigns/Campaign'
import { LinkKlass } from '../klasses/Klass'
import { LinkDomain } from '../domains/Domain'
import { LinkDialog } from '../dialogs/Dialog'
import { LinkDisease } from '../diseases/Disease'
import { LinkCulture } from '../cultures/Culture'
import { LinkSpell } from '../spells/Spell'
import { LinkDate } from '../calendars/Calendar'
import { LinkFaction } from '../factions/Faction'
import { LinkDynasty } from '../dynasties/Dynasty'
import { LinkReligion } from '../religions/Religion'
import { LinkLanguage } from '../languages/Language'
import { LinkFeature } from '../features/Feature'
import { LinkFamiliar } from '../familiars/Familiar'
import { LinkTool } from '../tools/Tool'
import { LinkQuest } from '../quests/Quest'
import { LinkTitle } from '../titles/Title'
import { LinkStory } from '../stories/Story'
import { Dice, DamageTypes, Abilities, Skills } from '../core/Core'

// the types of persons
export enum PersonTypes {
  Playable,
  NonPlayable,
}

// age groups
export enum AgeGroups {
  Young,
  Middle,
  Old,
}

// list of alignments
// x: Lawful, Neutral, Chaotic
// y: Good, Neutral, Evil
export enum Alignments {
  LG, NG, CG,
  LN, NN, CN,
  LE, NE, CE,
}

// list of expanded alignments
// x: Lawful, Social, Neutral, Rebel, Chaotic
// y: Good, Moral, Neutral, Impure, Evil
export enum ExpandedAlignments {
  LG, SG, NG, RG, CG,
  LM, SM, NM, RM, CM,
  LN, SN, NN, RN, CN,
  LI, SI, NI, RI, CI,
  LE, SE, NE, RE, CE,
}

// a link to a person
export interface LinkPerson {
  // uuid for this object
  uuid: string

  // name of the player and the character
  name: string
}

// A Person are the playable and non-playable characters that make up the world
export interface Person {
  // version number from personae
  version: string

  // uuid for this object
  uuid: string

  // type for this person
  type: PersonTypes

  // the following numbers should correspond to each other based on the XP chart
  level: number
  XP: number

  // name of the player and the character
  playerName: string
  name: string

  // age number and which age group this person belongs to (based on racial lifespans)
  age: number
  ageGroup: AgeGroups

  // power, honor and piety are similar in that they each determine your influence/respect with different groups
  power: number
  honor: number
  piety: number

  // treasury is made up of values for copper, silver, electrum, gold and platinum pieces (coins)
  // how much each coin is worth varies from towns, settings and campaigns
  // however, the chart below can be helpful as a base when determining your economy
  treasury: {
    cp: number // 1/100 | USD $1.00
    sp: number // 1/10  | USD $10.00
    ep: number // 1/2   | USD $50.00
    gp: number // 1     | USD $100.00
    pp: number // 10    | USD $1,000.00
  }

  // ability scores
  abilities: {
    STR: number // Strength, measuring physical power
    DEX: number // Dexterity, measuring agility
    CON: number // Constitution, measuring endurance
    INT: number // Intelligence, measuring reasoning and memory
    WIS: number // Wisdom, measuring Perception and Insight
    CHA: number // Charisma, measuring force of personality
  }

  // list of proficiencies
  proficiencies: {
    // a list of skills with proficiency
    skills: Skills[]

    // a list of languages with proficiency
    languages: LinkLanguage[]

    // a list of armors with proficiency
    armors: ArmorTypes[]

    // a list of weapons with proficiency
    weapons: WeaponTypes[]

    // a list of tools with proficiency
    tools: LinkTool[]

    // proficiency bonus modifier based on your level
    bonus: number // 1-4: +2 // 5-8 +3 // 9-12: +4 // 13-16: +5 // 17-20 +6
  }

  // derived stats
  initiative: number // derived from DEX modifier
  speed: number 
  AC: number // derived from equipment and sometimes DEX modifier

  // hit dice information
  hitDice: Dice[]
  maxHP: number
  HP: number

  // the following deals with health conditions
  conditions: LinkDisease[]
  exhaustion: number // level 1-6
  resistance: DamageTypes
  vulnerability: DamageTypes

  // alignment for the character
  alignment: Alignments

  // the character k(c)lass from the list of available
  klass: LinkKlass

  // spellcasting information
  spellcasting: {
    // spell casting ability
    ability: Abilities
    
    // spell save DC
    saveDC: number
    
    // spell attack modifier
    attackModifier: number
    
    // list of known spells
    spells: LinkSpell[]
  }

  // cultural information
  culture: LinkCulture
  faith: LinkReligion

  // family and relationship information
  mother: LinkPerson
  father: LinkPerson
  siblings: LinkPerson[]
  spouse: LinkPerson
  children: LinkPerson[]
  family: LinkDynasty
  liege: LinkPerson

  // allies & organization information
  allies: LinkPerson[]
  enemies: LinkPerson[]
  factions: {
    memberOf: LinkFaction[]
    allies: LinkFaction[]
    enemies: LinkFaction[]
  }

  // birth information
  birth: {
    // location of birth
    domain: LinkDomain

    // date of birth
    date: LinkDate

    // birth order
    rank: number
  }

  // death information
  death: {
    // locatin of death
    domain: LinkDomain

    // date of death
    date: LinkDate
  }

  // features and actions
  features: LinkFeature[]
  actions: string[]

  // a list of items
  items: LinkItem[]
  magicItems: LinkItem[]

  // additional owernship
  chattel: LinkPerson[]
  domains: LinkDomain[]
  buildings: LinkBuilding[]
  titles: LinkTitle[]

  // a list of familiars
  familiars: LinkFamiliar[]

  // weight from items (encumberance)
  // not to be confused with character weight found in DNA
  weight: number

  // equipment is what is currently equipped to the person
  // each below is a reference to a uuid in items or a physical description
  equipment: {
    // head armor
    head: LinkItem

    // left brow, ex: makeup
    leftBrow: LinkItem

    // left eye, ex: monocle
    leftEye: LinkItem

    // left ear, ex: jewelry
    leftEar: LinkItem

    // right brow, ex: makeup
    rightBrow: LinkItem

    // right eye, ex: monocle
    rightEye: LinkItem

    // right ear, ex: jewelry
    rightEar: LinkItem

    // both eyes, ex: glasses
    eyes: LinkItem

    // nose, ex: jewelry
    nose: LinkItem

    // mouth, ex: makeup
    mouth: LinkItem

    // chin, ex: jewelry
    chin: LinkItem

    // neck, ex: jewelry
    neck: LinkItem

    // left shoulder
    leftShoulder: LinkItem

    // left shoulder
    leftBreast: LinkItem

    // left arm
    leftArm: LinkItem

    // left wrist
    leftWrist: LinkItem

    // left hand, ex: glove
    leftHand: LinkItem

    // left fingers, ex: ring
    leftFingers: LinkItem

    // left grip: ex: shield
    leftGrip: LinkItem
    
    // right shoulder
    rightShoulder: LinkItem

    // right shoulder
    rightBreast: LinkItem

    // right arm
    rightArm: LinkItem

    // right wrist
    rightWrist: LinkItem

    // right hand, ex: glove
    rightHand: LinkItem

    // right fingers, ex: ring
    rightFingers: LinkItem

    // right grip: ex: sword
    rightGrip: LinkItem

    // torso, ex: armor
    torso: LinkItem

    // back, ex: cape
    back: LinkItem

    // abdomen, ex: cloth
    abdomen: LinkItem

    // waist, ex: belt
    waist: LinkItem

    // groin, ex: armor
    groin: LinkItem

    // rear, ex: cloth
    rear: LinkItem

    // left thigh
    leftThigh: LinkItem

    // left leg
    leftLeg: LinkItem

    // left knee
    leftKnee: LinkItem

    // left shin
    leftShin: LinkItem

    // left ankle
    leftAnkle: LinkItem

    // left foot
    leftFoot: LinkItem

    // left toes
    leftToes: LinkItem

    // right thigh
    rightThigh: LinkItem

    // right leg
    rightLeg: LinkItem

    // right knee
    rightKnee: LinkItem

    // right shin
    rightShin: LinkItem

    // right ankle
    rightAnkle: LinkItem

    // right foot
    rightFoot: LinkItem

    // right toes
    rightToes: LinkItem

    // mount
    mount: LinkFamiliar
  }

  // data for the DNA of the person
  DNA: DNA

  // a one word description of this character's personality
  trait: string

  // a one word description of this person's physical characteristic
  characteristic: string

  // the character's mannerism in voice or behavior
  mannerism: string

  // the character's special talent
  talent: string

  // a detailed list of personality traits
  personalityTraits: string[]

  // the character's ideal
  ideal: string

  // the character's bond
  bond: string

  // the character's flaw
  flaw: string

  // the background for the character and that background's specialty
  background: LinkBackground
  specialty: string

  // additional information about this character's backstory
  backstory: string

  // campaign information
  campaigns: LinkCampaign[]
  activeCampaign: LinkCampaign
  quests: LinkQuest[]
  stories: LinkStory[]
  dialogs: LinkDialog[]

  // specific notes for this person like campaign notes
  notes: string
}
