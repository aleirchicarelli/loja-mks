import React, { useEffect } from "react";
import { Header } from "./Components/Header";
import { ListProduct } from "./Components/ListProduct";
import { useProductService } from "./useproductService";

export function ProductList() {
 const {loading, products} = useProductService()
  

  return (
    <>
      <Header />
      <ListProduct products={products} loading={loading} />
    </>
  );
}
