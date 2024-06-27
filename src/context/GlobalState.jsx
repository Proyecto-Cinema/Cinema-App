import {
  createContext, useContext,
  useState
} from 'react'

export const Context = createContext()

export const useGlobalState = () => {
  const context = useContext(Context)
  return context
}

export const GlobalProvider = ({ children }) => {
  const [estadoPrueba, setEstadoPrueba] = useState('Hola mundo')

  return (
    <Context.Provider
      value={{
        estadoPrueba,
        setEstadoPrueba
      }}
    >
      {children}
    </Context.Provider>
  )
}
