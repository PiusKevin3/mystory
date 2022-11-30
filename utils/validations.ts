export function validateUserSignup(values: {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
    agreedToTerms: boolean
}) {
    let errors: any = {}
    const nameRegex = /^[a-z ,.'-]+$/i
    const emailRegex = /\S+@\S+\.\S+/
    const passwordRegex =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/
    const passwordDesc =
        'at least 8 characters, 1 numeric character, 1 lowercase letter, 1 uppercase letter and 1 special character'

    if (!values.firstName) {
        errors.firstName = 'First name is required.'
    } else if (!nameRegex.test(String(values.firstName))) {
        errors.firstName = 'Invalid first name.'
    }

    if (!values.lastName) {
        errors.lastName = 'Last name is required.'
    } else if (!nameRegex.test(String(values.lastName))) {
        errors.lastName = 'Invalid last name.'
    }

    if (!values.email) {
        errors.email = 'Email address is required.'
    } else if (!emailRegex.test(String(values.email))) {
        errors.email = 'Invalid email address.'
    }

    if (!values.password) {
        errors.password = 'Password is required.'
    } else if (!passwordRegex.test(String(values.password))) {
        errors.password = `Password should contain ${passwordDesc}.`
    }

    if (!values.confirmPassword || values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Passwords do not match.'
    }

    if (!values.agreedToTerms) {
        errors.agreedToTerms = 'Accept our terms and conditions.'
    }

    return errors
}

export function validateUserLogin(values: { email: string; password: string }) {
    let errors: any = {}
    const emailRegex = /\S+@\S+\.\S+/
    const message = 'Invalid email address or password.'

    if (!values.email) {
        errors.email = message
    } else if (!emailRegex.test(String(values.email))) {
        errors.email = message
    }

    // if (!values.password) {
    //     errors.password = message
    // }

    return errors
}
