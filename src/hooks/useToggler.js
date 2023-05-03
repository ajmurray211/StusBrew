import { useState } from "react";

export const useToggler = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen((prevState) => !prevState);

    return {isOpen, toggle}

}