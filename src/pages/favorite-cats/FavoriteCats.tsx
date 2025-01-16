import React from "react";
import Cat from "../../entities/cat/cat.ts";
import { useStore } from "../../shared/store/store.ts";
import LikeButton from "../../shared/ui/like-buttion/like-button.tsx";

const FavoriteCats: React.FC = React.memo(() => {
  const { handleFavorite, favoriteCats } = useStore();
  return (
    <div className=" flex my-[52px] gap-12 flex-wrap">
      {favoriteCats.map((cat: Cat) => (
        <div
          onClick={() => handleFavorite(cat)}
          className="group transition-all cursor-pointer hover:drop-shadow-lg relative"
          key={cat.id}
        >
          <img className="w-[255px] aspect-square" src={cat.url} alt="Котик" />
          <div className="group-hover:opacity-100 opacity-0 absolute right-3 bottom-0">
            <LikeButton
              isFavorite={!!favoriteCats.find((el) => el === cat)}
              onClick={() => handleFavorite(cat)}
            />
          </div>
        </div>
      ))}
    </div>
  );
});

export default FavoriteCats;
