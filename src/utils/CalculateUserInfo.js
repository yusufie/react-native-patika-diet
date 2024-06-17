const calculateInfo = ({height, weight, age, activityLevel}) => {
  //According to the user info, calculates amounts the body mass index, daily calorie needs and fat loss calorie .
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  const bmr = 10 * weight + 6.25 * height - 5 * age;

  let activityMultiplier;
  switch (activityLevel) {
    case 'Lightly Active':
      activityMultiplier = 1.375;
      break;
    case 'Moderately Active':
      activityMultiplier = 1.55;
      break;
    case 'Active':
      activityMultiplier = 1.725;
      break;
    case 'Very Active':
      activityMultiplier = 1.9;
      break;
    default:
      activityMultiplier = 1.2;
      break;
  }

  const maintenanceCalories = bmr * activityMultiplier;
  const fatLossCalories = maintenanceCalories - 500;

  return {bmi, maintenanceCalories, fatLossCalories};
};

const suggestDiet = ({bmi, maintenanceCalories, fatLossCalories}) => {
  // It selects the recommended diet program according to the user body mass index, daily calorie needs and fat loss calories.
  let diet;
  if (bmi >= 30) {
    diet = 'Low Carb';
  } else if (bmi >= 25 && bmi < 30 && maintenanceCalories > 2500) {
    diet = 'High Protein Oatmeal';
  } else if (bmi >= 25 && bmi < 30 && maintenanceCalories <= 2500) {
    diet = 'Vegeterian';
  } else if (bmi >= 18.5 && bmi < 25 && fatLossCalories > 2000) {
    diet = 'High Protein Oatmeal';
  } else if (bmi >= 18.5 && bmi < 25 && fatLossCalories <= 2000) {
    diet = 'Low-Fat (1 Percent or 2 Percent) Milk';
  } else {
    diet = 'Starlite Cuisine Crispy Taqiutos, Vegan Chicken Style';
  }
  return diet;
};

export default {calculateInfo, suggestDiet};
