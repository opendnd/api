export interface LinkDate {
  // uuid for this object
  uuid: string

  // text output for the date
  text: string
}

export interface Date {
  // uuid for this object
  uuid: string

  // a reference to the calendar being used for this date
  calendar: LinkCalendar

  // a numerical representation of the value (seconds from epoch)
  value: number

  epoch: number // era
  solar: number // year
  lunar: number // month
  planetary: number // day
  hora: number // hour
  prima: number // minute
  secunda: number // second
}

export interface LinkCalendar {
  // uuid for this object
  uuid: string
}

export interface Calendar {
  // uuid for this object
  uuid: string
}
