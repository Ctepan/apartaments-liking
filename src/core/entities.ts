export interface IApartment {
  type: string
  id: number
  attributes: {
    title: string
    rooms: number
    address: {
      city: string
      street: string
      house: string
      room: string
    },
    area: number
    unit: string
  },
  relationships: {
    type: string
    id: number
    attributes: {
      first_name: string
      last_name: string
      middle_name: string
    }
  }
}
