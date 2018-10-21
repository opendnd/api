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
export enum AbilityTypes {
  Strength, // measuring physical power
  Dexterity, // measuring agility
  Constitution, // measuring endurance
  Intelligence, // measuring reasoning and memory
  Wisdom, // measuring Perception and Insight
  Charisma, // measuring force of personality
}

// list of skills
export enum SkillTypes {
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

// output the advantage types
export enum AdvantageTypes {
  Advantage,
  Neutral,
  Disadvantage,
}
