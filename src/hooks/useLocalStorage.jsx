import { useState } from 'react-redux';

const useLocalStorage = (key, intialValue) => {

    const [storedValue, setStoredValue] = useState(() => {

        // if (localStorage.getItem(key)) {
        //   return JSON.parse(localStorage.getItem(key));    
        // } else {
        // localStorage.setItem(key, intialValue);
        //   return intialValue;
        // }

        const item = window.localStorage.getItem(key);

        return item ? JSON.parse(item) : intialValue;

    });

    const setValue = (value) => {
        window.localStorage.setItem(key, value);
        setStoredValue(value);
    }

    return [storedValue, setValue];
};