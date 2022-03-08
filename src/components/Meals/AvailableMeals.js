import React, { useState, useEffect } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      setHttpError(null);

      try {
        const response = await fetch(
          "https://food-order-app-react-976da-default-rtdb.firebaseio.com/meals.json"
        );

        if (response.ok) {
          const mealsObject = await response.json();
          const mealsArray = [];
          for (const mealKey in mealsObject) {
            mealsArray.push({ id: mealKey, ...mealsObject[mealKey] });
          }
          setMeals(mealsArray);
        } else {
          throw new Error("Something went wrong!");
        }
      } catch (error) {
        setHttpError(error.message);
      }

      setIsLoading(false);
    };

    fetchMeals();
  }, []);

  if (isLoading) {
    return (
      <section className={classes["section"]}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={`${classes["section"]} ${classes["meals-error"]}`}>
        <p>{httpError}</p>
      </section>
    );
  }

  if (meals.length === 0) {
    return (
      <section>
        <p>No meals available!</p>
      </section>
    );
  }

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
