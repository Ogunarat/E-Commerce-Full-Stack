import { useEffect, useState } from "react";
import ProductDetails from "../components/productDetails/ProductDetails";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const [singleProduct, setsingleProduct] = useState(null);
  const { id: productId } = useParams();
  const url = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    const fetchUpdateProduct = async () => {
      try {
        const response = await fetch(`${url}/api/products/${productId}`);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setsingleProduct(data);
      } catch (error) {
        console.log("Veri Hatası", error);
      }
    };
    fetchUpdateProduct();
  }, [productId, url]);

  return singleProduct ? (
    <ProductDetails
      singleProduct={singleProduct}
      setsingleProduct={setsingleProduct}
    />
  ) : (
    <p>Ürün yükleniyor...</p>
  );
};

export default ProductDetailsPage;
