import React, { useState } from 'react';
import './Content.scss';
import png2 from '../../../images/icons/2.png';

export function Content() {
    const [reg, setReg] = useState(
        {
            name: "",
            email: "",
            password: ""
        }
    );

    const changeReg = smth => e => {
        setReg({ ...reg, [smth]: e.target.value });
    };

    const saveReg = () => {
        localStorage.setItem('reg', JSON.stringify(reg));
    };

    return (
        <div className="content__flex">
            <div className="content__block">
                <div className="content__img">
                    <img src={png2} alt="" />
                </div>
                <div className="content__title">
                    MODERN AXURE TEMPLATE
                    FOR BEAUTIFUL PROTOTYPES
                </div>
                <div className="content__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                    euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                    accumsan et viverra justo commodo.
                </div>
                <a className="content__btn" href="/">
                    Download
                </a>
            </div>
            <div className="content__block">
                <div className="content__started">
                    <div className="content__size">
                        <div className="content__msg">
                            Try Your&nbsp;<b>Free</b>&nbsp;Trial Today
                        </div>
                        <div className="content__input">
                            <input value={reg.name} type='text' placeholder='Name' onChange={changeReg("name")} />
                        </div>
                        <div className="content__input">
                            <input value={reg.email} type='text' placeholder='Email' onChange={changeReg("email")} />
                        </div>
                        <div className="content__input">
                            <input value={reg.password} type='password' placeholder='Password' onChange={changeReg("password")} />
                        </div>
                        <div className="content__submit">
                            <input onClick={saveReg} type="submit" value="Get Started" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}