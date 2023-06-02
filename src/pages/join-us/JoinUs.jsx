import React, { Fragment, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './JoinUs.module.css'
import Button from '../../components/button/Button'

export default function JoinUs() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
    const [alreadyHave, setAlreadyHave] = useState(false)
    const [toHome, setToHome] = useState(false)

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [found, setFound] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    


    const setAuth = useSetRecoilState(authAtom)



    function handleAlreadyHave() {
        setAlreadyHave(true)
    }

    function handleRegister() {
        const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/;



        if (!regEmail.test(email)) {
            setEmailError(true);
        } else if (!regPassword.test(password)) {
            setPasswordError(true)

        } else {

            setEmailError(false);
            setPasswordError(false)

            if (name.trim() === '' || email.trim() === '' || mobile.trim() === '' || password.trim() === '') {
                setError(true)

            } else {

                setError(false)

                setToHome(true)
                let estData;
                if (JSON.parse(localStorage.getItem('userData')) === null) {
                    estData = []

                } else {
                    estData = JSON.parse(localStorage.getItem('userData'))
                }
                const existingData = estData
                let notFound = false

                if (existingData != []) {



                    for (let i = 0; i < existingData.length; i++) {
                        if (email === existingData[i].email) {
                            alert('user already existed please SIGN IN')
                            notFound = true
                            setToHome(false)



                            break

                        }
                    }

                    if (notFound === false) {
                        const localStore = { name: name, email: email, mobile: mobile, password: password }
                        localStorage.setItem('userData', JSON.stringify([...existingData, localStore]))


                    } else {
                        setName('')
                        setEmail('')
                        setMobile('')
                        setPassword('')
                    }
                }

                if (notFound === false) {
                    const localStore = { name: name, email: email, mobile: mobile, password: password }

                    localStorage.setItem('userData', JSON.stringify([...existingData, localStore]))
                } else {
                    setName('')
                    setEmail('')
                    setMobile('')
                    setPassword('')
                }
            }

        }
    }


    function handleLogin() {

        const userData = JSON.parse(localStorage.getItem('userData'))
        let exist = false
    
        for (let i = 0; i < userData.length; i++) {
    
            if (userData[i].email == loginEmail && userData[i].password == loginPassword) {
                exist = true
                break
            }
        }
    
        if (exist) {
            setFound(true)
            alert('Successfully Logged In')
            setAuth((auth) => {
                return {
                    isLoggedIn: true
                }
            })
            // navigate('/')
            navigate('/')
        } else {
            setFound(false)
        }
    
        setClicked(true)
        setLoginEmail('')
        setLoginPassword('')
    
    
    }




return (
    <Fragment>
        {
            alreadyHave ?
                <div className={styles.container}>

                    <div className={styles.details} >

                        <form>
                            <h1>Login Here</h1>

                            <div className={styles.input}>
                                <div className={styles.data}>
                                    <label htmlFor="email"  >Email:</label>
                                    <input value={loginEmail}
                                        name='email' type='email'
                                        placeholder='Enter the mail'
                                        onChange={(event) => setLoginEmail(event.target.value)}
                                        required  >

                                    </input>
                                </div>
                                <div className={styles.data}>
                                    <label htmlFor="password" >Password:</label>
                                    <input value={loginPassword}
                                        name='password' type='password'
                                        placeholder='Enter the password'
                                        onChange={(event) => setLoginPassword(event.target.value)}
                                        required >

                                    </input>
                                </div>
                            </div>
                            {
                                found ? <h1>''</h1> : clicked ? <p className={styles.warn}>Details not found ! please <h5 onClick={() => setAlreadyHave(false)}>Register</h5></p> : ''
                            }
                            <Button onClick={handleLogin} name={'LOGIN'} />
                        </form>

                    </div>



                </div> :

                toHome ?
                    <div className={styles.container}>
                        <div className={styles.home}>
                            <h1>Successfully Registered !</h1>

                            <h5><Link to='/'>Home</Link></h5>

                            <button onClick={handleAlreadyHave} > Login In</button>
                        </div>
                    </div> :
                    <form className={styles.container}>

                        <div className={styles.details}>
                            <h1>Register Here</h1>
                            <div className={styles.input}>
                                <div className={styles.data}>
                                    <label htmlFor="name" >Name:</label>

                                    <input value={name}
                                        minLength={6} name='name'
                                        type='text' placeholder='Enter the Name'
                                        onChange={(event) => setName(event.target.value)}
                                        required >

                                    </input>

                                </div>
                                <div className={styles.data}>
                                    <label htmlFor="email"  >Email:</label>
                                    <input value={email}
                                        name='email' type='email'
                                        placeholder='Enter the Mail'
                                        onChange={(event) => setEmail(event.target.value)}
                                        required  >

                                    </input>

                                </div>
                                {
                                    emailError ? <p className={styles.err}>Enter the valid Email</p> : ''
                                }
                                <div className={styles.data}>
                                    <label htmlFor="mobile" >Mobile:</label>
                                    <input value={mobile}
                                        name='mobile' type='tel'
                                        placeholder='Enter the Mobile'
                                        onChange={(event) => setMobile(event.target.value)}
                                        required  >

                                    </input>
                                </div>
                                <div className={styles.data}>
                                    <label htmlFor="password" >Password:</label>
                                    <input value={password}
                                        minLength={6} name='password'
                                        type='password' placeholder='Enter the Password'
                                        onChange={(event) => setPassword(event.target.value)}
                                        required >

                                    </input>

                                </div>
                                {
                                    passwordError ? <p className={styles.err}>Enter the valid Password:atleast one digit,upper,lower and not spaces:min-6 characters</p> : ''
                                }
                            </div>
                            {
                                error ? <p id={styles.fieldsWarn}>All the Input fields are mandatory</p> : ''
                            }
                            <Button onClick={handleRegister} name={'REGISTER'} />
                            <Button onClick={handleAlreadyHave} name={'Already have account ? Sign In'} />
                        </div>


                    </form>



        }

    </Fragment>
)
    }
