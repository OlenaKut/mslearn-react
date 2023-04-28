import "./RecipeTitle.css";
import React from "react";

// TODO: Create RecipeTitle component
function RecipeTitle(props) {
  let message = {
    text: "Hello, world",
    color: "red",
    };
      let message2 = {
        ...message,
        color: "green",
      };
  let messageCopy = { ...message };
    console.log(messageCopy);
    console.log(message2);

  return (
    <section>
      <h2>{props.title}</h2>
      <h3 className={props.feedback.rating <= 3.5 ? "red" : "green"}>
        {props.feedback.rating} from {props.feedback.reviews} reviews
      </h3>
    </section>
  );
}

export default RecipeTitle;
