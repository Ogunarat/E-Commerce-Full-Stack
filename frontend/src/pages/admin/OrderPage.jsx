import { Spin, Table } from "antd";
import { useEffect, useState } from "react";

const OrdersPage = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setloading] = useState(false);

  const MY_STRIPE_SECRET_KEY = import.meta.env.VITE_API_SECRET_KEY;

  const columns = [
    {
      title: "Müşteri Email ",
      dataIndex: "receipt_email",
    },
    {
      title: "Sipariş Fiyatı",
      dataIndex: "amount",
      render: (record) => <b>$ {(record / 100).toFixed(2)}</b>,
    },
  ];

  useEffect(() => {
    const fetchOrders = async () => {
      setloading(true);
      try {
        const response = await fetch(
          `https://api.stripe.com/v1/payment_intents`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${MY_STRIPE_SECRET_KEY}`,
            },
          }
        );
        if (response.ok) {
          const { data } = await response.json();
          setDataSource(data);
        }
      } catch (error) {
        console.log("Veri Hatası", error);
      } finally {
        setloading(false);
      }
    };
    fetchOrders();
  }, [MY_STRIPE_SECRET_KEY]);
  console.log(dataSource);
  return (
    <Spin spinning={loading}>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey={(record) => record.id}
        loading={loading}
      />
    </Spin>
  );
};

export default OrdersPage;
