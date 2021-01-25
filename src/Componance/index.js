import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

require('./style.css');

function SignIn() {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        confirmpassword: "",
    });

    const [hasText, setHasText] = useState(false);

    const { handleSubmit, register, errors } = useForm();

    const onSubmit = values => {
        setInputs({ ...inputs, email: values.email, password: values.password });
    };

    return (
        <div>
            <div className="tentkotta-sans-font-loaded">
                <div className="basicLayout simplicity" lang="en-IN" dir="ltr">
                    <div className="simpleContainer">
                        <div className="centerContainer">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="regFormContainer">
                                    <div className="stepHeader-container">
                                        <div className="stepHeader">
                                            <h1 className="stepTitle">
                                                Enter your Email to SignIn
                                            </h1>
                                        </div>
                                    </div>
                                    <div>
                                        <ul className="simpleForm structural ui-grid">
                                            <li className="tkFormSpace">
                                                <div className="tkInput tkInputOversize">
                                                    <div className="tkInputPlacement">
                                                        <label className="input_id"
                                                            placeholder="email">
                                                            <input type="email"
                                                                name="email" className={`tkTextField ${hasText ? 'hasText' : ''}`} id="id_email"
                                                                maxLength="50" minLength="5"
                                                                ref={register({
                                                                    required: "E-mail ID is Required",
                                                                    pattern: {
                                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                                        message: "invalid email address",
                                                                    }
                                                                })} />
                                                            {errors.email &&
                                                                <p style={{ color: 'red', fontSize: '10px' }}>{errors.email.message}</p>
                                                            }
                                                            <label
                                                                htmlFor="id_email" className="placeLabel">
                                                                Email
                                                            </label>
                                                        </label>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="tkFormSpace">
                                                <div className="tkInput tkInputOversize">
                                                    <div className="tkInputPlacement">
                                                        <label className="input_id"
                                                            placeholder="password">
                                                            <input type="password"
                                                                name="password"
                                                                className="tkTextField" id="id_password"
                                                                autoComplete="password" maxLength="61" minLength="4"
                                                                dir=""
                                                                ref={register({
                                                                    required: " password is not filled",
                                                                    validate: value => value.length
                                                                })} />
                                                            <label htmlFor="id_password" className="placeLabel">
                                                                Add a
                                                                password
                                                            </label>
                                                            {
                                                                errors.password && <p style={{ color: 'red', fontSize: '10px' }}>
                                                                    {errors.password.message}
                                                                </p>
                                                            }
                                                        </label>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="submitBtnContainer"><button type="submit" autoComplete="off"
                                    className="tk-btn tk-btn-primary tk-btn-solid tk-btn-oversize"
                                    placeholder="regForm_button_continue">CONTINUE</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;