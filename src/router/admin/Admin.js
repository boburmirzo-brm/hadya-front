// admin.js
import React, { useState } from "react";
import "./admin.css";
import CreateProduct from "./create-product/CreateProduct";
import { Link, Route, Routes } from "react-router-dom";
import { MdAdminPanelSettings } from "react-icons/md";
import ManageProduct from "./manage-product/ManageProduct";
import {BsFillArrowLeftCircleFill} from "react-icons/bs"
import { IoMenuSharp, IoCloseOutline  } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import ManageAdmins from "./manage-admin/ManageAdmins";

function Admin() {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate()

  const handleLogOut = () => {
    if (window.confirm("Tizimdan chiqib ketmoqchimisi")) {
      localStorage.removeItem("hadya-token");
      localStorage.removeItem("hadya-user");
      navigate("/")
    }
  };

  return (
    <div className={`admin ${showSidebar ? "show" : ""}`}>
      <div className="admin__sidebar">
        <Link style={{fontSize: 24}} to="/">
          <BsFillArrowLeftCircleFill/>
        </Link>
        <h2>Administrator boshqaruv paneli</h2>
        <div className="l">
          <MdAdminPanelSettings className="admin__icon" />
        </div>
        <ul className="admin__collection">
         
          <li onClick={()=> setShowSidebar(false)} className="admin__item">
            <Link className="admin__link" to="create-product">
              Mahsulotlarni Qoshish
            </Link>
          </li>
          <li onClick={()=> setShowSidebar(false)} className="admin__item">
            <Link className="admin__link" to="manage-product">
              Mahsulotlarni boshqarish
            </Link>
          </li>
          <li onClick={()=> setShowSidebar(false)} className="admin__item">
            <Link className="admin__link" to="manage-admins">
              Adminlarni boshqarish
            </Link>
          </li>
          <li style={{marginTop:100}} className="admin__item">
            <span style={{background: "crimson", color:"#fff"}} onClick={handleLogOut} className="admin__link">
              Chiqish
            </span>
          </li>
        </ul>
      </div>

      <div className="admin__content">
        <Routes>
          <Route path="create-product" element={<CreateProduct />} />
          <Route path="manage-product" element={<ManageProduct />} />
          <Route path="manage-admins" element={<ManageAdmins />} />
        </Routes>
      </div>
      <div className="admin__menu" onClick={() => setShowSidebar(!showSidebar)}>
        {
          showSidebar? 
          <IoCloseOutline/> :
          <IoMenuSharp />
        }
      </div>
    </div>
  );
}

export default Admin;
