// import { useEffect } from "@react-three/fiber";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";

import AppCanvas from "./components/AppCanvas";

import ProductsCards from "./components/Interface/ProductsCards/ProductsCards";
import Filter from "./components/Interface/ProductsCards/Filter";

import Preloader from "./components/Interface/Preloader";
import NextBtn from "./components/Interface/NextBtn";
import PrevBtn from "./components/Interface/PrevBtn";
import CloseModal from "./components/Interface/CloseModal";
import Screenshot from "./components/Interface/Screenshot";


import Title from "./components/Interface/ProductInterface/Title";

const root = createRoot(document.querySelector("#root"));

root.render(
  <>
    <CloseModal />
    <div className="viewer-wrapper">
      <div id="ChangeModelWrapper" className="change-model-wrapper">
        <div className="change-model-container">
          <div id="FilterWrapper" className="filter-wrapper">
            <div className="filter-model-container">
              <Filter />
            </div>
          </div>
          <div className="products-cards-wrapper">
            <div className="products-cards-container">
              <ProductsCards />
            </div>
          </div>
        </div>
      </div>
      <div id="ModelWrapper" className="model-wrapper">
        <AppCanvas />
        <div id="productInfo" className="product-info-wrapper">
          <div className="product-info">
            <div className="product-info-left">
              <div className="model">
                <Title />
              </div>
            </div>
          </div>
        </div>
        <div id="modal_root" className="modal-wrapper"></div>
      </div>
      <div id="interface_root" className="interface-wrapper">
        <div className="interface-container">
          <Preloader />
          <Screenshot />
          <PrevBtn />
          <NextBtn />
        </div>
      </div>
      <Preloader />
    </div>
  </>
);
