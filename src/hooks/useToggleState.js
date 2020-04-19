import { useState } from 'react';

export const useToggleState = (initialValue = false) => {
    const [value, toggleValue] = useState(initialValue);
    const toggle = () => toggleValue(!value);
    return [value, toggle];
};
