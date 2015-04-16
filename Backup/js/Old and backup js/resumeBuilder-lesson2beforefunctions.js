var bio = {
	"name":"Andrew Totten",
	"role":"Web Developer",
	"contacts": {
		"mobile":"989-615-8981",
		"email":"drewstuff5@hotmail.com",
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
			"location": "Saginaw, MI, US",
			"dates": "1996 to Present",
			"description": "Designing and solutioning of voice over IP solutions for customers."
		},
		{
			"employer": "Nortel",
			"title": "CAST Lab Engineer",
			"location": "Plano, TX, US",
			"dates": "1956 to 1996",
			"description": "Testing and evaluating Nortel products and solutions."
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
			"majors": ["Electrical Engineering"],
			"dates": 1995,
			"city": "Ann Arbor, MI, US",
			"url": "http://umich.edu"
		},
		{
			"name": "Nouvel Catholic Central High School",
			"dates": 1990,
			"city": "Saginaw, MI, US",
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



//var formattedName = 
//	HTMLheaderName.replace("%data%",bio.name);

//var formattedRole = 
//	HTMLheaderRole.replace("%data%",bio.role);

//$("#header").prepend(formattedName,formattedRole);
//$("#main").append(bio.contacts.mobile);

//$("#main").append(<img src=bio.bioPic>);