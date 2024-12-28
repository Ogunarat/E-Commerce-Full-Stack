import { Button, message, Popconfirm, Space, Table } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CategoryPage = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const url = import.meta.env.VITE_API_BASE_URL;

  const columns = [
    {
      title: "Kategori Görseli",
      dataIndex: "img",
      key: "img",
      render: (imgSrc) => (
        <img
          src={imgSrc}
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          alt=""
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button
            type="primary"
            onClick={() => navigate(`/admin/categories/update/${record._id}`)}
          >
            Düzenle
          </Button>
          <Popconfirm
            title="Kategoriyi Sil"
            description="Kategoriyi silmek istediğinizden emin misiniz?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => deleteCategory(record._id)}
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  const fetchCategory = useCallback(async () => {
    setloading(true);
    try {
      const response = await fetch(`${url}/api/categories`);
      if (response.ok) {
        const data = await response.json();
        setDataSource(data);
      }
    } catch (error) {
      console.log("Veri Hatası", error);
    } finally {
      setloading(false);
    }
  }, [url]);
  const deleteCategory = async (categoryId) => {
    try {
      const response = await fetch(`${url}/api/categories/${categoryId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        message.success("Kategori başarıyla silindi.");
        fetchCategory();
      } else {
        message.error("Silme Hatası");
      }
    } catch (error) {
      console.log("Veri Hatası Hatası", error);
    }
  };
  useEffect(() => {
    fetchCategory();
  }, [fetchCategory]);
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      rowKey={(record) => record._id}
      loading={loading}
    />
  );
};

export default CategoryPage;
