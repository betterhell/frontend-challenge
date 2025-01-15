import { create } from "zustand";
import Cat from "../../entities/cat/cat.ts";
import axios from "axios";

interface StoreProps {
  cats: Cat[] | [];
  favoriteCats: Cat[] | [];
  getCats: () => void;
  handleFavorite: (cat: Cat) => void;
}

export const useStore = create<StoreProps>((set, getState) => ({
  cats: [],
  favoriteCats: [],

  getCats: () => {
    axios
      .get("https://api.thecatapi.com/v1/images/search?limit=20", {
        headers: {
          "x-api-key":
            "live_1LwKGRxS4QrUQgDbcC8Fm2Q4FUuG7IE50k2oddsGtE5bD8cekMWD7iMNiwWP08q1",
        },
      })
      .then((res) =>
        set((state) => ({
          cats: [...state.cats, ...res.data],
        }))
      )
      .catch((err) => console.log(err));
  },

  handleFavorite: (cat) => {
    const duplicate = getState().favoriteCats.find(
      (favoriteCat) => favoriteCat.id === cat.id
    );

    if (duplicate) {
      set((state) => ({
        favoriteCats: state.favoriteCats.filter((el: Cat) => cat.id !== el.id),
      }));
    } else {
      set((state) => ({
        favoriteCats: [...state.favoriteCats, cat],
      }));
    }
  },
}));
