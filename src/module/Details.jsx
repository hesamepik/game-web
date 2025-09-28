import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductdetail } from "../components/Context.jsx"
import "./Details.css";
function Details() {
  const { id } = useParams()
  const productDetails = useProductdetail(+id)

  const [product, setProduct] = useState(productDetails)

  useEffect(() => {
    if (productDetails) {
      setProduct(productDetails)
    }
  }, [productDetails])

  if (!product) {
    return <h2>در حال بارگذاری ...</h2>  // تا وقتی product آماده بشه
  }

  return (
      <div className="details-page">
      <div className="details-container">
        <div className="details-img">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="details-info">
          <h1>{product.title}</h1>
          <h3>حجم: {product.desc}</h3>
          <h3>قیمت: {product.price} تومان</h3>
          <button>افزودن به سبد خرید</button>
        </div>
      </div>
    </div>
  )
}

export default Details
