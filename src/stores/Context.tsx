import { createContext, useContext, useState, ReactNode } from "react";

interface UserContextType {
  name: string;
  setName: (name: string) => void;
  department: string;
  setDepartment: (department: string) => void;
  faculty: string;
  setFaculty: (faculty: string) => void;
  level: string;
  setLevel: (faculty: string) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext<UserContextType | undefined>(undefined);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [faculty, setFaculty] = useState<string>("");
  const [level, setLevel] = useState<string>("")

  const contextValue = {
    name,
    setName,
    department,
    setDepartment,
    faculty,
    setFaculty,
	level,
	setLevel
  };

  return (
    <Context.Provider value={contextValue}>{children}</Context.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
	const context = useContext(Context);
	if (!context) {
	  throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
  };