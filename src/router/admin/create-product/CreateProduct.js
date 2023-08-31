import React from 'react';
import './CreateProduct.css';

function CreateProduct() {
  return (
    <div className="create__product">
    <h3>Mahsulot qo'shish uchun formani to'ldiring!</h3>
    <form>
      <div>
        <input
          required
          type="text"
          className="form-control"
          placeholder="Mahsulot nomi"
        />
      </div>
      <div>
        <input
          required
          type="number"
          className="form-control"
          placeholder="Mahsulot narhi"
        />
      </div>
     
      <div>
        <input
          required
          type="file"
          multiple
          className="form-control"
          placeholder="Mahsulot rasmi"
        />
      </div>
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="Mahsulot Tavsifi"
        />
      </div>
      <button>Jonatish</button>
    </form>
  </div>
  );
}

export default CreateProduct;
