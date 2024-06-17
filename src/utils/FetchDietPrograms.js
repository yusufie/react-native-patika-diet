import axios from 'axios';
import Config from 'react-native-config';

const fetchDietPrograms = async () => {
  const app_id = Config.APP_ID;
  const app_key = Config.API_KEY;
  const dietLabels = [
    'low-carb',
    'low-fat',
    'high-protein',
    'vegan',
    'vegetarian',
  ];
  const dietPrograms = [];

  for (let i = 0; i < dietLabels.length; i++) {
    const apiUrl = `https://api.edamam.com/api/food-database/v2/parser?app_id=${app_id}&app_key=${app_key}&ingr=${dietLabels[i]}`;
    try {
      const response = await axios.get(apiUrl);
      const data = response.data.hints;
      dietPrograms.push(data[0].food);
    } catch (error) {
      console.error(error);
    }
  }

  return dietPrograms;
};

export default fetchDietPrograms;
