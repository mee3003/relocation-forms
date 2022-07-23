export interface Customer {
  firstName: string;
  lastName: string;
  salutation: string;
  company: string;
  telNumber: string;
  email: string;
  costsAssumption: boolean;
}

export interface Category {
  id: string;
  subtitle: string;
  name: string;
  sortorder: number;
}

export interface Item {
  categoryRefs: Category[];
  categories: string[];
  name: string;
  id: string;
  colli: number;
  volume: number;
  sortorder: number;
  step?: number;
}

export interface Order {
  customer: Customer;
  date: string;
  date_from: string;
  date_to: string;
  isDateFix: boolean;
  from: Address;
  to: Address;
  services: Service[];
  items: Item[];
  kleiderbox: number;
  boxNumber: number;
  text: string;
  creationTime: string;
  expensive: boolean;
  expensiveText: string;
  images: string[];
  volume: string;
  src: string;
}

export interface Service {
  id: string;
  name: string;
  tag: string;
  description: string;
  price: string;
  colli: string;
  imgUrl: string;
  show: boolean;
}

export interface Packing {
  id: string;
  name: string;
  description: string;
  price: string;
  colli: number;
  imgUrl: string;
}

export interface Address {
  floor: string;
  isAltbau: boolean;
  roomsNumber: string;
  parkingSlot: boolean;
  area: string;
  personsNumber?: string;
  liftType: string;
  runningDistance: string;
  address: string;
  movementObject?: string;
  hasLoft: boolean;
  packservice: boolean;
  demontage?: boolean;
  montage?: boolean;
  stockwerke?: string[];
  keller: boolean;
  garage: boolean;
}
