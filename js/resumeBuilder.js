var bio = {
	"name" : "Ice Bear",
	"role" : "Front-End Developer",
	"welcomeMessage" : "Ice bear loves artificial intelligence.",
	"bioPic" : "images/ice-bear.jpg",
	"contacts" : [{
		"mobile" : "Please call panda",
		"github" : "ice-bear",
		"location" : "San Francisco",
		"email" : "panpan@gmail.com"
	}],
	"skills" : ["HTML", "CSS", "JavaScript", "C++ / Java / Python", "Multiple Languages", "Taekwondo", "Cooking"]
};

var work = {
	"jobs" : [
	{
		"employer" : "Food Truck",
		"title" : "Cook",
		"dates" : "Season 1 Episode 3",
		"location" : "Outdoors",
		"description" : "Ice bear and bros established a food truck after being disappointed by other vendors."
	},
	{
		"employer" : "Cupcake Store",
		"title" : "Smile",
		"dates" : "Season 1 Episode 24",
		"location" : "Cupcake store in downtown",
		"description" : "Ice bear and bros got jobs at a cupcake store to pay for repairs on the broken laptop. Ice bear dresses up as the mascot."
	}]
};

var projects = {
	"projects" : [{
		"title" : "Losing Ice",
		"dates" : "2016",
		"description" : "Feeling unappreciated and ignored, Ice Bear leaves his brothers to be a chef at a Japanese grill.",
		"images" : ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg"]
	},
	{
		"title" : "The Library",
		"dates" : "2016",
		"description" : "The bears help Chloe study for an exam, but accidentally make things harder for her.",
		"images" : ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg"]
	}]
};

var education = {
	"schools" : [
	{
		"name" : "Osaka University",
		"location" : "Osaka, Japan",
		"degree" : "Bachelor",
		"majors" : "Robotics Engineering",
		"dates" : "2010 - 2014",
		"url" : "http://eng.irl.sys.es.osaka-u.ac.jp/"
	},
	{
		"name" : "Osaka University",
		"location" : "Osaka, Japan",
		"degree" : "Master",
		"majors" : "Robotics Engineering",
		"dates" : "2014 - 2016",
		"url" : "http://eng.irl.sys.es.osaka-u.ac.jp/"
	}],
	"onlineCourses" : [{
		"title" : "Front-End Web Developer Nanodegree",
		"school" : "Udacity",
		"dates" : "2016 - Now",
		"url" : "https://www.udacity.com/course/nd001"
	}]
};


bio.display = function() {
  $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
  $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
  $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
  $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

  $("#header").append(HTMLskillsStart);
  for(var i = 0; i < bio.skills.length; i++) {
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
  }

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[0].mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts[0].email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[0].github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[0].location);

  $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
	$("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
};

work.display = function() {
  for (var i = 0; i < work.jobs.length; i++) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
  }
};

projects.display = function() {
  for (var i = 0; i < this.projects.length; i++) {
    $("#projects").append(HTMLprojectStart);

    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", this.projects[i].title));
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%", this.projects[i].dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", this.projects[i].description));

    for (var j = 0; j < this.projects[i].images.length; j++) {
      $(".project-entry:last").append(HTMLprojectImage.replace("%data%", this.projects[i].images[j]));
    }
  }
};

education.display = function() {
  for (var i = 0; i < education.schools.length; i++) {
    $("#education").append(HTMLschoolStart);

    var formattedSchool = HTMLschoolName.replace("%data%", education.schools[i].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    var formattedSchoolTitle = formattedSchool + formattedDegree;

    $(".education-entry:last").append(formattedSchoolTitle);
    $(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[i].dates));
    $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
    $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors));
  }

  $("#education").append(HTMLonlineClasses);
	for (var j = 0; j < education.onlineCourses.length; j++) {
		$("#education").append(HTMLschoolStart);
      var formattedCourse = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);

      $(".education-entry:last").append(formattedCourse + formattedOnlineSchool);
      $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates));
      $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[j].url));
  }
};

bio.display();
work.display();
projects.display();
education.display();

// $("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
