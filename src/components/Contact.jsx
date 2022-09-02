import React from 'react'

const Contact = () => {
	return (
    <div class="container">
        <form action="" method="POST" class="form">
            <div class="form-group">
                <label for="name" class="form-label">Your name</label>
            <input type="text" class="form-control" id="name" name="name" placeholder="Jane Lorem" tabindex="1" required/>
            </div>
            <div class="form-group"><label for="email" class="form-label ">Your Email</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="jane@lorem.com" tabindex="2" required/>
            </div>
            <div class="form-group"><label for="subject" class="form-label ">Subject</label>
                <input type="text" class="form-control" id="subject" name="subject" placeholder="Hi There!" tabindex="3" required/>
            </div>
            <div class="form-group">
                <label for="message" class="form-label">Message</label>
            <textarea class="form-control" name="message" id="message" cols="50" rows="5" placeholder="Enter Message..." tabindex="4"></textarea>
            </div>
            <div>
                <button type="submit" class="btn">Send Message!</button>
            </div>
        </form>
    </div>
	)
}

export default Contact