import { type CourseGoal as CGoal} from "../App";
import CourseGoal from "./CourseGoal";

type CourseGoalListProps ={
    goals:CGoal[]
    onDeleteFN:(id:number)=>void
}

export default function CourseGoalList({goals , onDeleteFN}:CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title} onDelete={onDeleteFN} id={goal.id}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
