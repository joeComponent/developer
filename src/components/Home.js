import React from 'react';

window.onload = function() { 
}

const Home = () => {
    return (
		<div className="App">

			<div className="card bg-white border-dark mb-5 my-5">
				<div id="form3" className="card-header bg-info text-white" aria-controls="form3Div">
					<h2 className="card-title">Home</h2>
					<h3 className="card-subtitle">Card subtitle</h3>
				</div>
				<div id="form3Div">
					<div className="card-body">
                        This is the card body.
                        <div> <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small> </div>
                        <DevInfo/>
					</div>
					<div className="card-footer bg-warning container-fluid">
						This is the card footer.
					</div>
				</div>
			</div>

        </div>
    );
}

function DevInfo() {
    var result;

    if (process.env.NODE_ENV === 'development') {
        result = <div>
            MREACT_APP_WEBSITE_NM: {process.env.REACT_APP_WEBSITE_NM}
            <div>REACT_APP_JAVA_HOME: {process.env.REACT_APP_JAVA_HOME}</div>
        </div>
    } else {
        result = "";
    }
    return result;
}

export default Home;