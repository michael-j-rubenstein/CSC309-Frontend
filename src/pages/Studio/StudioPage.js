import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ClassList from "../../components/Class/ClassList";
import MyInfoInput from "../../components/Forms/MyInfoInput";
import InvoiceHistory from "../../components/Invoice/InvoiceHistory";
import InvoiceUpcoming from "../../components/Invoice/InvoiceUpcoming";
import Wrapper from "../../components/Layout/Wrapper";
import Title from "../../components/Text/Title";
import axios from "axios";
import ImageSlider from "../../components/Images/ImageSlider";
import './StudioPage.module.css';

const StudioPage = () => {
    const {id} = useParams();
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();
    const [amenities, setAmenities] = useState();
    const [images, setImages] = useState();
    const [classes, setClasses] = useState();

    var token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcwMzg2NDIyLCJpYXQiOjE2NzAzODI4MjIsImp0aSI6IjJmNGQ4ZDRmN2JlMjQyOGViOTA0M2FiNWFkYjAwMDg0IiwidXNlcl9pZCI6MX0.SSf1vqJlNLw9x28olAIoiGUpTnn1WDlgE9KJ8lcQz00"
    
    useEffect(() =>{
        axios.get(`${process.env.REACT_APP_BACKEND_URL}studios/${id}/`, { headers:
            {
                Authorization: `${token}`
            }
            })
        .then(response =>{
            const data = response.data
            console.log(data)
            setName(data["name"]);
            setAddress(data["address"]);
            setPhone(data["phone_num"]);
            setAmenities(data["amenities"]);
            setImages(data["images"]);
            setClasses(data["classes"])
    
        })
    },[]) 

    const ImageData = [];
    // console.log(images[0])
    if (images != null){
        for (const value of images){
            var image_url = `${process.env.REACT_APP_BACKEND_URL}`.concat(value.substring(1))
            ImageData.push({'image': image_url})
            // console.log(value)
        }
        console.log(ImageData)
    }

    return (
        <>
        <Wrapper>
            <Title className="section">{name}</Title>
            <ImageSlider ImageData={ImageData} />
        </Wrapper>
        </>
    )
};

export default StudioPage;
