var menu = document.getElementById("menuContainer");

var popular = document.getElementById("popularContainer");

fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")

.then(function(response) {
    return response.json();
})

.then(function(data) {

    console.log(data);

    var meals = data.meals;

    for (var i = 0; i < meals.length; i++) {

        menu.innerHTML +=
        '<div class="col-md-6 col-lg-4">' +

            '<div class="food-card">' +

                '<img src="' + meals[i].strMealThumb + '">' +

                '<div class="food-content">' +

                    '<span class="food-category">' +
                        meals[i].strCategory +
                    '</span>' +

                    '<h4>' +
                        meals[i].strMeal +
                    '</h4>' +

                    '<p>' +
                        'A delicious dish prepared with fresh ingredients.' +
                    '</p>' +

                    '<div class="food-bottom">' +

                        '<span class="price">$' +
                            (12 + i) +
                        '</span>' +

                        '<a href="' +
                            meals[i].strYoutube +
                        '" target="_blank" class="recipe-btn">' +
                            'View Recipe' +
                        '</a>' +

                    '</div>' +

                '</div>' +

            '</div>' +

        '</div>';
    }


    for (var j = 0; j < 3; j++) {

        popular.innerHTML +=

        '<div class="col-md-4">' +

            '<div class="popular-card">' +

                '<img src="' +
                    meals[j].strMealThumb +
                '">' +

                '<div class="popular-content">' +

                    '<span>' +
                        meals[j].strCategory +
                    '</span>' +

                    '<h5>' +
                        meals[j].strMeal +
                    '</h5>' +

                    '<p>' +
                        'One of our popular dishes.' +
                    '</p>' +

                '</div>' +

            '</div>' +

        '</div>';
    }

})

.catch(function(error) {

    console.log(error);

    menu.innerHTML =
        "<p>Menu could not be loaded.</p>";

    popular.innerHTML =
        "<p>Popular dishes could not be loaded.</p>";
});