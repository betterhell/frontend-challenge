import React from "react";
import LikeButton from "../../shared/ui/like-buttion/like-button.tsx";
import { useStore } from "../../shared/store/store.ts";
import Cat from "../../entities/cat/cat.ts";

const AllCats: React.FC = React.memo(() => {
  const { handleFavorite, cats, favoriteCats, getCats } = useStore();

  return (
    <div className="flex my-[52px] gap-12 flex-wrap">
      {cats.map((cat: Cat) => (
        <div
          className="group transition-all cursor-pointer hover:drop-shadow-lg relative"
          key={cat.id}
        >
          <img className="w-[255px] aspect-square" src={cat.url} alt="" />
          <div className="transition-all group-hover:opacity-100 opacity-0 absolute right-3 bottom-0">
            <LikeButton
              isFavorite={!!favoriteCats.find((el) => el === cat)}
              onClick={() => handleFavorite(cat)}
            />
          </div>
        </div>
      ))}
      <button onClick={getCats}>загрузить еще котиков...</button>
    </div>
  );
});

export default AllCats;
