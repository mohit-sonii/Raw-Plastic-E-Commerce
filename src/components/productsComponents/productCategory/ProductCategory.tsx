import React from 'react'
import "./ProductCategory.css"

interface Props {
   category: string
   image: string
}

const ProductCategory: React.FC<Props> = ({ category, image }) => {
   return (
      <div id="productCategory" style={{ backgroundImage: `url(${image})` }}>
         <p className='category-product'>{category}</p>
      </div>
   )
}

export default ProductCategory