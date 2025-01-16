import React from "react";
import { useStore } from "../../shared/store/store.ts";

type GetMoreCatsButtonProps = {
  className?: string;
};

const GetMoreCatsButton: React.FC<GetMoreCatsButtonProps> = React.memo(
  ({ className = "" }) => {
    const { getCats } = useStore();
    return (
      <button className={className} onClick={getCats}>
        <span className="text-sm font-bold">... загрузить еще котиков ...</span>
      </button>
    );
  }
);

export default GetMoreCatsButton;
