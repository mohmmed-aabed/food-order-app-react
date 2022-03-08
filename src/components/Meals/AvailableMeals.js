import React, { useState, useEffect } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

function AvailableMeals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-order-app-react-976da-default-rtdb.firebaseio.com/meals.json"
      );
      const mealsObject = await response.json();
      const mealsArray = [];
      for (const mealKey in mealsObject) {
        mealsArray.push({ id: mealKey, ...mealsObject[mealKey] });
      }
      setMeals(mealsArray);
    };
    fetchMeals();
  }, []);

  const mealsList = meals.map((meal) => <MealItem key={meal.id} {...meal} />);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
