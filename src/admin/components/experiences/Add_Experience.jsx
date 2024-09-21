import React,{useState} from 'react'

const Add_Skill = () => {
    const [data, setData] = useState({
        job_title:'', 
        company:'', 
        start_date:'', 
        end_date:'', 
        city:'',
        tasks:''
    })
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(data)
        setData({
        job_title:'', 
        company:'', 
        start_date:'', 
        end_date:'', 
        city:'',
        tasks:''
        })
        alert("New experience added successfully")
    }
  return (
    <>
    <div className="container mb-5 mt-3">
        <div className="row">
            <div className="col">
                <h5 className='text-center m-5'>Add New Experience</h5>
            </div>
            </div>
            <div className="row d-flex justify-content-center">
            <div className="col-6">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="type" className="form-label">Job Title</label>
                        <input type="text" className="form-control" id="type" value={data.job_title} onChange={(e)=>setData({...data,job_title:e.target.value})}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="domain" className="form-label">Company</label>
                        <input type="text" className="form-control" id="domain" value={data.company} onChange={(e)=>setData({...data,company:e.target.value})} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Start Date <i>(MM-YYYY)</i></label>
                        <input type="text" className="form-control" id="percentage" value={data.start_date} onChange={(e)=>setData({...data,start_date:e.target.value})} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">End Date <i>(MM-YYYY) or Present</i></label>
                        <input type="text" className="form-control" id="percentage" value={data.end_date} onChange={(e)=>setData({...data,end_date:e.target.value})} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">City</label>
                        <input type="text" className="form-control" id="percentage" value={data.city} onChange={(e)=>setData({...data,city:e.target.value})} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Tasks</label>
                        <textarea type="text" className="form-control" id="percentage" value={data.tasks} onChange={(e)=>setData({...data,tasks:e.target.value})} />
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
