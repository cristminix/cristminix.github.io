import React,{useState} from "react";
import useSessionState from "../../../shared/useSessionState";
import { useBetween } from "use-between";

const useSharedSessionState = () => useBetween(useSessionState);
export default function FormLogin(props){
	const {isLogedIn,setIsLogedIn} = useSharedSessionState();
	const [email,setEmail] = useState("admin@gmail.com");
	const [password,setPassword] = useState("admin@gmail.com");
	function onFormLogin(evt){
		localStorage["isLogedIn"] = "true";
        setIsLogedIn("true");
        document.location.hash="dashboard";
		evt.preventDefault()
		return false;
	}
    return(
<>
<div className="d-flex flex-center flex-column flex-lg-row-fluid">
					

<div className="w-lg-500px p-10">
    <form className="mt-4 pt-2" id="account" method="post" onSubmit={onFormLogin}>
		<div className="text-center mb-11">
			<h1 className="text-dark fw-bolder mb-3">Masuk</h1>
			<div className="text-gray-500 fw-semibold fs-6"></div>
		</div>
		<div className="fv-row mb-8">
            <input value={email} onChange={()=>{}} type="text" placeholder="Email" autoComplete="off" className="form-control bg-transparent" data-val="true" data-val-email="Isian Email e-mail salah." data-val-required="Isisn Email diperlukan." id="Input_Email" name="Input.Email"/>
            <span className="text-danger field-validation-valid" data-valmsg-for="Input.Email" data-valmsg-replace="true"></span>
		</div>
		<div className="fv-row mb-3">
            <input value={password} onChange={()=>{}} type="password" placeholder="Password" autoComplete="off" className="form-control bg-transparent" data-val="true" data-val-required="Isian Password diperlukan." id="Input_Password" name="Input.Password" />
            <span className="text-danger field-validation-valid" data-valmsg-for="Input.Password" data-valmsg-replace="true"></span>
		</div>
		<div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
			<div></div>
            {/*<a className="link-primary" href="#forgetPasswd">Lupa Password ?</a>*/}
		</div>
		<div className="d-grid mb-10">
			<button type="submit" id="kt_sign_in_submit" className="btn btn-primary">
				<span className="indicator-label">Masuk</span>
				<span className="indicator-progress">
					Mohon menunggu...
					<span className="spinner-border spinner-border-sm align-middle ms-2"></span>
				</span>
			</button>
		</div>
        <div className="text-danger validation-summary-valid" data-valmsg-summary="true"><ul><li style={{display:"none"}}></li>
</ul></div>
		{/*<div className="text-gray-500 text-center fw-semibold fs-6">
			Belum jadi Member?  
            <a className="link-primary" href="#register"> Mendaftar</a>
		</div>*/}
	<input name="__RequestVerificationToken" type="hidden" value={"token"} /></form>
</div>


				</div>
</>
    )
}