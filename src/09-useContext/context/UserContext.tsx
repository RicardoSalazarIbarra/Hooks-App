import { type PropsWithChildren, useState } from "react"
import { users, type User } from "../data/user-mock.data";
import { UserContext, type AuthStatus } from "./user.context";

const getStoredUser = (): User | null => {
  const storedUserId = localStorage.getItem('userId')
  if (!storedUserId) return null

  const user = users.find(user => user.id === +storedUserId) ?? null

  if (!user) {
    localStorage.removeItem('userId')
  }

  return user
}

// HOC
export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(getStoredUser)
  const [authStatus, setAuthStatus] = useState<AuthStatus>(
    () => user ? 'authenticated' : 'not-authenticated'
  )

  const handleLogin = (userId: number) => {
    const user = users.find(user => user.id === userId);
    if (!user) {
      console.log(`User not found ${userId}`);
      setUser(null)
      setAuthStatus('not-authenticated')
      return false;
    }

    setUser(user)
    setAuthStatus('authenticated')
    localStorage.setItem('userId', userId.toString())
    return true
  }

  const handleLogout = () => {
    console.log('Logout');
    setAuthStatus('not-authenticated')
    setUser(null)
    localStorage.removeItem('userId')
  }

  return <UserContext value={{
    authStatus: authStatus,
    isAuthenticated: authStatus === 'authenticated',
    user: user,
    login: handleLogin,
    logout: handleLogout,
  }}
  >
    {children}
  </UserContext>
}
