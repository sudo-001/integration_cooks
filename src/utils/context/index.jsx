import { createContext, useState } from "react";
import Grilled from '../../Assets/Grilled-Food-No-Background.png';

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
    const [image, setImage] = useState(Grilled);

    const toggleImage = (img) => {
        setImage(img);
    }

    return (
        <ImageContext.Provider value={{ image, toggleImage }} >
            {children}
        </ImageContext.Provider>
    )
}