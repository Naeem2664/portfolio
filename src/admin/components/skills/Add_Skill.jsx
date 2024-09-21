import React,{useState} from 'react'

const Add_Skill = () => {
    const [data, setData] = useState({
        type: "",
        domain:'',
        description: '',
        percentage: ''
    })
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(data)
        setData({
            type: "",
            domain:'',
            description: '',
            percentage: ''
        })
        alert("Skill Added Successfully")
    }
  return (
    <>
    <div className="container mb-5 mt-3">
        <div className="row">
            <div className="col">
                <h5 className='text-center m-5'>Add New Skill</h5>
            </div>
            </div>
            <div className="row d-flex justify-content-center">
            <div className="col-6">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="type" className="form-label">Type</label>
                        <input type="text" className="form-control" id="type" value={data.type} onChange={(e)=>setData({...data,type:e.target.value})}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="domain" className="form-label">Domain</label>
                        <input type="text" className="form-control" id="domain" value={data.domain} onChange={(e)=>setData({...data,domain:e.target.value})} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Percentage</label>
                        <input type="text" className="form-control" id="percentage" value={data.percentage} onChange={(e)=>setData({...data,percentage:e.target.value})} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="percentage" className="form-label">Description</label>
                        <textarea type="text" className="form-control" id="decription" value={data.description} onChange={(e)=>setData({...data,description:e.target.value})} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            </div>
            
        
    </div>
    </>
  )
}

export default Add_Skill
