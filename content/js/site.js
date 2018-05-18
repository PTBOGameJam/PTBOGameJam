
// References
var siteHeader;
siteHeader = $('div#header');
$( document ).ready(function() {
  siteHeader = $('div#header');
});


var titlebarVideo = $('video#titlebar-video');
var titlebarContainer = $('div#titlebar-container');

var page = window.document.documentElement;
var pageSupportedTransitions = Modernizr.csstransitions;
var pageScrollAmount = 0;

// Cached Functions
var siteMobile = false;
(function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))siteMobile = true})(navigator.userAgent||navigator.vendor||window.opera);

// Helper Functions
function isHDPI()
{
    // We don't cache this as they could switch between monitors
    if ( window.devicePixelRatio > 1 ) { return true; }
    return false;
}

function isMobile()
{
  return siteMobile;
}

function isScrolled()
{
  return window.pageYOffset || page.scrollTop;
}

function addEvent(element, eventName, callback)
{
  if (element.addEventListener) {
    element.addEventListener(eventName, callback, false)
  } else {
    element.attachEvent(eventName, callback, false);
  }
}





// More References
var pageClickEvent = isMobile() ? 'touchstart' : 'click';
var showingMobileMenu = false;
var showingMobileSubMenu = false;

// HDPI Image Replacement
if ( window.devicePixelRatio > 1 ) {

  // Handle Images
	var hdpiImages = $('img[hdpi="true"]').each(function(){
      var source = $(this).attr("src");
      var period = source.lastIndexOf(".");
      $(this).attr("src", source.substr(0, period) + "@2x" + source.substr(period));
	});

  // Handle Div Backgrounds - This counts on it being the first "."
  var hdpiImages = $('div[hdpi="true"]').each(function(){
    var source = $(this).attr("style");
    var period = source.lastIndexOf(".");
    $(this).attr("style", source.substr(0, period) + "@2x" + source.substr(period));
	});
}

// Menu Transition Settings
var pageTransitionEndEvents = {
  'WebkitTransition': 'webkitTransitionEnd',
  'MozTransition': 'transitionend',
  'OTransition': 'oTransitionEnd',
  'msTransition': 'MSTransitionEnd',
  'transition': 'transitionend'
};
var pageTransitionEnd = pageTransitionEndEvents[ Modernizr.prefixed( 'transition' ) ];

// Menu Setup
var showMenu = document.getElementById( 'showMenu' );
var showSubMenu = document.getElementById('mobile-sub-menu');
var showMenuIcon = document.getElementById('showMenuIcon');
var showSubMenuIcon = document.getElementById('showSubMenuIcon');
var headerBar = document.getElementById('menu');

if ( showMenu ) {
  var perspectiveWrapper = document.getElementById( 'perspective' );
}
if ( perspectiveWrapper != null ) {
  var container = perspectiveWrapper.querySelector( '.perspective-container' );
}
if (container != null) {
  var contentWrapper = container.querySelector( '.perspective-wrapper' );
}

function ShowMobileMenu(ev)
{
  // Hide Drop Down
  HideMobileSubMenu(ev);

  ev.stopPropagation();
  ev.preventDefault();
  pageScrollAmount = isScrolled();
  // change top of contentWrapper
  contentWrapper.style.top = pageScrollAmount * -1 + 'px';
  // mac chrome issue:
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  // add modalview class
  classie.add( perspectiveWrapper, 'modalview' );
  // animate..
  setTimeout( function() { classie.add( perspectiveWrapper, 'animate' ); }, 25 );
  showingMobileMenu = true;
  classie.remove(showMenuIcon, 'icon-menu');
  classie.add(showMenuIcon, 'icon-resize-full-alt');
}
function HideMobileMenu(ev)
{
  // Hide Drop Down
  HideMobileSubMenu(ev);

  if( classie.has( perspectiveWrapper, 'animate') ) {

    var onEndTransFn = function( ev )
    {
      if( pageSupportedTransitions && ( ev.target.className !== 'perspective-container' || ev.propertyName.indexOf( 'transform' ) == -1 ) ) return;

      this.removeEventListener( pageTransitionEnd, onEndTransFn );
      classie.remove( perspectiveWrapper, 'modalview' );

      // mac chrome issue:
      document.body.scrollTop = document.documentElement.scrollTop = pageScrollAmount;
      // change top of contentWrapper
      contentWrapper.style.top = '0px';

      classie.remove(showMenuIcon, 'icon-resize-full-alt');
      classie.add(showMenuIcon, 'icon-menu');
    };

    if( pageSupportedTransitions ) {
      perspectiveWrapper.addEventListener( pageTransitionEnd, onEndTransFn );
    }
    else {
      onEndTransFn.call();
    }
    classie.remove( perspectiveWrapper, 'animate' );
  }
  showingMobileMenu = false;
}

function ShowMobileSubMenu(ev)
{
  if ( showSubMenuIcon == null ) return;
  showingMobileSubMenu = true;
  classie.remove(showSubMenu, 'display-none');


  classie.add(showSubMenuIcon, 'icon-angle-up');
  classie.remove(showSubMenuIcon, 'icon-angle-down');
}
function HideMobileSubMenu(ev)
{
  if ( showSubMenuIcon == null ) return;

  classie.add(showSubMenu, 'display-none');

  classie.remove(showSubMenuIcon, 'icon-angle-up');
  classie.add(showSubMenuIcon, 'icon-angle-down');
  showingMobileSubMenu = false;
}

// Smart Check For Components
if ( showMenuIcon != null && perspectiveWrapper != null && container != null && contentWrapper != null ) {

    showMenuIcon.addEventListener( pageClickEvent, function( ev ) {
      if ( !showingMobileMenu ) {
        ShowMobileMenu(ev);
      } else {
        HideMobileMenu(ev);
      }
    });

    container.addEventListener( pageClickEvent, function( ev ) {
      HideMobileMenu(ev);
      HideMobileSubMenu(ev);
    });

    perspectiveWrapper.addEventListener( pageClickEvent, function( ev ) { return false; } );
}

if ( showSubMenuIcon != null ) {
  showSubMenuIcon.addEventListener( pageClickEvent, function( ev ) {
    if ( !showingMobileSubMenu ) {
      ShowMobileSubMenu(ev);
    } else {
      HideMobileSubMenu(ev);
    }
  });
}



// Handle Scrolling Events
$(window).scroll(function () { onScrollSite(); });
function onScrollSite()
{
  var scroll = window.pageYOffset || document.documentElement.scrollTop;
  var position = siteHeader.position();
  var top = siteHeader.css('top');
}



// Handle Site Wide Resize Events
$(window).resize(function() { onResizeSite(); });
function onResizeSite()
{
    // Make all our fullwidth guys proper
    $('.jx-parallax-fullwidth').css('height', window.innerHeight + 'px');
}
onResizeSite();

$(document).ready(function(){ onReadySite(); });
function onReadySite()
{
  // Find all countdowns and setup
  if ($(".countdown").length > 0)
  {
    var cache = $(".countdown");
    cache.jCounter({
      date: cache.data("countdown"),
      timezone: "America/Toronto",
      format: "dd:hh:mm:ss",
      twoDigits: 'on',
      fallback: function() { console.log("Counter finished!") }
    });
  }




  //Count Go up
  $('.jx-counter-number').animate({marginTop:0},1000,'swing');

  $('.count-1').counterUp({
    delay: 10,
    time: 1000
  });

  $('.count-2').counterUp({
    delay: 20,
    time: 1000
  });

  $('.count-3').counterUp({
    delay: 30,
    time: 1000
  });

  $('.count-4').counterUp({
    delay: 30,
    time: 1000
  });
}

// Handle Subscriber Button
$('#mailinglist').submit(function() {
	document.location.href = "http://dotbunny.us7.list-manage.com/subscribe?u=862e4c930cb0704921c2b54e3&id=78848640c0&EMAIL=" + $('#EMAIL').val();
	return false;
});

$('#site-search').submit(function() {
	document.location.href = "https://www.google.ca/#q=site:ptbogamejam.com+" + $('#QUERY').val();
	return false;
});
