// import { FC, PropsWithChildren } from "react"

import { type ReactNode } from "react"

// type HeaderProps = PropsWithChildren<{src:string; alt:string;}>

// export const Header : FC<HeaderProps> = ({src , alt,children}) => {
//   return (
//     <main>
//         <div>
//             <img src={src} alt={alt} />
//             {children}
//         </div>
//     </main>
// )
// }

type HeaderProps ={
    image:{
        src:string;
        alt:string;
    };
    children : ReactNode;
}

export default function Header({image,children}:HeaderProps) {
  return <header>
    <img {...image} />
    {children}
  </header>
}
