import React from 'react';
import $ from 'jquery';
import '../App.css';

//** Note: Graphics files are kept under src. */
//** DSGN */
import imgFop from '../graphic/dsgn/FOP.png';
import imgLab from '../graphic/dsgn/Laboratory.png';
import imgOcup from '../graphic/dsgn/OCUPsmall.gif';
import imgOmg from '../graphic/dsgn/omgDir.png';
import imgOmgHdr from '../graphic/dsgn/omgDirHdr.png';
import imgOmgHdr2 from '../graphic/dsgn/omgDirHdr2.png';
import imgOmgSubHdr from '../graphic/dsgn/omgDirSubHdr.png';
import imgUModel from '../graphic/dsgn/uModel.png';

//** EDU */
import imgCU from '../graphic/edu/CUDenver.png';
import imgGWU from '../graphic/edu/GWU.png';
import imgInstFr from '../graphic/edu/InstitutFr.png';
import imgOSU from '../graphic/edu/OSU.png';
import imgCJIS from '../graphic/cert/CJIS.png';
import imgItil from '../graphic/cert/ItilCert.png';

//** PRG */
import imgCss from '../graphic/prg/Css3.png';
import imgAcunetix from '../graphic/prg/acunetix.png';
import imgGit from '../graphic/prg/git.png';
import imgHibernate from '../graphic/prg/hibernate.png';
import imgHtml5 from '../graphic/prg/Html5.png';
import imgJava from '../graphic/prg/Java.png';

import imgJvFX from '../graphic/prg/javaFX.png';
import imgJvScrpt from '../graphic/prg/JavaScript.png';
import imgJQury from '../graphic/prg/JQuery.png';
import imgJsp from '../graphic/prg/Jsp.png';

import imgMac from '../graphic/prg/macOS.jpg';
import imgNBns from '../graphic/prg/NetBeans.jpg';
import imgOra from '../graphic/prg/Oracle.png';
import imgOwasp from '../graphic/prg/OWASP.png';

import imgPyPl from '../graphic/prg/PayPal.png';
import imgSC from '../graphic/prg/SC.png';
import imgIdea from '../graphic/prg/scIdea.png';
import imgSpss from '../graphic/prg/SPSS.png';

import imgUbnt from '../graphic/prg/ubuntu.png';
import imgWbLgc from '../graphic/prg/weblogic.png';

//** EXP */
import imgCens from '../graphic/exp/Census.png';
import imgCHLA from '../graphic/exp/CHLA.jpg';
import imgDmHmms from '../graphic/exp/dmhmms.png';
import imgEconInd from '../graphic/exp/econIndicators.png';

import imgGuitar from '../graphic/exp/GuitarCntr.png';
import imgHarris from '../graphic/exp/HarrisSwitch.png';
import imgIntel from '../graphic/exp/intelInside.png';
import imgKrugr from '../graphic/exp/KrugerNP.png';

import imgRtlNet1 from '../graphic/exp/retailNet1.png';
import imgRtlNet2 from '../graphic/exp/retailNet2.png';
import imgSosRvw from '../graphic/exp/SosReview18.png';

//** Other */
import imgStudio1 from '../graphic/StudioDesk.jpg';
import imgStudio2 from '../graphic/StudioDesk2.jpg';
import imgStudio3 from '../graphic/StudioDesk3.jpg';

// Tech used:
// React
// NodeJS development server.
// JSX, Babel
// npm (https://docs.npmjs.com/files/package-lock.json)
// WebPack, scripts.
// VS Code, debugging.
// Bootstrap 4
// Javascript, HTML, CSS3
// JQuery
// Git
// Flexibility and Integration: This demo combines React, Bootstrap, and JQuery in a single program.

//** JQuery Event Listeners: HideFooter */
window.onload = function() { 
	selectThumbOnClick('#form0Div');
	clearOnHeaderClick('#form0');

	selectThumbOnClick('#form1Div');
	clearOnHeaderClick('#form1');

	selectThumbOnClick('#form2Div');
	clearOnHeaderClick('#form2');

	selectThumbOnClick('#form4Div');
	clearOnHeaderClick('#form4');

	document.body.style.backgroundImage = "url(" + imgStudio2 + "), url(" + imgStudio1 + "), url(" + imgStudio3 + ")";
	document.body.style.backgroundPosition = "top left, top right, bottom left";
	document.body.style.backgroundRepeat = "no-repeat";
	document.body.style.backgroundSize = "50% 50%, 50% 50%, 100% 50%";
}

const About = () => {
    return (
		<div className="App">
			<div id="accordion">

				<div className="card bg-white border-dark mb-5 my-5">
					<div id="form3" className="card-header bg-info text-white" aria-controls="form3Div">
						<h2 className="card-title">Card title</h2>
						<h3 className="card-subtitle">Card subtitle</h3>
					</div>
					<div id="form3Div">
						<div className="card-body">
							<label htmlFor="prevCommsnNbr">Active Commission Number</label>
							<input id="form3FldId1" type="text" className="form-control form-control-sm" />
							{/* <span id="wait" class="bg-warning d-none">Validating... <img src="../img/wait.gif" /></span> */}
						</div>
						<div className="card-footer bg-warning">
							<p>Card footer, background warning.</p>
						</div>
					</div>
				</div>

				<div className="card bg-white border-dark mb-3">
					<div id="form0" className="card-header bg-info text-white" data-toggle="collapse" data-target=".form0-collapse"
						aria-expanded="false" aria-controls="form0Div">
						<h2 className="card-title">Design</h2>
						<h3 className="card-subtitle">Image Files</h3>
					</div>
					<div id="form0Div" className="collapse form0-collapse" data-parent='#accordion'>
						<div className="card-body">
							<div className="row">
								<ThumbCell img={imgCens} footClass='.form0Foot1'/>
								<ThumbCell img={imgCHLA} footClass='.form0Foot2'/>
								<ThumbCell img={imgDmHmms} footClass='.form0Foot3'/>
								<ThumbCell img={imgEconInd} footClass='.form0Foot4'/>
							</div>
							<div className="row">
								<ThumbCell img={imgGuitar} footClass='.form0Foot5'/>
								<ThumbCell img={imgHarris} footClass='.form0Foot6'/>
								<ThumbCell img={imgIntel} footClass='.form0Foot7'/>
								<ThumbCell img={imgKrugr} footClass='.form0Foot8'/>
							</div>
							<div className="row">
								<ThumbCell img={imgRtlNet1} footClass='.form0Foot9'/>
								<ThumbCell img={imgRtlNet2} footClass='.form0Foot10'/>
								<ThumbCell img={imgSosRvw} footClass='.form0Foot11'/>
							</div>
						</div>
						<CardFooter imgTitle='Census Bureau' footClass='form0Foot1' accrdnPrnt='form0Div'>
							The Census Bureau is a producer of data about the American people and economy.
						</CardFooter>
						<CardFooter imgTitle='CHLA' footClass='form0Foot2' accrdnPrnt='form0Div'>
							The Children's Hospital of LA is a hospital specializing in the needs of children.
						</CardFooter>
						<CardFooter imgTitle='HMMS' footClass='form0Foot3' accrdnPrnt='form0Div'>
							"Depot Mgt - Hazardous Material Mgt System" is a materials control software package for Hill Airforce Base.
						</CardFooter>
						<CardFooter imgTitle='Economic Indicators' footClass='form0Foot4' accrdnPrnt='form0Div'>
							Statistical values computed and released by the US Census Bureau.
						</CardFooter>
						<CardFooter imgTitle='Guitar Centers' footClass='form0Foot5' accrdnPrnt='form0Div'>
							Guitar Center's custom distributed inventory mgt system.
						</CardFooter>
						<CardFooter imgTitle='Harris Switch' footClass='form0Foot6' accrdnPrnt='form0Div'>
							Harris Switch is a voice switching solution used by long-distance phone carrier "TelTrust".
						</CardFooter>
						<CardFooter imgTitle='Intel Inside' footClass='form0Foot7' accrdnPrnt='form0Div'>
							"Intel Inside" is a campaign logo created by the marketing agency of Dahlin-Smith-White for Intel.
						</CardFooter>
						<CardFooter imgTitle="Kruger Nat'l Park" footClass='form0Foot8' accrdnPrnt='form0Div'>
							"Kruger Nat'l Park" is one of Africa's largest game reserves, located in NE South Africa.
						</CardFooter>
						<CardFooter imgTitle="RetailNet" footClass='form0Foot9' accrdnPrnt='form0Div'>
							RetailNet is a distributed inventory mgt system, provided by Tomax Corp.
						</CardFooter>
						<CardFooter imgTitle="Salesforce" footClass='form0Foot10' accrdnPrnt='form0Div'>
							Salesforce is an online Customer Relationship Mgmt platform.  Salesforce acquired Tomax and incorporated RetailNet as it's inventory mgt solution.  This was rewritten in 2017.
						</CardFooter>
						<CardFooter imgTitle="Work Performance Review" footClass='form0Foot11' accrdnPrnt='form0Div'>
							Work Performance Review at Oregon Secretary of State.
						</CardFooter>
					</div>
				</div>

				<div className="card bg-white border-dark mb-3">
					<div id="form1" className="card-header bg-info text-white" data-toggle="collapse" data-target=".form1-collapse"
						aria-expanded="false" aria-controls="form1Div">
						<h2 className="card-title">Design</h2>
						<h3 className="card-subtitle">Image Files</h3>
					</div>
					<div id="form1Div" className="collapse form1-collapse" data-parent='#accordion'>
						<div className="card-body">
							<div className="row">
								<ThumbCell img={imgFop} footClass='.form1Foot1'/>
								<ThumbCell img={imgLab} footClass='.form1Foot2'/>
								<ThumbCell img={imgUModel} footClass='.form1Foot3'/>
								<ThumbCell img={imgOcup} footClass='.form1Foot4'/>
							</div>
							<div className="row">
								<ThumbCell img={imgOmg} footClass='.form1Foot5'/>
								<ThumbCell img={imgOmgHdr} footClass='.form1Foot6'/>
								<ThumbCell img={imgOmgSubHdr} footClass='.form1Foot8'/>
							</div>
						</div>
						<CardFooter imgTitle='XSL-FO' footClass='form1Foot1' accrdnPrnt='form1Div'>
							Apache FOP (Formatting Objects Processor) is a print formatter.  Converts XML to PDF.
						</CardFooter>
						<CardFooter imgTitle='Diagrams' footClass='form1Foot2' accrdnPrnt='form1Div'>
							UML (Unified Modeling Language) is information system modeling.
						</CardFooter>
						<CardFooter imgTitle='UModel' footClass='form1Foot3' accrdnPrnt='form1Div'>
							This is a software modeling tool.  Also known as CASE (Computer Aided Software Engineering).
						</CardFooter>
						<CardFooter imgTitle='OCUP2' footClass='form1Foot4' accrdnPrnt='form1Div'>
							OMG-Certified UML Professional 2.
						</CardFooter>
						<CardFooter imgTitle='OMG' footClass='form1Foot5' accrdnPrnt='form1Div'>
							Object Management Group.
						</CardFooter>
						<CardFooter imgTitle='Object Management Group' footClass='form1Foot6' accrdnPrnt='form1Div'>
							This is a computer industry standards consortium.
						</CardFooter>
						<CardFooter imgTitle='Professionals Directory' footClass='form1Foot8' accrdnPrnt='form1Div'>
							OMG's Certified Professionals Directory listing.
						</CardFooter>
					</div>
				</div>

				<div className="card bg-white border-dark mb-3">
					<div id="form2" className="card-header bg-info text-white" data-toggle="collapse" data-target=".form2-collapse"
						aria-expanded="false" aria-controls="form2Div">
						<h2 className="card-title">Organization</h2>
						<h3 className="card-subtitle">Image Files</h3>
					</div>
					<div id="form2Div" className="collapse form2-collapse" data-parent='#accordion'>
						<div className="card-body container">
							<TypeSelect/>
						</div>
						<div className="card-body">
							<div className="row">
								<ThumbCell img={imgCU} footClass='.form2Foot1' grp='colg'/>
								<ThumbCell img={imgInstFr} footClass='.form2Foot3' grp='colg'/>
								<ThumbCell img={imgOSU} footClass='.form2Foot4' grp='colg'/>
							</div>
							<div className="row">
								<ThumbCell img={imgOmgHdr2} footClass='.form2Foot5' grp='cert'/>
								<ThumbCell img={imgCJIS} footClass='.form2Foot6' grp='cert'/>
								<ThumbCell img={imgItil} footClass='.form2Foot7' grp='cert'/>
							</div>
							<div className="row">
								<ThumbCell img={imgGWU} footClass='.form2Foot2' grp='trng'/>
							</div>
						</div>
						<CardFooter imgTitle='University of Colorado' footClass='form2Foot1' accrdnPrnt='form2Div'>
							Master of Science: Information Systems.
						</CardFooter>
						<CardFooter imgTitle='George Washington University' footClass='form2Foot2' accrdnPrnt='form2Div'>
							Statistical Analysis.
						</CardFooter>
						<CardFooter imgTitle='Institut de Francais' footClass='form2Foot3' accrdnPrnt='form2Div'>
							French language immersion; advanced French language skills.
						</CardFooter>
						<CardFooter imgTitle='Oregon State University' footClass='form2Foot4' accrdnPrnt='form2Div'>
							Bachelors of Science: Business Administration - Finance.
						</CardFooter>
						<CardFooter imgTitle='UML Training' footClass='form2Foot5' accrdnPrnt='form2Div'>
							UML 2.5 certification program.  Expires: July 12, 2023.
						</CardFooter>
						<CardFooter imgTitle='Criminal Justice Information System' footClass='form2Foot6' accrdnPrnt='form2Div'>
							Level 4 CJIS Security Training.  Expires: Jan 3, 2021.
						</CardFooter>
						<CardFooter imgTitle='Information Technology Infrastructure Library' footClass='form2Foot7' accrdnPrnt='form2Div'>
							ITIL Foundation Certficate in IT Service Management.  Expires: n/a.
						</CardFooter>
					</div>
				</div>

				<div className="card bg-white border-dark mb-3">
					<div id="form4" className="card-header bg-info text-white" data-toggle="collapse" data-target=".form4-collapse"
						aria-expanded="false" aria-controls="form4Div">
						<h2 className="card-title">Code</h2>
						<h3 className="card-subtitle">Image Files</h3>
					</div>
					<div id="form4Div" className="collapse form4-collapse" data-parent='#accordion'>
						<div className="card-body">
							<div className="row">
								<ThumbCell img={imgAcunetix} footClass='.foot1-collapse'/>
								<ThumbCell img={imgCss} footClass='.foot2-collapse'/>
								<ThumbCell img={imgGit} footClass='.foot3-collapse'/>
								<ThumbCell img={imgHtml5} footClass='.foot4-collapse'/>
							</div>
							<div className="row">
								<ThumbCell img={imgHibernate} footClass='.foot5-collapse'/>
								<ThumbCell img={imgJava} footClass='.foot6-collapse'/>
								<ThumbCell img={imgJvFX} footClass='.foot7-collapse'/>
								<ThumbCell img={imgJvScrpt} footClass='.foot8-collapse'/>
							</div>
							<div className="row">
								<ThumbCell img={imgJQury} footClass='.foot9-collapse'/>
								<ThumbCell img={imgJsp} footClass='.foot10-collapse'/>
								<ThumbCell img={imgMac} footClass='.foot11-collapse'/>
								<ThumbCell img={imgNBns} footClass='.foot12-collapse'/>
							</div>
							<div className="row">
								<ThumbCell img={imgOra} footClass='.foot13-collapse'/>
								<ThumbCell img={imgOwasp} footClass='.foot14-collapse'/>
								<ThumbCell img={imgPyPl} footClass='.foot15-collapse'/>
								<ThumbCell img={imgSC} footClass='.foot16-collapse'/>
							</div>
							<div className="row">
								<ThumbCell img={imgSpss} footClass='.foot17-collapse'/>
								<ThumbCell img={imgUbnt} footClass='.foot18-collapse'/>
								<ThumbCell img={imgWbLgc} footClass='.foot19-collapse'/>
							</div>
						</div>
						<CardFooter imgTitle='Acunetix' footClass='foot1-collapse' accrdnPrnt='form4Div'>
							This is a web application security vulnerability testing tool.
						</CardFooter>
						<CardFooter imgTitle='CSS3' footClass='foot2-collapse' accrdnPrnt='form4Div'>
							This is the 3rd version of a web page Style Sheet standard.
						</CardFooter>
						<CardFooter imgTitle='Git' footClass='foot3-collapse' accrdnPrnt='form4Div'>
							This is a file version control tool for software development.
						</CardFooter>
						<CardFooter imgTitle='HTML5' footClass='foot4-collapse' accrdnPrnt='form4Div'>
							This is the 5th version of a web page Markup standard.
						</CardFooter>
						<CardFooter imgTitle='Hibernate' footClass='foot5-collapse' accrdnPrnt='form4Div'>
							This is an Object-Relational Mapping java library.
						</CardFooter>
						<CardFooter imgTitle='Java' footClass='foot6-collapse' accrdnPrnt='form4Div'>
							This is a computer language.
						</CardFooter>
						<CardFooter imgTitle='JavaFX' footClass='foot7-collapse' accrdnPrnt='form4Div'>
							JavaFX is a platform for creating desktop applications, and rich internet applications.
						</CardFooter>
						<CardFooter imgTitle='JavaScript' footClass='foot8-collapse' accrdnPrnt='form4Div'>
							JavaScript is an interpreted programming language.
						</CardFooter>
						<CardFooter imgTitle='JQuery' footClass='foot9-collapse' accrdnPrnt='form4Div'>
							JQuery is a JavaScript library used for implementing HTML user interfaces.
						</CardFooter>
						<CardFooter imgTitle='JSP' footClass='foot10-collapse' accrdnPrnt='form4Div'>
							JSP (Java Server Pages) is a templating language used for creating dynamically generated web pages.
						</CardFooter>
						<CardFooter imgTitle='Mac' footClass='foot11-collapse' accrdnPrnt='form4Div'>
							Macintosh OS is a series of graphical operating systems for the Mac family of computers.
						</CardFooter>
						<CardFooter imgTitle='NetBeans' footClass='foot12-collapse' accrdnPrnt='form4Div'>
							NetBeans is an Integrated Development Environment (IDE).
						</CardFooter>
						<CardFooter imgTitle='Oracle' footClass='foot13-collapse' accrdnPrnt='form4Div'>
							Oracle is a Relational-Database Mgt System (RDBMS).
						</CardFooter>
						<CardFooter imgTitle='OWASP' footClass='foot14-collapse' accrdnPrnt='form4Div'>
							OWASP (Open Web Application Security Project) is an organization that produces methodologies and tools for web application security.
						</CardFooter>
						<CardFooter imgTitle='PayPal' footClass='foot15-collapse' accrdnPrnt='form4Div'>
							PayPal is a company that provides an online payments system.
						</CardFooter>
						<CardFooter imgTitle='SurveyorCraft' footClass='foot16-collapse' accrdnPrnt='form4Div'>
							SurveyorCraft is an application that provides marine surveyors a tool to produce survey reports for banks, buyers and insurance companies.
						</CardFooter>
						<CardFooter imgTitle='SPSS' footClass='foot17-collapse' accrdnPrnt='form4Div'>
							SPSS is a software package used for interactive, or batched, statistical analysis.
						</CardFooter>
						<CardFooter imgTitle='Ubuntu' footClass='foot18-collapse' accrdnPrnt='form4Div'>
							Ubuntu is an operating system, which an open-source Linux distribution built on Debian.
						</CardFooter>
						<CardFooter imgTitle='WebLogic' footClass='foot19-collapse' accrdnPrnt='form4Div'>
							WebLogic is a Java EE web application server.
						</CardFooter>
					</div>
				</div>
			</div>
			<div className="card bg-white border-dark mb-3">
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
						<label htmlFor="msg" className="col-form-label">Message</label>
						<textarea id="msg" className="form-control form-control-sm" />
					</div>
				</div>
				<div className="card-footer text-right">
					<input id="button1" type="button" className="btn btn-dark bg-primary" value="Submit Button" />
				</div>
			</div>
		</div>
    );
}

function clearOnHeaderClick(parentId) {
	var bodyDiv = parentId + "Div"; 
	var footDiv = bodyDiv + " .card-footer"; 
	return $(parentId).on('click', function () {;
		$(bodyDiv).find('div.img-thumbnail').removeClass('active');
		$(footDiv).collapse('hide');
	});
}

function selectThumbOnClick(parentId) {
	return $(parentId).find('div.img-thumbnail').on('click', function () {
		$(parentId).find('div.img-thumbnail').removeClass('active');
		$(this).addClass('active');
	});
}

function ThumbCell(props) {
	var divId = props.footClass.replace(/\./g, "");
	return (
		<div id={divId} className={"col-sm img-thumbnail btn btn-secondary border-white " + props.grp} data-toggle="collapse" data-target={props.footClass}>
			<img alt='' src={props.img} className="img-fit mx-auto d-block" style={{ width:100 + '%' }}/>
		</div>
	);
}

function CardFooter(props) {
	var parentId = '#' + props.accrdnPrnt;
	return (
	<div className={'card-footer bg-warning collapse ' + props.footClass} data-parent={parentId}>
		<h1><code>{props.imgTitle}</code></h1>
		{props.children}
	</div>
	);
}

class TypeSelect extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: 'allT'};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		var currState = event.target.value;

		this.setState({value: currState});
		switch(currState) {
			case 'allT':
				this.showGrp('colg');
				this.showGrp('trng');
				this.showGrp('cert');
				break;
			case 'colg':
				this.hideGrp('trng');
				this.hideGrp('cert');
				this.showGrp('colg');
				break;
			case 'trng':
				this.hideGrp('colg');
				this.hideGrp('cert');
				this.showGrp('trng');
				break;
			case 'cert':
				this.hideGrp('colg');
				this.hideGrp('trng');
				this.showGrp('cert');
				break;
			default:

		}
		$('#form2Div .collapse').collapse('hide');
	}

	hideGrp(grp) {
		var objs, i;

		objs = document.getElementsByClassName(grp);
		for(i=0; i < objs.length; i++) {
			objs[i].classList.add('hidden');
		}
	}

	showGrp(grp) {
		var objs, i;

		objs = document.getElementsByClassName(grp);
		for(i=0; i < objs.length; i++) {
			objs[i].classList.remove('hidden');
		}
	}

	render() {
		return (
			<label>Education Type
				<select id="form2FldId" className="form-control-sm ml-3" value={this.state.value} onChange={this.handleChange}>
					<option value="allT" defaultValue>All Types</option>
					<option value="colg">College</option>
					<option value="trng">Training</option>
					<option value="cert">Certification</option>
				</select>
			</label>
		);
	}
}


export default About;