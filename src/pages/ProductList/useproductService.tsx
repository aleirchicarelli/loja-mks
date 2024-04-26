import { useCallback, useEffect, useState } from "react";
import { useProductMksService } from "../../service/mks/herokuapp";
import { DtoProduct } from "../../service/mks/herokuapp/DtoProductsResponse";

export function useProductService() {
  const [products, setProducts] = useState<DtoProduct[]>();
  const [loading, setLoading] = useState<boolean>(false);

  const get = useCallback(async () => {
    try {
      setLoading(true);
      const response = await useProductMksService.list();
      setProducts(response.products);
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
   get()
 }, [get]);

  return {
    get,
    products,
    loading,
  };
}
