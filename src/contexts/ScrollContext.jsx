import React, {useState, useEffect} from 'react'

const scrollContext = React.createContext();

export const useScroll = () => {
    return React.useContext(scrollContext);
}

export const ScrollProvider = ({children}) => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => setScroll(window.scrollY))
    }, [])

    return <scrollContext.Provider value={scroll}>
        {children}
    </scrollContext.Provider>
}

