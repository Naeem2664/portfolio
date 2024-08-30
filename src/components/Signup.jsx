import { auth} from "../auth/firebase";
import { createUserWithEmailAndPassword ,signInWithPopup,updateProfile,GoogleAuthProvider,FacebookAuthProvider} from "firebase/auth";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
} from "mdb-react-ui-kit";
import RegistrationLoader from '../assets/loaders/RegistrationLoader'
import { useState } from "react";
import { useNavigate ,Link} from "react-router-dom";
import Cookies from 'js-cookie'
function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);
  const [showPassword,setShowPassword]=useState(false)
  const [errormessage,setErrorMessage]=useState('')
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate()
  const handleSubmit = () => {
    setLoading(true)
    if (!name || !email || !password) {
      setError(true)
      setLoading(false)
      setErrorMessage('All the Filds are required')
      return
    }
    else{
        setError(false)
    }
    if(error)
        {
            setErrorMessage('Error while registration!') 
          }
          else{
            createUserWithEmailAndPassword(auth,email,password)
            .then(async(res)=>{
                const user=res.user
               await updateProfile(user,{
                displayName:name
               })
               if(error){
                setLoading(false)
               }
               else{
                   setLoading(true)
               }
               if (res.user.email === "faltooswag@gmail.com") {
                Cookies.set('adminId', res.user.uid, { expires: 7, secure: true, httpOnly: true });
                localStorage.setItem("admin", true);
                localStorage.removeItem("userId");
                alert(
                  "WelCome Muhammad Naeem, you have an admin access to the Site"
                );
                navigate("/admin");
              } else {
                Cookies.remove("adminId");
                localStorage.setItem("admin",false);
                localStorage.setItem("userId", res.user.uid);
                localStorage.setItem("user",true)
                alert("Login Successfully");
                navigate("/");
              }
    
            })
            .catch(err=>{
                if(err){
                    setLoading(false)
                }
                if(err.code === "auth/email-already-in-use"){
                    setError(true)
                    setLoading(false)
                    setErrorMessage("Email already in use")
                    return

                }
                else if(err.code==="auth/weak-password"){
                    setError(true)
                    setLoading(false)
                    setErrorMessage("Password atleast 6 characters or long ")
                }
                console.log("Error- ",err.message)})
          }
        }
  
        const googleLogin = async () => {
          const provider = new GoogleAuthProvider();
          signInWithPopup(auth, provider)
            .then((result) => {
              console.log("here");
              const credential = GoogleAuthProvider.credentialFromResult(result);
              console.log(credential)
              const token = credential.accessToken;
              const user = result.user;
              const uid=result.user.uid
              if(result.user.email==='faltooswag@gmail.com'){
                sessionStorage.setItem("admin",true)
                Cookies.set("adminId",uid)
                localStorage.removeItem("userId")
                alert("WelCome Muhammad Naeem, you have an admin access to the Site")
                navigate("/admin")
                 
               }
               else{
                 sessionStorage.setItem("admin",false)
                 Cookies.remove("adminId")
                 localStorage.setItem("userId",uid)
               alert("Login Successfully")
               navigate("/")
               }
              localStorage.setItem("userId",uid)
              navigate('/')
              console.log(token, user);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
              const email = error.customData.email;
              console.log(email)
              const credential = GoogleAuthProvider.credentialFromError(error);
              console.log(credential)
            });
        };
          
          const facebookLogin = async () => {
            const provider = new FacebookAuthProvider();
            signInWithPopup(auth, provider)
              .then((result) => {
                const user = result.user;
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
                localStorage.setItem(accessToken)
                console.log(user,credential)
                navigate('/')
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                let email = error.customData.email;
                const credential = FacebookAuthProvider.credentialFromError(error);
                console.log(errorCode,errorMessage,email,credential)
              });
          };
  return (
    <MDBContainer
      fluid
      className="p-4 background-radial-gradient overflow-hidden"
    >
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <h1
            className="my-5 display-3 fw-bold ls-tight px-3"
            style={{ color: "hsl(218, 81%, 95%)" }}
          >
            Muhammad <br />
            <span style={{ color: "hsl(218, 81%, 75%)" }}>Naeem</span>
          </h1>

          <p className="px-3" style={{ color: "hsl(218, 81%, 85%)" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora
            at cupiditate quis eum maiores libero veritatis? Dicta facilis sint
            aliquid ipsum atque?
          </p>
        </MDBCol>

        <MDBCol md="6" className="position-relative">
          <div
            id="radius-shape-1"
            className="position-absolute rounded-circle shadow-5-strong"
          ></div>
          <div
            id="radius-shape-2"
            className="position-absolute shadow-5-strong"
          ></div>

          <MDBCard className="my-5 bg-glass">
            <MDBCardBody className="p-5">
            <MDBInput
                wrapperClass="mb-4"
                label="Full Name"
                id="form3"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="form3"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form4"
                type={!showPassword?'password':'text'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              >
              </MDBInput>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Show Password' value={showPassword} onChange={()=>setShowPassword(prev=>!prev)} />
              {error? <MDBRow>
                <MDBCol col="12"><p>{errormessage}</p></MDBCol>
              </MDBRow>:""}

             

              {!loading?<MDBBtn
                
                className="w-100 mb-4 bg-dark"
                size="md"
                onClick={handleSubmit}

              >Register
              </MDBBtn>:<MDBBtn
                className="w-100 mb-4 bg-dark"
                size="md"

              >
                <RegistrationLoader/>
              </MDBBtn>}

              <div className="text-center">
                <p style={{ color: "black" }}>or sign in with:</p>
              </div>
              <MDBRow>
                <MDBCol col="6">
                  <MDBBtn
                  onClick={facebookLogin}
                    className="mb-3 w-100"
                    style={{ color: "#fff", backgroundColor: "#083ed8" }}
                    disabled
                  >
                    <MDBIcon fab icon="facebook-f" size="md" />
                  </MDBBtn>
                </MDBCol>

                <MDBCol col="6">
                  <MDBBtn
                  onClick={googleLogin}
                    className="mb-3 radius-2 w-100"
                    style={{ color: "#fff", backgroundColor: "orangered" }}
                  >
                    <MDBIcon fab icon="google" size="md" />
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol col="12">
                  <p>
                    Already have an account? <Link to={"/login"}>
                      Login
                    </Link>
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
