// import { ReactNode } from "react";
import { FC, PropsWithChildren } from "react"

//! This is a way to define it or the PopsWithChildren

// interface CourseGoalProps {
//     title:string ;
//     children:ReactNode;
// }


//! There is an alternative way to make the function

// export default function CourseGoal({title , children} : CourseGoalProps) {
  //   return <article>
  //     <div>
  //         <h2>{title}</h2>
  //         {children}
  //     </div>
  //     <button>Delete</button>
  //   </article>
  // }

  type CourseGoalProps = PropsWithChildren<{
    title:string;
    id:number
    onDelete:(id:number)=>void;
  }>

const CourseGoal :FC<CourseGoalProps> = ({title , children , id , onDelete}) =>{
    return <article>
    <div>
        <h2>{title}</h2>
        {children}
    </div>
    <button onClick={()=> onDelete(id)}>Delete</button>
  </article>
}

export default CourseGoal;