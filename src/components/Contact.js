import React from 'react';
import { emailjs } from 'emailjs-com/dist/email.min';

const Contact = () => {

    return (
        <div className="">
            <form id='contactFrm' onSubmit={handleSubmit}>
                <div className="card bg-white border-dark my-5">
                    <div className="card-header">
                        <h1 className="card-title">Contact</h1>
                        <h2 className="card-subtitle">Send a Message</h2>
                    </div>

                    <div className="card-body">
                        <div className="row mx-auto">
                            <div id="firstNmFld" className="col-4">
                                <label htmlFor="firstName" className="col-form-label">First Name</label>
                                <input id="firstName" className="form-control form-control-sm"  required/>
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
                            <input id="email" name="email" type="text" className="form-control form-control-sm"  required/>
                        </div>
                        <div id="msgFld" className="col-12">
                            <label htmlFor="msg-entry" className="col-form-label">Message</label>
                            <textarea id="msg" className="form-control form-control-sm" placeholder="Enter your message here" required />
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

function handleSubmit (evnt) {
    evnt.preventDefault();
    console.log('BEGIN: handleSubmit');
    var form = document.getElementById("contactFrm");

    sendMsg(form.firstName.value,
            form.lastNm.value,
            form.jobNm.value,
            form.email.value,
            form.msg.value);
    
    console.log('END: handleSubmit');
}

function sendMsg (fNm, lNm, jNm, email, msg) {
    var tid = process.env.REACT_APP_EMAILJS_TEMPLATEID;
    var sid = process.env.REACT_APP_EMAILJS_SERVICEID;
    var uid = process.env.REACT_APP_EMAILJS_USERID;

    console.log('BEGIN: sendMsg');
    console.log("tid: " + tid + "  uid: " + uid);
    console.log("msg: " + msg + "  email: " + email);

    var tparms = {
        f_nm: fNm,
        l_nm: lNm,
        j_nm: jNm,
        message: msg
    };

    //Their ex.:
    // emailjs.send(sid, tid, tparms, uid)
    // .then(function(response) {
        // console.log('SUCCESS!', response.status, response.text);
        //todo - ??? this.setState({formEmailSent: true})
    //  }, function(error) {
        // console.log('FAILED...', error);
    //  });

    console.log('END: sendMsg');
}

export default Contact;