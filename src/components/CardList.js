import React from "react";
import Card from "./card";

const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map(robot => {
                    const { id, name, email } = robot;
                    return (
                        <Card key={id}
                            id={id}
                            name={name}
                            email={email}
                        />);
                }
                )
            }
        </div>
    )
}
export default CardList;
