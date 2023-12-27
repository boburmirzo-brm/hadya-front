import React, { useState } from "react";
import "./CreateProduct.css";
import { category } from "../../../static";
import axios from "../../../api";
import { HiOutlinePhoto } from "react-icons/hi2";
import { toast } from "react-toastify";
import { useCreateProductMutation } from "../../../context/productsApi"
import defaultImage from "../../../assets/default.png"
import { FiMinusCircle } from "react-icons/fi";

const initialState = {
  name: "",
  category: "",
  desc: "",
  price: "",
  items: "",
};
function CreateProduct() {
  const [product, setProduct] = useState(initialState);
  const [files, setFiles] = useState([]);
  const [createProduct, {isLoading} ] = useCreateProductMutation()

  const handleRemoveImage = (inx)=>{
    let newImages = []
    files.forEach((el, i)=> {
      if(inx !== i){
        newImages.push(el)
      } 
    })
    setFiles(newImages)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let newProduct = new FormData();
    newProduct.append("name", product.name);
    newProduct.append("desc", product.desc);
    newProduct.append("price", +product.price);
    newProduct.append("category", product.category);
    product.items.split("\n").map(i=> i.trim()).filter(i=>i).forEach(el=>{
      newProduct.append("items", el);
    })
    files.forEach((i) => {
      newProduct.append("rasmlar", i[0], i[0].name);
    });
    createProduct(newProduct)
      .then((res)=>  {
        console.log(res);
        toast.success("Mahsulot qo'shildi!")
        setProduct(initialState);
        setFiles("");
      })
      .catch(err => {
        console.log(err)
        toast.error("Afsuski, mahsulot qo'shilmadi, yana qayta urinib ko'ring")
      })
  };
  return (
    <div className="create__product">
      <h3>Mahsulot qo'shish uchun formani to'ldiring!</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={product.name}
            onChange={(e) =>
              setProduct((p) => ({ ...p, name: e.target.value }))
            }
            required
            type="text"
            className="form-control"
            placeholder="Nomi"
            disabled={isLoading}
          />
        </div>
        <div>
          <input
            value={product.price}
            onChange={(e) =>
              setProduct((p) => ({ ...p, price: e.target.value }))
            }
            required
            type="number"
            className="form-control"
            placeholder="Narxi"
            disabled={isLoading}
          />
        </div>

        <div>
          <input
            value={product.desc}
            onChange={(e) =>
              setProduct((p) => ({ ...p, desc: e.target.value }))
            }
            type="text"
            className="form-control"
            placeholder="Tavsifi"
            disabled={isLoading}
          />
        </div>
        <div>
          <textarea 
            className="form-control"
            placeholder="Batafsil"
            value={product.items}
            onChange={(e) =>
              setProduct((p) => ({ ...p, items: e.target.value }))
            }
            disabled={isLoading}
            name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <select
            value={product.category}
            onChange={(e) =>
              setProduct((p) => ({ ...p, category: e.target.value }))
            }
            required
            className="form-control"
            name=""
            id=""
            disabled={isLoading}
          >
            <option value="" disabled>
              Tanlang
            </option>
            {category
              ?.filter((i) => i.link !== "all")
              ?.map((i) => (
                <option key={i.id} value={i.link}>
                  {i.title}
                </option>
              ))}
          </select>
          
          <div className="create__product-image-wrapper">
            {
              new Array(4).fill("").map((_, inx)=><div 
              key={inx}
              style={{
                background: `url(${ files.length > inx ? URL.createObjectURL(files[inx][0]) : defaultImage }) no-repeat center/cover`,
                opacity: files.length < inx ? .4 : 1
              }}
              className="create__product-image">
              {
                files.length <= inx ? 
                <input
                  onChange={(e) => setFiles(p=>[...p, e.target.files])}
                  accept="image/png, image/jpeg, image/jpg, image/heic, image/webp"
                  type="file"
                  className="form-control"
                  placeholder="Mahsulot rasmi"
                  disabled={isLoading || files.length < inx}
                /> : <div onClick={()=> handleRemoveImage(inx)}>
                    <FiMinusCircle />
                </div> 
              }
            </div>)
            }
          </div>
        </div>
        <button disabled={isLoading}>
          {isLoading ? "Yuklanmoqda" : "Jo'natish"}
        </button>
      </form>
    </div>
  );
}

export default CreateProduct;
