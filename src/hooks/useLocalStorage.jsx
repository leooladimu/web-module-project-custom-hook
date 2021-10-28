import { useState } from 'react-redux';

const useLocalStorage = (key, intialValue) => {

    const [storedValue, setStoredValue] = useState(() => {

        const thing = window.localStorage.getThing(key);

        return thing ? JSON.parse(thing) : intialValue;

    });
}