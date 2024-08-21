import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function page() {
  const [products, setProducts] = useState<any>();
    // đi gọi api lấy data để đi render ra màn hình trình duyệt!

    // fetch
    // axios

    useEffect(()=>{
        axios.get("http://localhost:3001/products")
        .then((response)=>{
          console.log("data", response)
          setProducts(response.data.data)
        })
        .catch((err)=>{
          
        })
    }, [])
    const handleClick = (id:number) =>{
      console.log("gia tri id", id);
      axios.get(`http://localhost:3001/products${id}`)
      .then((response)=>{
        console.log("chi tiet san pham", response.data.data);
      })
      .catch(err => {
        console.log("err", err)
      })
    }
  return (
    <div>danh sach san pham
      {products?.map((item:any)=>{
        return (
          <div key={item.id}>
            <p>ten: {item.name}</p>
            <p>gia: {item.price}</p>
            <button onClick={()=>handleClick(item.id)}>chi tiet san pham</button>
            <p>****************</p>
          </div>
        )
      })}
    </div>
  )
}
