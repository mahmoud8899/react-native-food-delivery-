const ObjectMaps = {

    IsPassword: ValidationPassword,
    isEmail: ValidationEmial,
    isUsername: ValidationUsername,

}



// validation username
function ValidationUsername(valueEmail) {
    return valueEmail.length >= 6
}


// validation password
function ValidationPassword(inputValue) {

    return inputValue.length >= 3
}

// validation Email
function ValidationEmial(enteredPhone) {
    //  console.log(enteredPhone)

    return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(enteredPhone)

    // return /^[0-9]+$/.test(enteredPhone);
}






export const Validate = (inputValue, rutes) => {

    let isValid = true

    for (let rute of rutes) {

        isValid = isValid && ObjectMaps[rute.key](inputValue)
    }



    return isValid
}