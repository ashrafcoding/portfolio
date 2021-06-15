import React from 'react'
import './contact.css'

function Contact() {
    return (
        <div className="contact section" id="contact">
        <h2 className="section-title">Contact</h2>
        <div className="line"></div>


        <div className="contact__container bd-grid">
            <div className="contact__info">
                <h3 className="contact__subtitle">EMAIL</h3>
                <span className="contact__text">ashrafeid@gmail.com</span>

                <h3 className="contact__subtitle">PHONE</h3>
                <span className="contact__text">+966582992322</span>

                <h3 className="contact__subtitle">GITHUB</h3>
                <span className="contact__text"><a href="https://github.com/ashrafcoding">https://github.com/ashrafcoding</a> </span>
            </div>

            <form action="" className="contact__form" name="contact" method="POST" data-netlify="true">
                <div className="contact__inputs">
                    <input type="text" placeholder="Name" className="contact__input"/>
                    <input type="mail" placeholder="Email" className="contact__input"/>
                </div>

                <textarea name="" id="" cols="0" rows="10" className="contact__input"></textarea>

                <input type="submit" value="Send" className="contact__button"/>
            </form>
        </div>
    </div>

    )
}

export default Contact
