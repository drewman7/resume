var bio = {
	"name":"Andrew Totten",
	"role":"Web Developer",
	"contacts": {
		"mobile":"989-615-8981",
		"email":"drewstuff5@hotmail.com",
		"location":"Birch Run, MI",
		"twitter": "@drewtott"
	},
	"welcomemsg":"Welcome to my resume",
	"skills": ["Crazy", "Cool", "Loopy", "Free"],
	"bioPic": "images/drew.jpg"
};

var work = {
	"jobs": [
		{
			"employer": "AT&T",
			"title": "Sr. Solutions Architect",
			"location": "Saginaw, MI",
			"dates": "1996 to Present",
			"description": "Designing and solutioning of voice over IP solutions for customers."
		},
		{
			"employer": "Nortel",
			"title": "CAST Lab Engineer",
			"location": "Plano, TX",
			"dates": "1995 to 1996",
			"description": "Testing and evaluating Nortel products and solutions."
		},
		{
			"employer": "Nortel",
			"title": "Software Systems Engineer",
			"location": "Research Triangle Park, NC",
			"dates": "1994",
			"description": "Supported a SCO Unix based server used for telecommunication central office translations ."
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Project 1 - HTML and CSS Design",
			"dates": "2014",
			"description": "Project 1 for the Frontend Web Design Nanodegree.",
			"images": "images/mug.png"
		},
		{
			"title": "Project 2 - JavaScript Design",
			"dates": "2014",
			"description": "Project 2 for the Frontend Web Design Nanodegree.",
			"images": "images/wakko.bmp"
		}
	]
};

var education = {
	"schools": [
		{
			"name": "University of Michigan",
			"degree": "Bachelor of Science",
			"majors": "Electrical Engineering",			
			"dates": 1995,
			"location": "Ann Arbor, MI",
			"url": "http://umich.edu"
		},
		{
			"name": "Nouvel Catholic Central High School",
			"degree": "",
			"majors": "",
			"dates": 1990,
			"location": "Saginaw, MI",
			"url": "http://www.saginaw.org/catholic-schools/saginaw/nouvel-catholic-central-high-school/visit.html"	
		}
	],
	"onlineCourses": [
		{
			"name": "Udacity",
			"degree": "Nanodegree",
			"majors": "Front End Web Design",
			"dates": 2015,
			"url": "http://udacity.com"
		}
	]
};

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedName,formattedRole);

if (bio.skills.length !== 0) {
	$("#header").append(HTMLskillsStart);
	
	for (i in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[i]);
		$("#skills").append(formattedSkills);
	};
};

function displayWork(){
	for (j in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[j].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[j].title);
		$(".work-entry:last").append(formattedWorkEmployer+formattedWorkTitle);

		var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[j].location);
		$(".work-entry:last").append(formattedWorkLocation);

		var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[j].dates);
		$(".work-entry:last").append(formattedWorkDates);

		var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[j].description);
		$(".work-entry:last").append(formattedWorkDescription);

	};
};


displayWork();


projects.display = function() {
	for (k in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[k].title);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[k].dates);
		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[k].description);
		$(".project-entry:last").append(formattedProjectDescription);

		var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.projects[k].images);
		$(".project-entry:last").append(formattedProjectImage);
	};
};

projects.display();

education.display = function() {
	for (k in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[k].name);
		if (education.schools[k].degree === "") {
			var formattedSchoolDegree="";
		} else {
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[k].degree);
		};
		$(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[k].dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolLocs = HTMLschoolLocation.replace("%data%",education.schools[k].location);
		$(".education-entry:last").append(formattedSchoolLocs);

		if (education.schools[k].majors === "") {
			var formattedSchoolMajor= HTMLschoolMajor.replace("Major: %data%",education.schools[k].majors);;
		} else {
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[k].majors);
		};
		$(".education-entry:last").append(formattedSchoolMajor);
	};
	
	$(".education-entry:last").append(HTMLonlineClasses);
	
	for (k in education.onlineCourses) {
		
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[k].name);
		$(".education-entry:last").append(formattedOnlineTitle);

	};
};

education.display();


function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] +" "+name[1];
};

//$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

//var formattedName = 
//	HTMLheaderName.replace("%data%",bio.name);

//var formattedRole = 
//	HTMLheaderRole.replace("%data%",bio.role);

//$("#header").prepend(formattedName,formattedRole);
//$("#main").append(bio.contacts.mobile);

//$("#main").append(<img src=bio.bioPic>);