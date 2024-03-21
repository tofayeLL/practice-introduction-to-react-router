import { useLoaderData } from "react-router-dom";
import MealDetail from "../MealDetail/MealDetail";


const MealDetails = () => {

    const meal = useLoaderData();
  
    return (
        <div>
            {
                meal.meals.map((singleMeal,index) => <MealDetail 
                singleMeal={singleMeal}
                key={index}></MealDetail>)
            }
            
            
            
        </div>
    );
};

export default MealDetails;