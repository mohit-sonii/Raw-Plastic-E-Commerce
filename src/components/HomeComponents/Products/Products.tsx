import './Products.css'
import Card from "./Card"
import React from 'react'
import Button from "@/components/Button/Button"

const Products: React.FC = () => {
   return (
      <div id="product-section">
         <div id="cards" className="flex">
            <Card image={"/HDPE.jpg"} title={"HDPE"} />
            <Card image={"/LDPE.jpg"} title={"LDPE"} />
            <Card image={"/PP.jpg"} title={"PP"} />
            <Card image={"/PET-Flakes.jpg"} title={"PET Flakes"} />
            <Card image={"/LDPE-Regrind.jpg"} title={"LDPE Regrind"} />
            <Card image={"/LDPE-Recycled.jpg"} title={"LDPE Recycled"} />
         </div>
         <div className="product-button">
            <Button destination={'/products'} text={"VIEW ALL PRODUCTS"} btnColor={"#1d1d1d"} />
         </div>
      </div>
   )
}

export default Products