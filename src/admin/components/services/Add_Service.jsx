import React,{useState} from 'react'

const Add_Skill = () => {
    const [data, setData] = useState({
        name:'', 
        description:'', 
        icon:''
    })
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(data)
        setData({
            name:'', 
            description:'',
            icon:''
        })
        alert("New service added successfully")
    }
  return (
    <>
    <div className="container mb-5 mt-3">
        <div className="row">
            <div className="col">
                <h5 className='text-center m-5'>Add New Service</h5>
            </div>
            </div>
            <div className="row d-flex justify-content-center">
            <div className="col-6">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="type" className="form-label">Service Name</label>
                        <input type="text" className="form-control" id="type" value={data.name} onChange={(e)=>setData({...data,name:e.target.value})} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="domain" className="form-label">Description</label>
                        <textarea type="text" className="form-control" id="domain" value={data.description} onChange={(e)=>setData({...data,description:e.target.value})} required />
                    </div> 
                    <div className="mb-3">
                        <label htmlFor="type" className="form-label">Icon</label>
                        <input type="file" className="form-control" id="type" value={data.icon} onChange={(e)=>setData({...data,icon:e.target.value})}/>
                    </div>
                    
                    <button type="submit" className="btn btn-success mt-3">Submit</button>
                </form>
            </div>
            </div>
            
        
    </div>
    </>
  )
}

export default Add_Skill
