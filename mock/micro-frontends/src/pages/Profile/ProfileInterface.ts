export interface IFormikVariable {
  value: string;
  label: string;
}

export interface IProfileInfoProps {
  age: number;
  sex: string;
  racial: string[];
  email: string;
  phone: string;
  address1: string;
  bedShared: string[];
  hand: string;
  fitbit: string;
}

export interface IFormik {
  name: string;
  age: number;
  sex: string;
  racial: string[];
  email: string;
  phone: string;
  address1: string;
  address2: string | "";
  city: string;
  state: string;
  zip: string;
  bedShared: string[];
  hand: string;
  fitbit: string;
}
