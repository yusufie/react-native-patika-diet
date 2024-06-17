function getProgramImage(program) {
  // Returns a photo based on diet program names.
  switch (program) {
    case 'Low Carb':
      return require('../assets/images/DietPlans/low-carb.jpg');
    case 'Low-Fat (1 Percent or 2 Percent) Milk':
      return require('../assets/images/DietPlans/low-fat-milk.png');
    case 'High Protein Oatmeal':
      return require('../assets/images/DietPlans/high-protein.jpg');
    case 'Starlite Cuisine Crispy Taqiutos, Vegan Chicken Style':
      return require('../assets/images/DietPlans/starlite-taqiutos.jpg');
    case 'Vegetarian':
      return require('../assets/images/DietPlans/vegeterian.jpg');
    default:
      return null;
  }
}

export default getProgramImage;
