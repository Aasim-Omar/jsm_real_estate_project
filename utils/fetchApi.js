import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const {data} = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "f97919cdbemsh2e49056e2c89dccp170344jsn7ce3b82e00e0",
    },
  });
  return data;
};
