import React from "react";
import LikeButton from "../../shared/ui/like-buttion/like-button.tsx";
import { useStore } from "../../shared/store/store.ts";
import Cat from "../../entities/cat/cat.ts";
import GetMoreCatsButton from "../../widgets/get-more-cats-button/GetMoreCatsButton.tsx";

const AllCats: React.FC = React.memo(() => {
  const { handleFavorite, cats, favoriteCats, isLoading } = useStore();

  return (
    <div className="my-[52px]">
      <div className="flex flex-wrap gap-12">
        {cats.map((cat: Cat) => (
          <div
            onClick={() => handleFavorite(cat)}
            className="hover:scale-110 group transition-all cursor-pointer hover:drop-shadow-lg relative"
            key={cat.id}
          >
            <img
              className="object-cover w-[255px] aspect-square"
              src={cat.url}
              alt="Котики"
            />
            <div className="transition-all group-hover:opacity-100 opacity-0 absolute right-3 bottom-0">
              <LikeButton
                isFavorite={!!favoriteCats.find((el) => el === cat)}
                onClick={() => handleFavorite(cat)}
              />
            </div>
          </div>
        ))}
      </div>
      {isLoading && (
        <span className="font-normal text-sm my-3">Загружаем котиков...</span>
      )}
      {cats.length > 0 && (
        <GetMoreCatsButton className="flex my-6 justify-center w-full" />
      )}
    </div>
  );
});

export default AllCats;
