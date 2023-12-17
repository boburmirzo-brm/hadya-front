import React, { useState } from "react";
import "./CreateProduct.css";
import { category } from "../../../static";
import axios from "../../../api";
import { HiOutlinePhoto } from "react-icons/hi2";
import { toast } from "react-toastify";
import { useCreateProductMutation } from "../../../context/prApi"

const initialState = {
  name: "",
  category: "",
  desc: "",
  price: "",
};
function CreateProduct() {
  const [product, setProduct] = useState(initialState);
  const [files, setFiles] = useState("");
  const [createProduct, {isLoading} ] = useCreateProductMutation()

  // const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setLoading(true);
    let newProduct = new FormData();
    newProduct.append("name", product.name);
    newProduct.append("desc", product.desc);
    newProduct.append("price", product.price);
    newProduct.append("category", product.category);
    Array.from(files).forEach((i) => {
      newProduct.append("rasmlar", i, i.name);
    });
    createProduct({path:"/create/product", body: newProduct})
      .then(()=>  {
        toast.success("Mahsulot qo'shildi!")
        setProduct(initialState);
        setFiles("");
      })
    // axios
    //   .post("/create/product", newProduct)
    //   .then((res) => {
    //     console.log(res);
    //     // setProduct(initialState);
    //     // setFiles("");
    //     toast.success("Mahsulot qo'shildi!");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     toast.error("Server error");
    //   })
    //   .finally(() => setLoading(false));
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
            placeholder="Mahsulot nomi"
            disabled={isLoading}
          />
        </div>
        <div>
          <input
            value={product.price}
            onChange={(e) =>
              setProduct((p) => ({ ...p, price: +e.target.value }))
            }
            required
            type="number"
            className="form-control"
            placeholder="Mahsulot narhi"
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
            placeholder="Mahsulot Tavsifi"
            disabled={isLoading}
          />
        </div>
        <div>
          <select
            value={product.category}
            onChange={(e) =>
              setProduct((p) => ({ ...p, category: e.target.value }))
            }
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
          <div className="create__product-image">
            <input
              onChange={(e) => setFiles(e.target.files)}
              required
              type="file"
              multiple
              className="form-control"
              placeholder="Mahsulot rasmi"
              disabled={isLoading}
            />
            <HiOutlinePhoto />
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
