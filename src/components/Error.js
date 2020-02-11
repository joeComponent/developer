import React from 'react';

const Error = () => {
    return (
		<div className="App">

			<div className="card bg-white border-dark mb-5 my-5">
				<div id="form3" className="card-header bg-info text-white" aria-controls="form3Div">
					<h2 className="card-title">Error</h2>
					<h3 className="card-subtitle">Card subtitle</h3>
				</div>
				<div id="form3Div">
					<div className="card-body">
                        Error: path doesn't exist.  NOTE: intentional, to display I can handle errors gracefully :-)
					</div>
					<div className="card-footer bg-warning container-fluid">
						This is the card footer.
					</div>
				</div>
			</div>

        </div>
    );
}

export default Error;