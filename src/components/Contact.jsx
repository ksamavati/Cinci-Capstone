import React from 'react'
import { useLayoutEffect } from 'react';

const Contact = () => {
	useLayoutEffect(() => {
    window.scrollTo(0, 0)
	});

	return (
    <div className="container">
        <form action="" method="POST" className="form">
            <div className="form-group">
                <label for="name" className="form-label">Your name</label>
            <input type="text" className="form-control" id="name" name="name" placeholder="Jane Lorem" tabindex="1" required/>
            </div>
            <div className="form-group"><label for="email" className="form-label ">Your Email</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="jane@lorem.com" tabindex="2" required/>
            </div>
            <div className="form-group"><label for="subject" className="form-label ">Subject</label>
                <input type="text" className="form-control" id="subject" name="subject" placeholder="Hi There!" tabindex="3" required/>
            </div>
            <div className="form-group">
                <label for="message" className="form-label">Message</label>
            <textarea className="form-control" name="message" id="message" cols="50" rows="5" placeholder="Enter Message..." tabindex="4"></textarea>
            </div>
            <div>
                <button type="submit" className="btn">Send Message!</button>
            </div>
        </form>
    </div>
	)
}

export default Contact