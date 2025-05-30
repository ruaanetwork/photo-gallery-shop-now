
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AdminUser } from '@/types';

interface AuthContextType {
  user: AdminUser | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AdminUser | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock admin login - replace with Supabase auth
    if (email === 'admin@admin.com' && password === 'admin123') {
      setUser({
        id: '1',
        email: 'admin@admin.com',
        isAdmin: true
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const isAdmin = user?.isAdmin || false;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
