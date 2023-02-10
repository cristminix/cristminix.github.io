import React from "react";

export default function FormLogin(props){

    return(
<>
<div class="d-flex flex-center flex-column flex-lg-row-fluid">
					

<div class="w-lg-500px p-10">
    <form class="mt-4 pt-2" id="account" method="post">
		<div class="text-center mb-11">
			<h1 class="text-dark fw-bolder mb-3">Sign In</h1>
			<div class="text-gray-500 fw-semibold fs-6"></div>
		</div>
		<div class="fv-row mb-8">
            <input type="text" placeholder="Email" autocomplete="off" class="form-control bg-transparent" data-val="true" data-val-email="The Email field is not a valid e-mail address." data-val-required="The Email field is required." id="Input_Email" name="Input.Email" value="" />
            <span class="text-danger field-validation-valid" data-valmsg-for="Input.Email" data-valmsg-replace="true"></span>
		</div>
		<div class="fv-row mb-3">
            <input type="password" placeholder="Password" autocomplete="off" class="form-control bg-transparent" data-val="true" data-val-required="The Password field is required." id="Input_Password" name="Input.Password" />
            <span class="text-danger field-validation-valid" data-valmsg-for="Input.Password" data-valmsg-replace="true"></span>
		</div>
		<div class="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
			<div></div>
            <a class="link-primary" href="/Identity/Account/ForgotPassword?returnUrl=%2FDashboard">Forgot Password ?</a>
		</div>
		<div class="d-grid mb-10">
			<button type="submit" id="kt_sign_in_submit" class="btn btn-primary">
				<span class="indicator-label">Sign In</span>
				<span class="indicator-progress">
					Please wait...
					<span class="spinner-border spinner-border-sm align-middle ms-2"></span>
				</span>
			</button>
		</div>
        <div class="text-danger validation-summary-valid" data-valmsg-summary="true"><ul><li style="display:none"></li>
</ul></div>
		<div class="text-gray-500 text-center fw-semibold fs-6">
			Not a Member yet?
            <a class="link-primary" href="/Identity/Account/Register?returnUrl=%2FDashboard">Sign up</a>
		</div>
	<input name="__RequestVerificationToken" type="hidden" value="CfDJ8NcYvrYdyhtGkh63jb--tDIjfDWIlnjIF_MM3OuLUDAFHv2olMh8M6l2NXMk415ImaPZIjWTOc4K6YqzdT2fATh08tFcotGuyIvhFKpiZPwIDvFyznT5w67rzZZStPxgaCzD1gheF45FwDny3PI8mXU" /></form>
</div>


				</div>
</>
    )
}