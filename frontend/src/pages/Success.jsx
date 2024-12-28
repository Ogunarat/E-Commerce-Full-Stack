import { Button, Result } from "antd";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartProvider";

const Success = () => {
  const { setCartItems } = useContext(CartContext);
  useEffect(() => {
    setCartItems([]);
  }, [setCartItems]);
  return (
    <Result
      status="success"
      title="Ödeme Başarılı"
      subTitle="Siparişiniz başarılı bir şekilde tamamlandı"
      extra={[
        <Link to={"/"} key="home">
          <Button type="primary">Ana Sayfa</Button>
        </Link>,
        <a href="/admin/orders" key="orders">
          <Button key="buy">Siparişlerim</Button>
        </a>,
      ]}
    />
  );
};

export default Success;
