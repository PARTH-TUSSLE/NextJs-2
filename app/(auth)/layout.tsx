import { ReactNode } from "react"

export default ({children} : {
  children: ReactNode
}) => {
 return (
   <>
     <div>Header</div>
     {children}
     <div>Footer</div>
   </>
 ); 
}
