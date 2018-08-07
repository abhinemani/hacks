var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/12Qd_wiMLj8gZFEQ70qXUHFL9ZutwsBW7gSZQpvJaKHM/pubhtml';
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
				str += "<section  class='future' data-background-image='img/ethosbg.png'>";
				str += "<h1> <a target='_blank' href='" + data[i].Link + "'>" + data[i].Name + "</a></h1>";
				str += "<h4>" + data[i].Tag + "  // " + data[i].Category + " // <a href='" + data[i].Link + "'><i class='fa fa-info-circle'></i></a></h4>";
				str += "<p><strong>" + data[i].Description + "</strong></p>";
				str += "<img src='img/"+data[i].Image+"'>";
				str += "</section>";				
			}
			gsheetClass.outerHTML=str; // it's simple replacement of whole element with contents of str var
			Reveal.sync();
		}
	}
