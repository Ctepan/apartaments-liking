interface IAddress {
  city: string
  street: string
  house: string
  room: string
}

interface IPerson {
  type: string
  id: number
  attributes: {
    first_name: string
    last_name: string
    middle_name: string
  }
}

export interface IApartment {
  type: string
  id: number
  attributes: {
    title: string
    rooms: number
    address: IAddress
    area: number
    unit: string
  }
  relationships: IPerson
}
