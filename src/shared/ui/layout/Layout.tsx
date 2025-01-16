import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllCats from "../../../pages/all-cats/AllCats.tsx";
import FavoriteCats from "../../../pages/favorite-cats/FavoriteCats.tsx";
import Header from "../../../widgets/header/Header.tsx";
import { useStore } from "../../store/store.ts";

const Layout: React.FC = React.memo(() => {
  const { getCats } = useStore();

  useEffect(() => {
    getCats();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="mx-[62px]">
          <Routes>
            <Route index path="/" element={<AllCats />} />
            <Route path="/favorite-cats" element={<FavoriteCats />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
});

export default Layout;
