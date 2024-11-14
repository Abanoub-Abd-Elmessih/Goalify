import Header from "./components/Header.tsx";
import goalImg from "../public/goal.png";
import { useEffect, useState } from "react";
import CourseGoalList from "./components/CourseGoalList.tsx";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};


function App() {
  const [goals, setGoals] = useState<CourseGoal[]>(() => {
    try {
      const storedGoals = localStorage.getItem("Goals");
      return storedGoals ? JSON.parse(storedGoals) : [];
    } catch (error) {
      console.error("Error reading goals from localStorage", error);
      return [];
    }
  });

  // Update localStorage whenever goals change
  useEffect(() => {
    try {
      if (goals.length > 0) {
        localStorage.setItem("Goals", JSON.stringify(goals));
      } else {
        localStorage.removeItem("Goals"); // Remove item if there are no goals
      }
    } catch (error) {
      console.error("Error saving goals to localStorage", error);
    }
  }, [goals]);

  
  function handleAddGoal(goal:string , summary:string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        title: goal,
        description: summary,
        id: Math.random(),
      };
      return [...prevGoals, newGoal];
    });
  }
  
  function handleDelete(id:number){
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id))
  }
  return (
    <main>
      <Header image={{ src: goalImg, alt: "A Goal Image" }}>
        <h1>My Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}/>
      <CourseGoalList onDeleteFN={handleDelete} goals={goals}/>
    </main>
  );
}

export default App;
