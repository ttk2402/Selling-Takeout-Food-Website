import { React } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import LoginPage from "./pages/LoginPage";
import RegistryPage from "./pages/RegistryPage";
import AccountDetailPage from "./pages/AccountDetailPage";
import OverviewPage from "./pages/admin/OverviewPage";
import CategoriesPage from "./pages/admin/CategoriesPage";
import DiscountsPage from "./pages/admin/DiscountsPage";
import ProductsPage from "./pages/admin/ProductsPage";
import AccountsPage from "./pages/admin/AccountsPage";
import SalesPage from "./pages/admin/SalesPage";
import OrdersPage from "./pages/admin/OrdersPage";
import SettingsPage from "./pages/admin/SettingsPage";

function App() {
  return (
    <>
      <Routes>
        {/* Người dùng */}
        <Route path="/" element={<HomePage />} />
        <Route path="/trang-chu" element={<HomePage />} />
        <Route path="/gio-hang" element={<CartPage />} />
        <Route path="/san-pham" element={<ProductPage />} />
        <Route path="/danh-muc/:categoryID" element={<CategoryPage />} />
        <Route path="/san-pham/:productID" element={<ProductDetailPage />} />
        <Route path="/don-hang" element={<OrderPage />} />
        <Route path="/dang-nhap" element={<LoginPage />} />
        <Route path="/dang-ky" element={<RegistryPage />} />
        <Route path="/tai-khoan/:accountID" element={<AccountDetailPage />} />
        {/* Người quản trị */}
        <Route path="/quan-tri/" element={<OverviewPage />} />
        <Route path="/quan-tri/danh-muc" element={<CategoriesPage />} />
        <Route path="/quan-tri/khuyen-mai" element={<DiscountsPage />} />
        <Route path="/quan-tri/san-pham" element={<ProductsPage />} />
        <Route path="/quan-tri/tai-khoan" element={<AccountsPage />} />
        <Route path="/quan-tri/don-hang" element={<OrdersPage />} />
        <Route path="/quan-tri/doanh-thu" element={<SalesPage />} />
        <Route path="/quan-tri/cai-dat" element={<SettingsPage />} />
      </Routes>
    </>
  );
}

export default App;
