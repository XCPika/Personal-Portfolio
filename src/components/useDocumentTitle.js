// https://dev.to/luispa/how-to-add-a-dynamic-title-on-your-react-app-1l7k
// LuisPa
// Posted on Aug 31, 2020
import { useRef, useEffect } from 'react'

function useDocumentTitle(title, prevailOnUnmount = false) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    
  }, [title]);

  useEffect(() => () => {
    if (!prevailOnUnmount) {
      document.title = defaultTitle.current;
    }
  }, [prevailOnUnmount])
}

export default useDocumentTitle