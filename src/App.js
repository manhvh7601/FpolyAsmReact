import React, { useEffect, useState } from "react";
import CategoryAPI from "./api/categoryAPI";
import ProductAPI from "./api/productAPI";
import Routes from "./routes";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data: products } = await ProductAPI.getAll();
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  //delete
  const onRemoveProduct = async (id) => {
    try {
      await ProductAPI.remove(id);
      const newProducts = products.filter((item) => item.id !== id);
      setProducts(newProducts);
    } catch (error) {
      console.log(error);
    }
  };
  //add
  const onAddProduct = async (item) => {
    try {
      const { data } = await ProductAPI.add(item);
      setProducts([...products, data]);
    } catch (error) {
      console.log(error);
    }
  };
  //edit
  const onEditProduct = async (id, item) => {
    try {
      const { data } = await ProductAPI.edit(id, item);
      const newProducts = products.map((product) =>
        product.id === id ? item : product
      );
      setProducts(newProducts, data);
    } catch (error) {
      console.log(error);
    }
  };
  //cate getAll
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getcategories = async () => {
      try {
        const { data: categories } = await CategoryAPI.getAll();
        setCategories(categories);
      } catch (error) {
        console.log(error);
      }
    };
    getcategories();
  }, []);
  //delete
  const onRemoveCate = async (id) => {
    try {
      await CategoryAPI.remove(id);
      const newCate = categories.filter((item) => item.id !== id);
      setCategories(newCate);
    } catch (error) {
      console.log(error);
    }
  };
  //add
  const onAddCate = async (item) => {
    try {
      const { data } = await CategoryAPI.add(item);
      setCategories([...categories, data]);
    } catch (error) {
      console.log(error);
    }
  };
  //edit
  const onEditCate = async (id, item) => {
    try {
      const { data } = await CategoryAPI.edit(id, item);
      const newCate = categories.map((cate) =>
        cate.id === id ? item : cate
      );
      setCategories(newCate, data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Routes
      products={products}
      onRemove={onRemoveProduct}
      onAdd={onAddProduct}
      onEdit={onEditProduct}
      categories={categories}
      onRemoveCate={onRemoveCate}
      onAddCate={onAddCate}
      onEditCate={onEditCate}
    />
  );
}

export default App;
