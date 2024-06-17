import axios from 'axios';
import Config from 'react-native-config';

const fetchFoodData = async food => {
  const appId = Config.APP_ID;
  const appKey = Config.API_KEY;
  const url = `https://api.edamam.com/api/food-database/v2/parser?ingr=${food}&app_id=${appId}&app_key=${appKey}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchFoodData;
