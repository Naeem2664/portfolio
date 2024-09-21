import React,{useState} from 'react'

const Add_Skill = () => {
    const [data, setData] = useState({
        program:'', 
        degree:'', 
        degree_title:'', 
        institute_name:'', 
        city:'',
        completion_year:''
    })
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(data)
        setData({
            program: "",
            degree:'',
            degree_title: '',
            institute_name: '',
            city:'',
            completion_year: ''
        })
        alert("Education Added Successfully")
    }
  return (
    <>
    <div className="container mb-5 mt-3">
        <div className="row">
            <div className="col">
                <h5 className='text-center m-5'>Add New Education</h5>
            </div>
            </div>
            <div className="row d-flex justify-content-center">
            <div className="col-6">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="type" className="form-label">Program</label>
                        <input type="text" className="form-control" id="type" value={data.program} onChange={(e)=>setData({...data,program:e.target.value})}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="domain" className="form-label">Degree</label>
                        <input type="text" className="form-control" id="domain" value={data.degree} onChange={(e)=>setData({...data,degree:e.target.value})} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Degree Title</label>
                        <input type="text" className="form-control" id="percentage" value={data.degree_title} onChange={(e)=>setData({...data,degree_title:e.target.value})} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Institute Name</label>
                        <input type="text" className="form-control" id="percentage" value={data.institute_name} onChange={(e)=>setData({...data,institute_name:e.target.value})} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">City</label>
                        <input type="text" className="form-control" id="percentage" value={data.city} onChange={(e)=>setData({...data,city:e.target.value})} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Completion Year</label>
                        <input type="date" className="form-control" id="percentage" value={data.completion_year} onChange={(e)=>setData({...data,completion_year:e.target.value})} />
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
