import { createContext } from "react"
import { type User } from "../data/user-mock.data"

export type AuthStatus = "checking" | "authenticated" | "not-authenticated"

interface UserContextProps {
  authStatus: AuthStatus
  user: User | null
  isAuthenticated: boolean
  login: (userId: number) => boolean
  logout: () => void
}

export const UserContext = createContext({} as UserContextProps)
