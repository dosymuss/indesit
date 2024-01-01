import { Routes, Route } from "react-router-dom"
import AdminPage from "./pages/AdminPage";
import CreatePage from "./pages/CreatePage";
import ProductPage from "./pages/ProductPage";
import ChangePage from "./pages/ChangePage";
import ExamplePage from "./pages/ExamplePage";
import ProductDetalPage from "./pages/ProductDetalPage";
import NotFoundPage from "./pages/NotFoundPage";
import { instanceWithToken } from "./api/productApi";
import axios from "axios";
import MainPage from "./pages/MainPage.jsx"
import AdminAuthorization from "./pages/AdminAuthorization.jsx"
import OrderPage from "./pages/OrderPage.jsx"
import SearchPage from "./pages/SearchPage.jsx";

function App() {
  // instanceWithToken.interceptors.response.use(
  //   (res) => res,
  //   async (err) => {
  //     if (axios.isAxiosError(err)) {
  //       if (err.status === 403 || err.message === "Network Error") {
  //         window.location.href = "http://localhost:3000/error"
  //       }
  //     }
  //   })
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/admin-authorization' element={<AdminAuthorization />} />
        <Route path='/order-page/:id' element={<OrderPage />} />
        {/* <Route path='/admin-page' element={<AdminPage />} /> */}
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/prod" element={<ProductPage />} />
        <Route path="/change/:id" element={<ChangePage />} />
        <Route path="/product/:id" element={<ProductDetalPage />} />
        <Route path="/exam" element={<ExamplePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
