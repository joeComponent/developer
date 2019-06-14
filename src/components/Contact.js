import React from 'react';

const Contact = () => {

    handleSubmit (evnt) {
        console.log('BEGIN: handleSubmit');
        evnt.preventDefault();

        const {
            REACT_APP_EMAILJS_RECEIVER: receiverEmail,
            REACT_APP_EMAILJS_TEMPLATEID: template
        } = this.props.env;

        this.sendFeedback( template,
            this.props.senderEmail,
            receiverEmail,
            this.state.msg);
        
        this.setState({ formSubmitted: true });
        console.log('END: handleSubmit');
    }

    handleChange (evnt) {
        console.log('BEGIN: handleChange');

        console.log('END: handleChange');
    }

    sendFeedback (templateId, senderEmail, receiverEmail, msg) {
        console.log('BEGIN: sendFeedback');

        console.log('END: sendFeedback');
    }

    return (
        <div className="">
            <form onSubmit={handleSubmit}>
                <div className="card bg-white border-dark my-5">
                    <div className="card-header">
                        <h1 className="card-title">Contact</h1>
                        <h2 className="card-subtitle">Send a Message</h2>
                    </div>

                    <div className="card-body">
                        <div className="row mx-auto">
                            <div id="firstNmFld" className="col-4">
                                <label htmlFor="firstName" className="col-form-label">First Name</label>
                                <input id="firstName" className="form-control form-control-sm" />
                            </div>
                            <div id="lastNmFld" className="col-4">
                                <label htmlFor="lastNm" className="col-form-label">Last Name</label>
                                <input id="lastNm" className="form-control form-control-sm" />
                            </div>
                            <div id="jobFld" className="col-4">
                                <label htmlFor="jobNm" className="col-form-label">Job Title</label>
                                <input id="jobNm" className="form-control form-control-sm" />
                            </div>
                        </div>
                        <div id="emailFld" className="col-12">
                            <label htmlFor="email" className="col-form-label">Email Address</label>
                            <input id="email" type="text" className="form-control form-control-sm" />
                        </div>
                        <div id="msgFld" className="col-12">
                            <label htmlFor="msg-entry" className="col-form-label">Message</label>
                            <textarea id="msg-entry" name="msg-entry" className="form-control form-control-sm"
                                placeholder="Enter your message here" required onChange={handleChange} value={msg} />
                        </div>
                    </div>
                    <div className="card-footer text-right">
                        <input id="submitContact" type="submit" className="btn btn-dark bg-primary" value="Submit" />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Contact;