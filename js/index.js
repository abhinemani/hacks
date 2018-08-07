var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1mxrXQbNi9d0rYxaGyw08Y3PKU4IPGZcPUguXq45qgyc/pubhtml';
	var target_gsheet_class_once = 'gsheet';

	window.onload = function() { init() };

	function init() {
	Tabletop.init( { key: public_spreadsheet_url,
	                 callback: showInfo,
	                 simpleSheet: true } )
	}

	function showInfo(data, tabletop) {

		// console.log(data);
		var str = "";
		var gsheetClass = document.getElementsByClassName(target_gsheet_class_once)[0];
		if(gsheetClass.outerHTML) { // if outerHTML is supported
			for (var i=0; i<data.length; i++) {
				str += "<section  class='future' data-background-image='img/"+data[i].bg+"'>";
				str += "<h1> <a target='_blank' href='" + data[i].Link + "'>" + data[i].Organization + "</a></h1>";
				str += "<h4>" + data[i].Category + "  // " + data[i].Applicant + "   <a target='_blank' href='mailto:" + data[i].Email + "'><i class='fa fa-envelope-o' aria-hidden='true'></i></a> // "+  data[i].Grant + "  // <a href='" + data[i].Link + "'><i class='fa fa-info-circle'></i></a></h4>";
				str += "<p><strong>" + data[i].Description + "</strong></p>";
				str += "<blockquote>" + data[i].Quote + "</blockquote>";
				str += "</section>";				
			}
			gsheetClass.outerHTML=str; // it's simple replacement of whole element with contents of str var
			Reveal.sync();
		}
	}
