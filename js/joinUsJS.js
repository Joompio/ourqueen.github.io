/**      
    Project 3 
    Name:Ryan Victoria
    Date: april 22 2022
    Description: js for joinUS page
*/



document.addEventListener("DOMContentLoaded", load);

function load()
{
    // Event Listeners
    document.getElementById("joinUsFORM").addEventListener("submit", validate);
    document.getElementById("clear").addEventListener("click", resetForm);

    hideErrors();
}

function hideErrors()
{
    let error = document.getElementsByClassName("error");

    for (let i = 0; i < error.length; i++)
    {
        error[i].style.display = "none";
    }
}

function resetForm(e)
{
    if (confirm('Clear Details?'))
    {
        hideErrors();
        return true;
    }
    e.preventDefault();
    return false;
}

function validate(e)
{
    hideErrors();

    if (formHasErrors())
    {
        e.preventDefault();
        return false;
    }

    return true;
}

function trim(str)
{
    return str.replace(/^\s+|\s+$/g,"");
}

function formHasErrors()
{
    let errorFlag = false;

    let errorFields = ["fullname","phonenumber","email"]
    
    for(let i = 0; i <errorFields.length; i++)
    {
        let textField = document.getElementById(errorFields[i]);
		let textFieldTrimmed = trim(textField.value);

        if(textFieldTrimmed == null || textFieldTrimmed == "")
		{

			document.getElementById(errorFields[i] + "_error").style.display = "block";

			if(!errorFlag)
			{
				textField.focus();
				textField.select();
			}
			errorFlag = true;
		}
    }
    let phonenumberInput = document.getElementById("phonenumber").value;
    let emailInput = document.getElementById("email").value;

    let phonenumberRegex = new RegExp(/^\d{10}$/);
    if(!phonenumberRegex.test(phonenumberInput) && phonenumberInput != "")
    {
        document.getElementById("phonenumberformat_error").style.display = "block";

        if(!errorFlag)
        {
            document.getElementById("phonenumber").focus();
            document.getElementById("phonenumber").select();
        }
        errorFlag = true;
    }
    
    let emailRegex = new RegExp(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/);
    if(!emailRegex.test(emailInput) && emailInput != "")
    {
        document.getElementById("emailformat_error").style.display = "block";

        if(!errorFlag)
        {
            document.getElementById("email").focus();
            document.getElementById("email").select();
        }
        errorFlag = true;
    }


    return errorFlag;
}