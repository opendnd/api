// types of weapons
export enum WeaponTypes {
  Simple,
  Martial,
}

// types of armors
export enum ArmorTypes {
  Light,
  Medium,
  Heavy,
  Shield,
}

export interface LinkItem {
  // uuid for this item
  uuid: string
}

export interface Item {
  // uuid for this item
  uuid: string
  
  // name of the item
  name: string
}
