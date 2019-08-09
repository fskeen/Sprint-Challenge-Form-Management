import React from 'react';

export const add = (a, b) => {
        return a + b
    }

function RecipeList ({recipes}) {
    
    return (
        <div>
            {recipes.map(recipe => {
                console.log(recipe.ingredients)
                return (
                    <div key={Date.now + recipe.name}>
                        <p>I am a recipe!</p>
                        <h3>Name: {recipe.name}</h3>
                        <p>Course: {recipe.course}</p>
                        <p>Technique: {recipe.technique}</p>
                        <h4>Ingredients</h4>
                        <ul>
                            {/*{recipe.ingredients.map (a => {
                                return <li key={a + Date.now}>a</li>
                            })}*/}
                        </ul>
                        <p data-testid="add"> I am an addition function. The result of 29482 plus 43597 is {add(29482, 43597)}.</p>
                    </div>                    
                )
            })}
        </div>
        
    )
}

export default RecipeList;