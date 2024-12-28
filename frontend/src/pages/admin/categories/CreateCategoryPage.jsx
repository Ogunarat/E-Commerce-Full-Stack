import { Button, Form, Input, message, Spin } from "antd";
import { useState } from "react";

const CreateCategoryPage = () => {
  const [loading, setloading] = useState(false);
  const [form] = Form.useForm();
  const url = import.meta.env.VITE_API_BASE_URL;

  const onFinish = async (values) => {
    setloading(true);
    try {
      const response = await fetch(`${url}/api/categories/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        message.success("Kategori Oluştu.");
      } else {
        message.error("Hata oluştu !");
      }
    } catch (error) {
      console.log("Veri Hatası", error);
    } finally {
      setloading(false);
    }
  };

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
            Oluştur
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export default CreateCategoryPage;
