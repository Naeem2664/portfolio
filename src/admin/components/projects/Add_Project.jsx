import React,{useState} from 'react'

const Add_Skill = () => {
    const [data, setData] = useState({
        project_name:'', 
        type:'',
        description:'', 
        status:'', 
        start_date:'', 
        end_date:'',
        client_name:'',
    })
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(data)
        setData({
            project_name:'', 
            type:'',
            description:'', 
            status:'', 
            start_date:'', 
            end_date:'',
            client_name:'',
        })
        alert("New project added successfully")
    }
  return (
    <>
    <div className="container mb-5 mt-3">
        <div className="row">
            <div className="col">
                <h5 className='text-center m-5'>Add New Project</h5>
            </div>
            </div>
            <div className="row d-flex justify-content-center">
            <div className="col-6">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="type" className="form-label">Project Name</label>
                        <input type="text" className="form-control" id="type" value={data.job_project_name} onChange={(e)=>setData({...data,project_name:e.target.value})} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="type" className="form-label">Type</label>
                        <input type="text" className="form-control" id="type" value={data.type} onChange={(e)=>setData({...data,type:e.target.value})}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="domain" className="form-label">Description</label>
                        <textarea type="text" className="form-control" id="domain" value={data.description} onChange={(e)=>setData({...data,description:e.target.value})} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="domain" className="form-label">Status</label>
                        <input type="text" className="form-control" id="domain" value={data.status} onChange={(e)=>setData({...data,status:e.target.value})} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Start Date <i>(MM-YYYY)</i></label>
                        <input type="text" className="form-control" id="percentage" value={data.start_date} onChange={(e)=>setData({...data,start_date:e.target.value})} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">End Date <i>(MM-YYYY)</i></label>
                        <input type="text" className="form-control" id="percentage" value={data.end_date} onChange={(e)=>setData({...data,end_date:e.target.value})} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Client Name or Company</label>
                        <input type="text" className="form-control" id="percentage" value={data.client_name} onChange={(e)=>setData({...data,client_name:e.target.value})} required />
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
