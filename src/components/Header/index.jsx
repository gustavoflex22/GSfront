import { useState, useEffect } from 'react'
import { HeaderDesktop } from '../HeaderDesktop/index';
import { HeaderMobille } from '../HeaderMobbile/index'

export function Header () {
  const [state, setState] = useState(window.innerWidth)

  useEffect(() => {
    setState(window.innerWidth)
      const handleResize = () => {
        window.addEventListener('resize', handleResize);
        }
  },[])

  return ( <> { state > 1000 ? <HeaderDesktop /> : <HeaderMobille/> } </>)
}