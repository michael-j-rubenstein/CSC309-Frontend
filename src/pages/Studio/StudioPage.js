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
import ClassesList from "../../components/Classes/ClassesList";
import './StudioPage.module.css';

const StudioPage = () => {
    const {id} = useParams();
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();
    const [amenities, setAmenities] = useState();
    const [images, setImages] = useState();
    const [classes, setClasses] = useState();
    const [search_name, setSearchname] = useState();
    const [search_coach, setCoach] = useState();
    const [search_start, setStart] = useState();
    const [search_end, setEnd] = useState();
    const [search_date, setDate] = useState();
    const classes_copy = null;

    var token = localStorage.getItem("SavedToken")
    useEffect(() =>{
        axios.get(`${process.env.REACT_APP_BACKEND_URL}studios/${id}/`, { headers:
            {
                Authorization: `${token}`
            }
            })
        .then(response =>{
            const data = response.data
            setName(data["name"]);
            setAddress(data["address"]);
            setPhone(data["phone_num"]);
            setAmenities(data["amenities"]);
            setImages(data["images"]);
            setClasses(data["classes"]);
            classes_copy = [...classes];
        })
    },[]) 
    console.log("classes")
    console.log(classes)

    const ImageData = [];
    if (images != null){
        for (const value of images){
            var image_url = `${process.env.REACT_APP_BACKEND_URL}`.concat(value.substring(1))
            ImageData.push({'image': image_url})
        }
    }

    const searchHandler = (e) =>{
        e.preventDefault();
        var request_body = {}
        if(search_date !== undefined){
        const date_lst = search_date.split("/")
        const date_dict =  {"year": parseInt(date_lst[0]), "month": parseInt(date_lst[1]), "day": parseInt(date_lst[2])}
        request_body["date"] = date_dict
        }
        if(search_start !== undefined){
        const start_lst = search_start.split(":")
        const start_dict = {"hour": parseInt(start_lst[0]), "minute": parseInt(start_lst[1])}
        request_body["start_time"] = start_dict;
        }
        if(search_end !== undefined){
            const end_lst = search_end.split(":")
            const end_dict = {"hour": parseInt(end_lst[0]), "minute": parseInt(end_lst[1])}
            request_body["end_time"] = end_dict
        }
        if(search_coach !== undefined){
            request_body["coach"] = search_coach
        }
        if(search_name !== undefined){
            request_body["classname"] = search_name
        }
        console.log(request_body)
        axios.post(`${process.env.REACT_APP_BACKEND_URL}classes/${id}/searchclasses/`, {headers: {Authorization: `${token}`}, 
        body: request_body,
        }).then(res =>{
            console.log(res.data)
            setClasses(res.data);
        })
    }

    // const restoreHandler = () => {
    //     setClasses(classes_copy)
    // }

    return (
        <>
        <Wrapper>
            <Title className="section">{name}</Title>
            <ImageSlider ImageData={ImageData} />
            <form onSubmit={searchHandler}>
                <label>
                    Search for class
                </label>
                <label htmlFor="searchName">
                    Class Name
                </label>
                <input id="searchName" type="text" placeholder="yoga" onChange={(e) => setSearchname(e.target.value)}/>
                <label htmlFor="searchDate">
                    Date
                </label>
                <input id="searchDate" type="text" placeholder="2023/1/15" onChange={(e) => setDate(e.target.value)}/>
                <label htmlFor="searchCoach">
                    Coach
                </label>
                <input id="searchCoach" type="text" placeholder="kex" onChange={(e) => setCoach(e.target.value)}/>
                <label htmlFor="searchStart">
                    Start Time
                </label>
                <input id="searchStart" type="text" placeholder="14:00" onChange={(e) => setStart(e.target.value)}/>
                <label htmlFor="searchEnd">
                    End Time
                </label>
                <input id="searchEnd" type="text" placeholder="16:30" onChange={(e) => setEnd(e.target.value)}/>
                <input type="submit" value="search"/>
            </form>
            {/* <button onClick={restoreHandler}>reset search</button> */}
            <ClassesList ClassesData={classes} id={id}/>

        </Wrapper>
        </>
    )
};

export default StudioPage;
