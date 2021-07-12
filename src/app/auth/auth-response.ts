import { User } from "../users/user";

export interface AuthResponse{
    jwt:string,
    user:User
}