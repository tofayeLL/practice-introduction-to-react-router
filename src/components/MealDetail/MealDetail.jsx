

const MealDetail = ({ singleMeal }) => {
    const { idMeal, strMeal, strArea, strTags, strMealThumb, strCategory} = singleMeal;
    return (
        <div className="detail-container">
            <h4>Meal id: {idMeal}</h4>
            <img src={strMealThumb} alt="" />
            <h3>Meal title: {strMeal}</h3>
            <p>Meal Category: {strCategory}</p>
            <p>Meal Country: {strArea}</p>
            <p>Tags: {strTags || 'not found'}</p>

        </div>
    );
};

export default MealDetail;