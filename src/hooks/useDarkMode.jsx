import { useLocalStorage } from './useLocalStorage';

const useDarkMode = () => {
    const [value, setValue] = useLocalStorage('key', false);
    return [value, setValue];
}
export default useDarkMode;