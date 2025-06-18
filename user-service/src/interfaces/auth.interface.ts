export interface IAuthService {
  signup(email: string, password: string, name: string): Promise<any>;
  login(email: string, password: string): Promise<any>;
}
