import { useState, useEffect } from "react"

export function useActualScreenSize () {
  const [width, setWidth] = useState(document.documentElement.clientWidth) 
  const [height, setHeight] = useState(document.documentElement.clientHeight)

  useEffect(() => {
    function handleResize () {
      setWidth(document.documentElement.clientWidth)
      setHeight(document.documentElement.clientHeight)
    }
    window.addEventListener('resize', handleResize);

    return function cleanup () {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return [width, height]
}