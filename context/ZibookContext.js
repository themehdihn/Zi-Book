import {createContext, useCallback, useContext} from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';

export const ZibookContext = createContext({
  isRefetching: false,
         reload() {},
         unreload() {},
});
// in vaseh ine hey harbar nakhad context ro dasti bekhoni
// اوکیه
export const useZibook = () => {
  let value = useContext(ZibookContext);
  return value;
};

export const ZibookContextProvider = ({ children }) => {
    
   let [isRefetching, setIsRefetching] = useState(true);
   let reload = useCallback(() => setIsRefetching(true), []);
   let unreload = useCallback(() => setIsRefetching(false), []);
  
    return (
      <ZibookContext.Provider
        value={{
         isRefetching,
         reload,
         unreload,
        }}
      >
        {children}
      </ZibookContext.Provider>
    );
  };
  // inja ok
  // خب حالا بریم برای ادد کتاب
  // add anjam nemisheh
  // بیا بریم به صفحه ادد