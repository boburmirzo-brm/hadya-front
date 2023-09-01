import React, { useState } from "react";
import "./CreateProduct.css";
import { category } from "../../../static";
import axios from "../../../api";

const initialState = {
  name: "",
  category: "",
  desc: "",
  price: "",
};
function CreateProduct() {
  const [product, setProduct] = useState(initialState);
  const [files, setFiles] = useState("");
  const handleSubmit = e =>{
    e.preventDefault()
    let newProduct = new FormData()
    newProduct.append("name", product.name)
    newProduct.append("desc", product.desc)
    newProduct.append("price", product.price)
    newProduct.append("category", product.category)
    Array.from(files).forEach(i => {
      newProduct.append("rasmlar", i, i.name)
    })
    axios.post("/create/product", newProduct)
      .then(res=> {
        console.log(res)
        setProduct(initialState)
        setFiles("")
      })
      .catch(err=> console.log(err))
      
  }
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
          />
        </div>

        <div>
          <input
            onChange={e => setFiles(e.target.files)}
            required
            type="file"
            multiple
            className="form-control"
            placeholder="Mahsulot rasmi"
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
          >
            <option value="" disabled>
              Tanlang
            </option>
            {category?.map((i) => (
              <option key={i.id} value={i.link}>
                {i.title}
              </option>
            ))}
          </select>
        </div>
        <button>Jonatish</button>
      </form>
    </div>
  );
}

export default CreateProduct;
