"use strict";

const inputs = document.querySelectorAll("input");
const submitBtn = document.querySelector(".submit-btn");

inputs.forEach((input)=> {

	input.addEventListener("focus", ()=> {
		const label = input.closest(".label");
    	if (label) label.style.borderColor= "var(--tertiary)";
	});

	input.addEventListener("blur", ()=> {
    	const label = input.closest(".label");
    	if (label) label.style.borderColor= "var(--neutral-2)";
  	});
})

submitBtn.addEventListener("click", (e)=>{
	e.preventDefault();
	let validForm = true;

	inputs.forEach((input)=> {
		const label = input.parentElement;
    	const errorIcon = label.querySelector(".error-icon");
    	const errorText = label.nextElementSibling;

    	label.classList.remove("error");
    	errorIcon.style.display = "none";
    	errorText.textContent = "";
    	input.style.color = "var(--neutral-1)";

		if (input.name === "First Name" && !validNames(input.value)) {
    		input.style.color = "var(--primary)";
      		errorIcon.style.display = "block";
      		errorText.textContent = `Please provide a valid ${input.name}`;
			validForm = false;
    	}

    	if (input.name === "Last Name" && !validNames(input.value)) {
    		input.style.color = "var(--primary)";
      		errorIcon.style.display = "block";
      		errorText.textContent = `Please provide a valid ${input.name}`;
			validForm = false;
    	}

    	if (input.name === "Email" && !validEmail(input.value)) {
    		input.style.color = "var(--primary)";
      		errorIcon.style.display = "block";
      		errorText.textContent = `Please provide a valid ${input.name}`;
			validForm = false;
       	}

    	if (input.name === "Password" && !validPassword(input.value)) {
    		input.style.color = "var(--primary)";
      		errorIcon.style.display = "block";
      		errorText.textContent = `Please provide a valid ${input.name}`;
			validForm = false;
    	}
	});

	if (validForm) {
		document.body.innerHTML = ` 
			<section>
				<div class="thank-you">
					<p class="title comeInUp">Thank <span class="accent">You!</span></p>
				</div>
			</section>
		` ;
	}
});

const validNames = (name)=> {
	const nameRegex = /^[a-zA-Z]{1,12}$/;
	return nameRegex.test(name);
}

const validEmail = (email)=> {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

const validPassword = (password)=> {
	const passwordRegex = /^.{1,15}$/;
	return passwordRegex.test(password);
}