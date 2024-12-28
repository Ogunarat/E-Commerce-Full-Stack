import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import AcountPage from "./pages/AcountPage";
import CartPage from "./pages/CartPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import { Route, Routes } from "react-router-dom";
import UserPage from "./pages/admin/UserPage";
import CategoryPage from "./pages/admin/categories/CategoryPage";
import "./App.css";
import UpdateCategoryPage from "./pages/admin/categories/UpdateCategoryPage";
import CreateCategoryPage from "./pages/admin/categories/CreateCategoryPage";
import CreateProductPage from "./pages/admin/products/CreateProductPage";
import ProductPage from "./pages/admin/products/ProductPage";
import UpdateProductPage from "./pages/admin/products/UpdateProductPage";
import CouponPage from "./pages/admin/coupons/CouponPage";
import CreateCouponPage from "./pages/admin/coupons/CreateCouponPage";
import UpdateCouponPage from "./pages/admin/coupons/UpdateCouponPage";
import Success from "./pages/Success";
import OrdersPage from "./pages/admin/OrderPage";
import DashboardPage from "./pages/admin/DashboardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/acount" element={<AcountPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/blog-details" element={<BlogDetailsPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/success" element={<Success />} />
      <Route path="/admin/*">
        <Route index element={<DashboardPage />} />
        <Route path="users" element={<UserPage />} />
        <Route path="categories" element={<CategoryPage />} />
        <Route path="categories/update/:id" element={<UpdateCategoryPage />} />
        <Route path="categories/create" element={<CreateCategoryPage />} />
        <Route path="products/create" element={<CreateProductPage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="products/update/:id" element={<UpdateProductPage />} />
        <Route path="coupons" element={<CouponPage />} />
        <Route path="coupons/create" element={<CreateCouponPage />} />
        <Route path="coupons/update/:id" element={<UpdateCouponPage />} />
        <Route path="orders" element={<OrdersPage />} />
      </Route>
    </Routes>
  );
}

export default App;
