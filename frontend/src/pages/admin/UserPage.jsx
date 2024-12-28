import { Button, message, Popconfirm, Table } from "antd";
import { useCallback, useEffect, useState } from "react";

const UserPage = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setloading] = useState(false);
  const url = import.meta.env.VITE_API_BASE_URL;

  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (imgSrc) => (
        <img
          src={imgSrc}
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          alt=""
        />
      ),
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
        <Popconfirm
          title="Kullanıcıyı Sil"
          description="Kullanıcıyı silmek istediğinizden emin misiniz?"
          okText="Yes"
          cancelText="No"
          onConfirm={() => deleteUser(record.email)}
        >
          <Button type="primary" danger>
            Delete
          </Button>
        </Popconfirm>
      ),
    },
  ];
  const fetchUsers = useCallback(async () => {
    setloading(true);
    try {
      const response = await fetch(`${url}/api/users`);
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
  const deleteUser = async (deleteEmail) => {
    try {
      const response = await fetch(`${url}/api/users/${deleteEmail}`, {
        method: "DELETE",
      });
      if (response.ok) {
        message.success("Kullanıcı başarıyla silindi.");
        fetchUsers();
      } else {
        message.error("Silme Hatası");
      }
    } catch (error) {
      console.log("Veri Hatası Hatası", error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      rowKey={(record) => record._id}
      loading={loading}
    />
  );
};

export default UserPage;
