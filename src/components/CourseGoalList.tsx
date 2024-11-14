import { ReactNode } from "react";
import { type CourseGoal as CGoal } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteFN: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteFN,
}: CourseGoalListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">You have no goals yet . Start adding some!</InfoBox>
    );
  }

  let warningBox: ReactNode;
  if (goals.length >= 4) {
    let severity: "low" | "medium" | "high" = "low";

    if (goals.length > 6 && goals.length <= 8) {
      severity = "medium";
    } else if (goals.length > 8) {
      severity = "high";
    }
    warningBox = (
      <InfoBox mode="warning" severity={severity}>
        You're collecting a lot of goals. Don't put too mush on your plate!
      </InfoBox>
    );
  }

  return (
    <>
    {warningBox}
        <div className="infobox">Total Goals : {goals.length}</div>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title} onDelete={onDeleteFN} id={goal.id}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
