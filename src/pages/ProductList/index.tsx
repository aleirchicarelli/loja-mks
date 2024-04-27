import React, { useState } from "react";
import { Header } from "./Components/Header";
import { ListProduct } from "./Components/ListProduct";
import { useProductService } from "./useproductService";
import { ShoppingCart } from "./Components/ShoppingCart";
import { DtoProduct } from "../../service/mks/herokuapp/DtoProductsResponse";

export function ProductList() {
  const [visible, setVisible] = useState<boolean>(false);
  const [list, setList] = useState<DtoProduct[]>([]);
  const { loading, products } = useProductService();

  return (
    <>
      <Header onClick={() => setVisible(true)} count={list.length} />
      <ListProduct
        products={products}
        loading={loading}
        onBuy={setList}
        list={list}
      />
      <ShoppingCart
        produtos={list}
        visible={visible}
        onRemove={setList}
        onClose={() => setVisible(false)}
      />
    </>
  );
}
