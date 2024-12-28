import { Button, Form, Input, message, Spin } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateCategoryPage = () => {
  const [loading, setloading] = useState(false);
  const params = useParams();
  const categoryId = params.id;
  const [form] = Form.useForm();
  const url = import.meta.env.VITE_API_BASE_URL;

  const onFinish = async (values) => {
    setloading(true);
    try {
      const response = await fetch(`${url}/api/categories/${categoryId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        message.success("Kategori güncellendi.");
      } else {
        message.error("Hata oluştu !");
      }
    } catch (error) {
      console.log("Veri Hatası", error);
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    const fetchUpdateCategory = async () => {
      setloading(true);
      try {
        const response = await fetch(`${url}/api/categories/${categoryId}`);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        if (data) {
          form.setFieldsValue({
            name: data.name,
            img: data.img,
          });
        }
      } catch (error) {
        console.log("Veri Hatası", error);
      } finally {
        setloading(false);
      }
    };
    fetchUpdateCategory();
  }, [categoryId, url, form]);

  return (
    <Spin spinning={loading}>
      <Form
        form={form}
        layout="vertical"
        name="basic"
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item
          label="Kategori ismi"
          name="name"
          rules={[
            {
              required: true,
              message: "Lütfen kategori ismi giriniz!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Kategori Görseli (Link)"
          name="img"
          rules={[
            {
              required: true,
              message: "Lütfen kategori görsel linkini giriniz!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Güncelle
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export default UpdateCategoryPage;
