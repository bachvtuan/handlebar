var source = $("#ajax-comment").html();

//Convert html object handlebar object
var template = Handlebars.compile(source);

var data = {
		  name: "Bach Van Tuan",
		  date: "02/04/203",
		  comment: "what do you think about handlebar, does it awesome ?",
		  social: [
		    {
		      site: "Twitter",
		      name: "Bachvtuan"
		    },
		    {
		      site: "Github",
		      name: "bachvtuan"
		    }
		  ]
		};

Handlebars.registerPartial("social", $("#social-partial").html());

$("ul#list_comment").append(template(data));


//begin twitter source
source = $("#twitter-template").html();
template = Handlebars.compile(source);

function getTwitterFeed(link){
$.ajax({
  url:link,
  dataType: "jsonp",
  jsonpCallback: "loadData"
});
}

getTwitterFeed("http://search.twitter.com/search.json?q=blue%20angels&rpp=5&include_entities=true&result_type=mixed");

function loadData(data) {
 console.log(data); 
 //Empty if have data already
 $("ul#twitter-feed").html("");
 $("ul#twitter-feed").append(template(data));
}

$('.link-page').live('click',function(e){

	e.preventDefault();
	getTwitterFeed($(this).attr('href'));
	
})

