// types of dice
export enum Dice {
  d4,
  d6,
  d8,
  d10,
  d12,
  d20,
  d100,
}

// list of damage types
export enum DamageTypes {
  Acid,
  Bludgeoning,
  Cold,
  Fire,
  Force,
  Lightning,
  Necrotic,
  Piercing,
  Poison,
  Psychic,
  Radiant,
  Slashing,
  Thunder,
}

// list of abilities
export enum Abilities {
  Strength, // measuring physical power
  Dexterity, // measuring agility
  Constitution, // measuring endurance
  Intelligence, // measuring reasoning and memory
  Wisdom, // measuring Perception and Insight
  Charisma, // measuring force of personality
}

// list of skills
export enum Skills {
  // STR
  Athletics,
  
  // DEX
  Acrobatics,
  SleightOfHand,
  Stealth,

  // INT
  Arcana,
  History,
  Investigation,
  Nature,
  Religion,

  // WIS
  AnimalHandling,
  Insight,
  Medicine,
  Perception,
  Survival,

  // CHA
  Deception,
  Intimidation,
  Performance,
  Persuasion,
}
