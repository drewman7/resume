var skills = ["Awesome", "Cool", "Humble"]

var bio = {
	"name":"Andrew Totten",
	"role":"Web Developer",
	"contacts": {
		"mobile":"989-615-8981",
		"email":"drewstuff5@hotmail.com",
		"twitter": "@drewtott"
	},
	"welcomemsg":"Welcome to my resume",
	"skills": ["Crazy", "Cool", "Free"],
	"bioPic": "images/drew.jpg"
};

var work = {};

	work.position = "Sr. Solutions Architect";
	work.employer = "AT&T";
	work.years = "1996 to Present";
	work.workCity = "Saginaw";

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
			"name": "Nouvel Caltholic Central High School",
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
}

	education["name"] = "University of Michigan";
	education["years"] = "1990 to 1995";
	education["city"] = "Ann Arbor";

var formattedName = 
	HTMLheaderName.replace("%data%",bio.name);

var formattedRole = 
	HTMLheaderRole.replace("%data%",bio.role);

$("#header").prepend(formattedName,formattedRole);
$("#main").append(bio.contacts.mobile);
$("#main").append(bio.contacts.email);
$("#main").append(bio.contacts.twitter);
$("#main").append(bio.welcome);
$("#main").append(bio.skills);
$("#main").append(work.position,work.employer,work.years,work.workCity);
$("#main").append(education["name"],education["years"],education["city"]);
//$("#main").append(<img src=bio.bioPic>);