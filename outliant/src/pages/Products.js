import React, { useState } from "react";
import ThirdSection from '../components/ThirdSection'

export default function Products() {
  const [searchValue, setSearchValue] = useState("");
  const [productList, setProductList] = useState([
    { id: 1, name: "Lorem ipsum", price: 2 },
  ]);
  const [nameInput, setNameInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      handleEditFormSubmit(editIndex);
    } else {
      const newProduct = {
        id: Date.now(),
        name: nameInput,
        price: parseFloat(priceInput),
      };
      setProductList([...productList, newProduct]);
      setNameInput("");
      setPriceInput("");
    }
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    const newProductList = [...productList];
    newProductList.splice(index, 1);
    setProductList(newProductList);
  };
  const handleEdit = (index) => {
    setEdit(true);
    const product = productList[index];
    setNameInput(product.name);
    setPriceInput(product.price.toString());
    setEditIndex(index);
  };
  const handleEditFormSubmit = (index) => {
    const updatedProductList = productList.map((product) =>
      product.id === productList[index].id
        ? { ...product, name: nameInput, price: parseFloat(priceInput) }
        : product
    );
    setProductList(updatedProductList);
    setEdit(false);
    setNameInput("");
    setPriceInput("");
  };

  return (
    <div className="mt-20">
      <div className="flex flex-row ml-8">
        <h1 className="text-3xl font-bold mb-4 mr-8">Products</h1>
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search for keywords"
            className="p-2 border rounded-md "
            value={searchValue}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className="flex flex-row justify-evenly">
        <div>
          <table className="table-auto border border-solid border-gray-400 w-full ">
            <thead>
              <tr>
                <th className="border border-solid border-gray-400 px-4 py-2 bg-slate-100">
                  Name
                </th>
                <th className="border border-solid border-gray-400 px-4 py-2 bg-slate-100">
                  Price
                </th>
                <th className="border border-solid border-gray-400 px-4 py-2 bg-slate-100">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {productList
                .filter((product) =>
                  product.name.toLowerCase().includes(searchValue.toLowerCase())
                )
                .map((product, index) => (
                  <tr key={product.name}>
                    <td className="border border-solid border-gray-400 px-4 py-2">
                      {product.name}
                    </td>
                    <td className="border border-solid border-gray-400 px-4 py-2">
                      ${product.price.toFixed(2)}
                    </td>
                    <td className="border border-solid border-gray-400 px-4 py-2">
                      <button
                        className="bg-black px-6 py-2 rounded-md text-sm font-medium text-white mr-2"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-white px-6 py-2 rounded-md text-sm font-medium text-black outline outline-1"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <div className="bg-slate-100 p-10 ">
          <h2 className="text-left text-6xl  tracking-tight text-black sm:text-6xl ">
            Lorem ipsum dolor sit amet, consectetur
          </h2>
          <p className="text-left mt-6 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus
          </p>
          <form onSubmit={handleFormSubmit} className="mt-4">
            <input
              type="text"
              placeholder="Name"
              id="nameInput"
              className="p-2 border rounded-md w-full mb-4"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            />

            <input
              type="number"
              placeholder="Price"
              id="priceInput"
              className="p-2 border rounded-md w-full mb-4"
              value={priceInput}
              onChange={(e) => setPriceInput(parseFloat(e.target.value))}
            />

            <button
              type="submit"
              className="bg-black px-5 py-3 rounded-md text-sm font-medium text-white"
            >
              {edit ? "Save" : "Create"}
            </button>
          </form>
        </div>
      </div>
      <div className="pt-20">

      <ThirdSection/>
      </div>
    </div>
  );
}
