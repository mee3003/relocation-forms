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
  slug: string;
  name: string;
}

export interface Option {
  key: string;
  value: string;
}

export interface Item {
  categoryRefs: Category[];
  categories: string[];
  name: string;
  id: string;
  colli: number;
  volume: number;
  demontage?: boolean;
  notDismountable?: boolean;
  bulky?: boolean;
  montage?: boolean;
  m100?: boolean;
  m150?: boolean;
  extraPrice?: string;
  montagePrice: string;
  sortOrder: number;
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
  boxNumber: number;
  text: string;
  usmFlag: boolean;
  usmText: string;
  disposalFlag: boolean;
  disposalText: string;
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
