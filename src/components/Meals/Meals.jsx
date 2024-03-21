import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";
import './Meals.css'

const Meals = () => {
    const meals = useLoaderData();
    return (
        <div>
            <h3>Meals: {meals.meals.length}</h3>
            <div className="meals-container">
                {
                    meals.meals.map((meal,index) => <Meal
                     meal={meal}
                     key={index}></Meal> )
                }
            </div>
            
        </div>
    );
};

export default Meals;