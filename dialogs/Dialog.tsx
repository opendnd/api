export interface LinkDialog {
  // uuid for this object
  uuid: string
}

// a response is for the non-playable character to respond to something (or start talking)
export interface Response {
  // the spoken text to the player
  text: string

  // the prompts index available for this response
  prompts: string

  // a list of trigger events for this response
  triggers: string[]

  // information for voice over, emotion, ambience, etc.
  VO: string
  emotion: string
  ambience: string
}

// prompts are used to prompt the user with choices to interact with the character
export interface Prompts {
  choices: Choice[]
}
export interface Choice {
  // the text displayed to the player
  text: string

  // the next response index for this choice
  response: string

  // a requirement is which technical requirement the player must have to use this choice
  requirement: {}

  // a list of trigger events for this response
  triggers: string[]

  // information for voice over, emotion, ambience, etc.
  VO: string
  emotion: string
  ambience: string
}

export interface Dialog {
  // uuid for this object
  uuid: string

  // current prompts for the player to choose
  currentPrompts: string

  // current response from the character
  currentResponse: string

  // a list of responses
  responses: Response[]

  // a list of prompts
  prompts: Prompts[]
}
