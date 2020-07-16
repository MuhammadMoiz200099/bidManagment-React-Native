export type IRoles = 'ADMIN' | 'DEVELOPER' | 'USER';

export interface ILogin {
  username: string;
  password: string;
  role: IRoles;
}
