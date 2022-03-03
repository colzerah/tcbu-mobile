export interface IUser {
  users: Users[];
  usersAmount: number;
}

export interface Users {
  id: string;
  code: string;
  name: string;
  birthDate: Date;
  photo?: string;
}
