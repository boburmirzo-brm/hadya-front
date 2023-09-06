// admin.js
import React, { useState } from "react";
import "./admin.css";
import CreateProduct from "./create-product/CreateProduct";
import { Link, Route, Routes } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdAdminPanelSettings } from "react-icons/md";
import ManageProduct from "./manage-product/ManageProduct";
function Admin() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleLogOut = () => {
    localStorage.removeItem("hadya-token");
    localStorage.removeItem("hadya-user");
    window.location.assign("/");
  };

  return (
    <div className={`admin ${showSidebar ? "show" : ""}`}>
      <div className="admin__sidebar">
        <h2>Administrator boshqaruv paneli</h2>
        <div className="l">
          <MdAdminPanelSettings className="admin__icon" />
        </div>
        <ul className="admin__collection">
          <li className="admin__item">
            <Link className="admin__link" to="create-product">
              Mahsulotlarni Qoshish
            </Link>
          </li>
          <li className="admin__item">
            <Link className="admin__link" to="manage-product">
              Mahsulotlarni boshqarish
            </Link>
          </li>
          <li className="admin__item">
            <Link className="admin__link" to="/">
              Buyurtmalarni boshqarish
            </Link>
          </li>
          <li className="admin__item">
            <Link className="admin__link" to="/">
              Bosh Sahifaga qaytish
            </Link>
          </li>
          <li className="admin__item">
            <a href="/" onClick={handleLogOut} className="admin__link">
              Chiqish
            </a>
          </li>
        </ul>
      </div>

      <div className="admin__content">
        <Routes>
          <Route path="create-product" element={<CreateProduct />} />
          <Route path="manage-product" element={<ManageProduct />} />
        </Routes>
      </div>
      <div className="admin__menu" onClick={() => setShowSidebar(!showSidebar)}>
        <FiMenu className="icon__admin" />
      </div>
    </div>
  );
}

export default Admin;
