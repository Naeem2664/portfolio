import axios from 'axios'
import React,{useState} from 'react'

const Add_About = () => {
    const [data, setData] = useState({
        name: "",
        whatsapp:'',
        github: '',
        linkedin: '',
        bio:'',
        address:'',
        city:'',
        country:''
    })
    const handleSubmit=async(e)=>{
        e.preventDefault()
        console.log(data)
        try {
            const response = await axios.post("http://localhost:3002/about/add-new",data)
            console.log(response,data)
            setData({name: " ",whatsapp:'',github: '',linkedin: '',bio:'',address:'',city:'',country:'' })
            alert("New About Added Successfully")
            if(response.status===200){
                window.location.reload()
            }
        } catch (error) {
            alert("Something went wrong")
            console.log(error)
        }
    }
  return (
    <>
    <div className="container mb-5 mt-3">
        <div className="row">
            <div className="col">
                <h5 className='text-center m-5'>Add New About info</h5>
            </div>
            </div>
            <div className="row d-flex justify-content-center">
            <div className="col-6">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="type" className="form-label">Name</label>
                        <input type="text" className="form-control" id="type" value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="domain" className="form-label">WhatsApp</label>
                        <input type="text" className="form-control" id="whtasapp" value={data.whatsapp} onChange={(e)=>setData({...data,whatsapp:e.target.value})} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Gmail</label>
                        <input type="email" className="form-control" id="email" value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="percentage" className="form-label">Github</label>
                        <input type="text" className="form-control" id="github" value={data.github} onChange={(e)=>setData({...data,github:e.target.value})} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="percentage" className="form-label">LinkedId</label>
                        <input type="text" className="form-control" id="github" value={data.linkedin} onChange={(e)=>setData({...data,linkedin:e.target.value})} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="percentage" className="form-label">Bio</label>
                        <textarea type="text" className="form-control" id="github" value={data.bio} onChange={(e)=>setData({...data,bio:e.target.value})} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="percentage" className="form-label">Address</label>
                        <textarea type="text" className="form-control" id="github" value={data.address} onChange={(e)=>setData({...data,address:e.target.value})} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="percentage" className="form-label">City</label>
                        <input type="text" className="form-control" id="github" value={data.city} onChange={(e)=>setData({...data,city:e.target.value})} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="percentage" className="form-label">Country</label>
                        <input type="text" className="form-control" id="github" value={data.country} onChange={(e)=>setData({...data,country:e.target.value})} />
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
            </div>
    </div>
    </>
  )
}

export default Add_About
