const loadData = (search) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = (data) => {
    console.log(data);
    const getDiv = document.getElementById('meal-container');
    getDiv.innerHTML = '';
    data.forEach(data => {
        const create = document.createElement('div');
        create.classList.add('col');
        create.innerHTML = `
        <div class="card">
        <img src="${data.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.strMeal}</h5>
          <p class="card-text">${data.strInstructions.slice(0, 200)}</p>
        </div>
        <div class="w-50 mx-auto pb-3">
          <button class="btn btn-primary w-100">GET INFO</button>
        </div>
      </div>
        `;
        getDiv.appendChild(create)
    })
}

const searchFood = () => {
    const getValueFromFiled = document.getElementById('searchField');
    const getValue = getValueFromFiled.value;
    loadData(getValue);
    getValueFromFiled.value = '';
}