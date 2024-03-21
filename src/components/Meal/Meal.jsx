import { Link } from "react-router-dom";

const Meal = ({ meal }) => {
    const {idMeal, strMeal, strCategory, strMealThumb} = meal;
    return (
        <div className="meal-content">
            <h4>Meal Id: {idMeal}</h4>
            <h3>Meal Name: {strMeal}</h3>
           
           <img src={strMealThumb} alt="" />
          
            <p>Meal category: {strCategory}</p>
            <Link to={`/meal/${idMeal}`}>View Details</Link>


        </div>
    );
};

export default Meal;