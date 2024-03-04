import React from 'react'

export default function Fruits() {
   let fruits= [{
        name:"Apple",
        description: "This is dummy text",
        price:3,
        image: "https://5.imimg.com/data5/AK/RA/MY-68428614/apple.jpg",
    },
    {
        name:"Banana",
        description: "This is dummy text",
        price:2,
        image:"https://5.imimg.com/data5/ANDROID/Default/2022/2/UT/VN/SF/29630129/product-jpeg-250x250.jpg",
    },
    {
        name:"Orange",
        description: "This is dummy text",
        price:4,
        image:"https://5.imimg.com/data5/SELLER/Default/2022/9/OH/QA/NX/45117192/fresh-nagpur-orange-500x500.png"
    },
    {
        name:"Papaya",
        description: "This is dummy text",
        price:6,
        image:"https://5.imimg.com/data5/SELLER/Default/2021/3/QL/AL/BR/86539219/papaya-fruit-500x500.jpg"
    },
    {
        name:"Cherry",
        description: "This is dummy text",
        price:7,
        image:"https://5.imimg.com/data5/ANDROID/Default/2024/2/390090761/JF/XV/GV/85845923/product-jpeg-500x500.jpeg"
    },
    {
        name:"Strawberry",
        description: "This is dummy text",
        price:9,
        image:"https://5.imimg.com/data5/SELLER/Default/2023/12/373118026/XZ/HR/YH/28942657/fresh-organic-strawberries-500x500.jpg"
    }]
  return (
    <div>
        {fruits.map((value,index)=>(
            <div class="container">
                <div><img src={value.image} width={175} height={150} alt='fruitimg'></img></div>
                <div id="fname">{value.name}</div>
                <div>{value.description}</div>
                <div>{value.price}</div>
                <div><button id="btn" onclick="addCart(${index})">ADD</button></div>
            </div> 

            ))
        }
    </div>
  )
}
