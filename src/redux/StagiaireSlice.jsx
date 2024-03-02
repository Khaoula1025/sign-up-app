import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data_url = "https://api.slingacademy.com/v1/sample-data/users";
// async function
export const fetchData = () => async (dispatch) => {
  try {
    const response = await axios.get(data_url);
    const data = response.data.users;
    // to extract only the fields we need
    const processedData = data.map((item) => ({
      nom: item.first_name,
      prenom: item.last_name,
      image: item.profile_picture,
      id: item.id,
      filiere: " ",
    }));
    // dispatch the actions to the store
    dispatch(storeApiData(processedData));
  } catch (err) {
    console.error(err);
  }
};

export const StagiaireSlice = createSlice({
  name: "stagiaires",
  initialState: [],
  reducers: {
    storeApiData: (state, action) => {
      return action.payload;
    },
    AjouterStagiaire: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default StagiaireSlice.reducer;
export const { AjouterStagiaire, storeApiData } = StagiaireSlice.actions;
