import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'

const Add = ({url}) => {

  //const url = "http://localhost:4000";
  const[image,setImage]= useState(false); //saves image
  const [data,setData]= useState({ //saves rest of data
    name:"",
    description:"",
    price:"",
    category:"Shakes"
  })

  //const fileInputRef = useRef(null);

  const onChangeHandler = (event) =>{
    const name= event.target.name;
    const value= event.target.value;
    setData(data=>({...data, [name]:value}))
  }

  const onSubmitHandler = async(event) =>{
    event.preventDefault();
    const formData= new FormData();
    formData.append("name",data.name);
    formData.append("description",data.description);
    formData.append("price",Number(data.price));
    formData.append("category",data.category);
    formData.append("image",image);
    const response = await axios.post(`${url}/api/food/add`,formData);
    if(response.data.success){
      setData({
        name:"",
        description:"",
        price:"",
        category:"Shakes"
      })
      setImage(false)
      toast.success(response.data.message) //notification
    }
    else{
      toast.error(response.data.message)
    }
  }

  return (
    <div className='add'>
      <form className='flex-column' onSubmit={onSubmitHandler}>
        <div className="add-image-upload flex-col">
            <p>Upload Image</p>
            <label htmlFor="image">
                <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />
        </div>
        <div className="add-product-name flex-col">
            <p>Product name</p>
            <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
        </div>
        <div className="add-product-description flex-col">
            <p>Product Description</p>
            <textarea onChange={onChangeHandler} value={data.description} name="description" rows='6' placeholder='Write content here'></textarea>
        </div>
        <div className="add-category-price">
            <div className="add-category flex-col">
                <p>Product Category</p>
                <select onChange={onChangeHandler} value={data.category} name="category">
                    <option value="Shakes">Shakes</option>
                    <option value="Sundaes">Sundaes</option>
                    <option value="Scoops">Scoops</option>
                    <option value="Brownies">Brownies</option>
                </select>
            </div>
            <div className="add-price flex-col">
                <p>Product Price</p>
                <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='Rs. 200' />
            </div>
        </div>
        <button type='submit' className='add-btn'>Add</button>
      </form>
    </div>
  )
}

export default Add
