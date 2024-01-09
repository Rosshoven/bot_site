// Get formik for the form 
import { useFormik } from "formik";
// Need useState for what is displayed and 
import { useState } from "react";
// importing the yup schema for formik validation
import { loginSchema } from "../schemas/login-schema";
// importing the Account Context
import { useAccountContext } from "./account-context";
import { Link } from "react-router-dom";
import '../grail.css';

export default function Login() {
    // defining the handleSetAccountData by destructring. Will be imperitive to use to update the accounts, coming from the Account Context so it will be saved.
    const { handleSetAccountData, accounts, setLoggedIn } = useAccountContext();

    const inputStyle = {
        maxWidth: '70%',
        fontSize: '.8em',
        backgroundColor: 'lightgrey',
        borderRadius: '.3rem',
        overflow: 'auto',                           
        alignItems: 'center',
        margin: '1% 4%',
        padding: '1% 2%',
        autocomplete: 'off',
        border: '1px solid black', 
}
    // useState hook used to display text on the button: Create Another Account' OR 'Create Account'  
    // const [createAccountTrue, setCreateAccountTrue] = useState(false);
    // show state sets what is displayed on page: Form or Success message
    const [show, setShow] = useState(true);

    // onSubmit function. "values" is the user information submitted and "actions" are a long set of methods provided by formik. I end up using resetForm(). The values I then pass into handleSetAccountData() that lives in account-context
    async function onSubmit(values, actions) {
        console.log(values);
        console.log(actions);
        console.log(`Am I logging in ${values.userName}`);

        // Call fetch to server, asking if submitted email and password matches any in db. 
        // relative path...took out localhost 3000 so this fetch will work with any URL 
        const response = await fetch(`/account/login/${values.userName}/${values.password}`);
            if (!response.ok) {
                return alert("Please Enter a valid user");
            }
        
        // IMPORTANT. Taking the authenticated values submitted and 1)adding it to account-context to put email in top-right hand corner 2)setting loggedIn to true so navbar changes for a logged in user
        handleSetAccountData(values);
        setLoggedIn(true)
    
        actions.resetForm({
            value: {
                // the type of `values` inferred to be Blog
                userName: '',
                password: ''
        },
        });
        // setCreateAccountTrue(true);
        setShow(false);
    }
    
    
    // destrucuring formik
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            userName: '',
            password: ''
        },
        // with below the form will use the schema to validate the form
        validationSchema: loginSchema,
        // Once validated and button clicked, run onSubmit function which is defined above. 
        onSubmit,
    });

    console.log(errors);


    return (
        // show initial state is true so the form starting below will be displayed
        show ? 
        
        <div className='card form-control relative' 
        style={{ 
            backgroundColor: '#d48c', 
            // marginTop: '1%', 
            padding: '5%',
            height: '100vh' }}
            >

            <form onSubmit={handleSubmit} autoComplete="off">

                <div className="card-body" id="accountCard">
                    
                <button 
                    className="btn btn-outline-dark"
                    // disabled={ values.password.length === 0 && values.confirmPassword.length === 0 ? true : false } 
                    type="submit" 
                    style={{ 
                        margin: '1% auto', 
                        // padding: '2%', 
                        // backgroundColor: 'black', 
                        // color: 'black',
                        borderRadius: '1rem', 
                        fontFamily: 'Forum, cursive', 
                        fontSize: '1rem', 
                        // fontWeight: 'bold', 
                        display: 'flex', 
                        justifyContent: 'center' }}
                        >Login</button>
     
                        <input
                            style={inputStyle}
                            id="userName"
                            type="text"
                            placeholder="Enter Username"
                            value={values.userName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.userName && touched.userName ? "input-error form-control" : "form-control"} />
                        {errors.userName && touched.userName && <p style={{ fontSize: '.5em', color: 'white' }} className="error">{errors.userName}</p>}

                        {/* <label htmlFor="password">Password</label> */}
                        <input
                            style={inputStyle}
                            id="password"
                            type="password"
                            placeholder="Enter password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.password && touched.password ? "input-error form-control" : "form-control"} />
                        {errors.password && touched.password && <p style={{ fontSize: '.5em', color: 'white' }} className="error">{errors.password}</p>}

                    </div>
            </form> 
        </div>
        : (



            <div style={{
                margin: '0 3%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
                }}>

                            <h6 style={{
                                    backgroundColor: 'pink',
                                    borderRadius: '.5rem', 
                                    border: '1px black solid',
                                    padding: '0 1%',
                            }}>Welcome Back {accounts.map((account) => account.userName)}</h6>

                            <a style={{
                                    backgroundColor: 'pink', 
                                    border: '1px black solid',
                                    maxWidth: '50%',
                                    fontSize: '.7rem'
                            }}className=" btn btn-outline-success"
                            href='guan'
                            >Let's Rawk!</ a>

        </div>

            )


        
    
    );
}

