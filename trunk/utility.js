// milliseconds in a day
var oneDayInMilli = 1000 * 24 * 60 * 60; // 1 day

// utility to get element by Id
function $(elem) {
  return document.getElementById(elem);
}

// utility to get array type 
function toArray(obj) {
  if ( obj.constructor == Array )
    return obj;
  return [obj];
}

// helper to fetch a named option from localStorage
function fetchOption(name, defaultvalue)
{
    var value = localStorage.getItem(name);
    if ( value == null )
    {
        return defaultvalue;
    }
    
    return value;
}

function shortDateString(cultureInfo, start, end) {
  var format;
  switch ( cultureInfo ) {
    case 'en-US':
      format = 'm/d/yy h:MM TT';
      break;
    default:
      format = 'dd/mm/yy HH:MM';
  }
  // If the event is an all day event, don't show the time.
  if ( (end - start) == oneDayInMilli )
    format = format.substring(0, format.indexOf(' '));
  return start.format(format);
}

function go_log(message)
{
	var now = new Date();
	var date_str = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + "." + now.getMilliseconds();
	var log_str = date_str + " " + message; 
	    
	console.log(log_str);
    now = null;
    date_str = null;
    log_str = null;
}