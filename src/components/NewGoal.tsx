import { FormEvent, useRef } from "react";

type NewGoalProps = {
    onAddGoal:(goal:string , summary:string)=>void;
}

export default function NewGoal({onAddGoal}:NewGoalProps) {
const goal = useRef<HTMLInputElement>(null);
const summary = useRef<HTMLInputElement>(null);
// Ref Always gave you object with the current property



    function handleSubmit(event:FormEvent<HTMLFormElement>){
        event.preventDefault();
        const enteredGoal = goal.current!.value;
        //  this ! mean this is never gonna be null
        // to solve ( Property 'value' does not exist on type 'never') we use <HTMLInputElement> on useRef()
        const enteredSummary = summary.current!.value;
        event.currentTarget.reset()
        goal.current!.focus()
        onAddGoal(enteredGoal,enteredSummary)
        
    }


  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input type="text" id="goal" ref={goal} required />
      </p>
      <p>
        <label htmlFor="summary">Short Summery</label>
        <input type="text" id="summary" ref={summary} />
      </p>
      <p>
        <button type="submit">Add Goal</button>
      </p>
    </form>
  );
}
