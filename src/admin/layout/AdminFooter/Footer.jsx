import {
  MDBFooter,
  MDBContainer,
 
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function FooterComponent() {
  return (
    <div className="footer" style={{bottom:'0',width:'100%'}}>
      <MDBFooter className='bg-light text-center text-white'>
     

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:s
          MuhammadNaeem.com
      </div>
    </MDBFooter>
    </div>
    
  );
}