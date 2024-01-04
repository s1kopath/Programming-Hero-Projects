document.getElementById('searchBtn').addEventListener('click', function (){
    let mealName = document.getElementById('searchField').value;
    

    if(mealName === ''){
        alert('Are vai ki khaben eita th bolen');
    }
    else{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
        fetch(url, {
            method: "GET"
        })
        .then(res => res.json())
        .then(data => {
            if(data.meals){
                displayMeal(data);
            }
            else{
                alert('Not fond!');
            }
        });
        
    }

    
});
const displayMeal = foods => {
    const foodContainerDiv = document.getElementById('foodContainer');
    foods.meals.forEach(meal => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'foodPic';
        const mealInfo = `
        <img onclick = "displayMealDetails('${meal.strMeal}')" class="mealPic" src="${meal.strMealThumb}">
        <h3 onclick = "displayMealDetails('${meal.strMeal}')">${meal.strMeal}</h3>
        `;
        foodDiv.innerHTML = mealInfo;
        foodContainerDiv.appendChild(foodDiv);
    });
}
const displayMealDetails = foodName => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealIngredientInfo(data.meals[0]));
}

const displayMealIngredientInfo = food => {
    const displayMealIngredient = document.getElementById('displayMealIngredient');
    displayMealIngredient.style.display = 'block';

    const mainPage = document.getElementById('mainPage');
    mainPage.style.display = 'none';

    displayMealIngredient.innerHTML = `
                <h3>${food.strMeal}</h3>
                <img class = "mealPic" src="${food.strMealThumb}">
                <h4>Ingredients</h4>
                <p>1. ${food.strIngredient1}</p>
                <p>2. ${food.strIngredient2}</p>
                <p>3. ${food.strIngredient3}</p>
                <p>4. ${food.strIngredient4}</p>
                <p>5. ${food.strIngredient5}</p>
                <p>6. ${food.strIngredient6}</p>
                <p>7. ${food.strIngredient7}</p>
                `;
                
}


