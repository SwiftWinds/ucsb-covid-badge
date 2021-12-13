<script lang="ts">
  let export name_pronouns;
  let export date;
  let export perm;
  let export src;
  /*
   * Formats a Date object correctly.
   */
  function display(d: Date) {
      let ampm = (d.getHours() < 12 ? "PM" : "AM");
      return `${(d.getMonth()+1)}/${d.getDate()}/${d.getFullYear()} ${hour(d.getHours())}:${d.getMinutes()} ${ampm}`;
  };
  /*
   * Format the hours correctly.
   */
  function hour(h: number) {
      let can = h % 12;
      return (can == 0 ? 12 : can);
  };
  /*
   * Returns a Date object representing when the next survey is due.
   */
  function next(d: Date) {
      let copy = new Date(d);
      copy.setHours(1, 0);
      if (copy<d)
	  copy.setDate(d.getDate()+1);
      return copy;
  };
</script>
<div id="quarantineBadge" class="badge-Green snipcss-kXczv">
  <div style="position: fixed; top: 0; left: 0; width: 100vw; z-index: 9999;">
    <button class="exit btn btn-primary btn-sm pull-right"><i class="fa fa-close"></i></button>
  </div>
  
  <p>UCSB COVID-19 Clearance Status</p>
  <h1 style="margin-top: -20px; font-size: 2.75em;">Cleared to be On-Site</h1><div class="studentStatus">STUDENT</div>
  <div id="now" style="font-size: 1.4em">{display(date)}</div>
  <div id="patInfo" class="row text-center" style="margin-top: 15px;">
    <div class="col-xs-12">
      <img id="patImage" {src} alt="Patient Image" style="max-width: 170px; margin-top: -15px;">
    </div>
    <div class="col-xs-12">
      <h3 id="badgename" class="mb-0" style="margin-top: 4px;">
        <strong>{name_pronouns}</strong>
      </h3>
    </div>
    <div class="col-xs-12">
      
    </div>
    <div class="col-xs-12">
      <span>#405230</span>                
    </div>
  </div>
  
  <div style="font-size: 0.8em">{display(next(date))}</div>
  <div class="badge-mask-language">Mask REQUIRED Indoors</div>
</div>

<style>
  @font-face { 
      font-family:'FontAwesome';
      src:url('./fonts/fontawesome-webfont.eot-v=4.6.1');
      src:url('./fonts/fontawesome-webfont.eot-#iefix&v=4.6.1') format('embedded-opentype'),url('./fonts/fontawesome-webfont.woff2-v=4.6.1') format('woff2'),url('./fonts/fontawesome-webfont.woff-v=4.6.1') format('woff'),url('./fonts/fontawesome-webfont.ttf-v=4.6.1') format('truetype'),url('./fonts/fontawesome-webfont.svg-v=4.6.1#fontawesomeregular') format('svg');
      font-weight:normal;
      font-style:normal;
  } 
  * { 
      box-sizing: border-box; 
      box-sizing: border-box;
      
  } 
  
  body { 
      font: 13px/1.231 arial,helvetica,clean,sans-serif; 
      font-style: normal; 
      font-variant-caps: normal; 
      font-variant-ligatures: normal; 
      font-variant-numeric: normal; 
      font-variant-east-asian: normal; 
      font-weight: normal; 
      font-stretch: normal; 
      font-size: 13px; 
      line-height: 1.231; 
      font-family: arial, helvetica, clean, sans-serif;
      
  } 
  
  body { 
      margin: 0; 
      margin-top: 0px; 
      margin-right: 0px; 
      margin-bottom: 0px; 
      margin-left: 0px;
      
  } 

  body { 
      font-family: "Helvetica Neue",Helvetica,Arial,sans-serif; 
      font-size: 14px; 
      line-height: 1.42857143; 
      color: #555555; 
      background-color: #ffffff; 
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; 
      font-size: 14px; 
      line-height: 1.42857; 
      color: rgb(85, 85, 85); 
      background-color: rgb(255, 255, 255);
      
  } 

body { 
    margin-bottom: 60px; 
    margin-bottom: 60px;

} 

html { 
    font-family: sans-serif; 
    font-family: sans-serif; 
    text-size-adjust: 100%;

} 

html { 
    font-size: 10px; 
    font-size: 10px; 

} 

html { 
    position: relative; 
    min-height: 100%; 
    position: relative; 
    min-height: 100%;

} 

#quarantineBadge { 
    position: fixed; 
    top: 0; 
    left: 0; 
    width: 100vw; 
    height: 100vh; 
    background-color: red; 
    color: white; 
    z-index: 99999; 
    text-align: center; 
    font-weight: bold; 
    font-size: 1.4em; 
    position: fixed; 
    top: 0px; 
    left: 0px; 
    width: 100vw; 
    height: 100vh; 
    background-color: red; 
    color: white; 
    z-index: 99999; 
    text-align: center; 
    font-weight: bold; 
    font-size: 1.4em;

} 

#quarantineBadge { 
    color: white !important; 
    color: white !important;

} 

#quarantineBadge.badge-Green { 
    background-color: limegreen; 
    background-color: limegreen;

} 

#quarantineBadge.badge-Green { 
    background-color: limegreen !important;

} 

:before,:after { 
    box-sizing: border-box; 
    box-sizing: border-box;

} 

p { 
    margin: 0 0 10px; 
    margin-top: 0px; 
    margin-right: 0px; 
    margin-bottom: 10px; 
    margin-left: 0px;

} 

h1 { 
    font-size: 2em; 
    margin: 0.67em 0; 
    font-size: 2em; 
    margin-top: 0.67em; 
    margin-right: 0px; 
    margin-bottom: 0.67em; 
    margin-left: 0px;

} 

h1 { 
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif; 
    font-weight: 500; 
    line-height: 1.2; 
    color: #317eac; 
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; 
    font-weight: 500; 
    line-height: 1.2; 
    color: rgb(49, 126, 172);

} 

h1 { 
    margin-top: 20px; 
    margin-bottom: 10px; 
    margin-top: 20px; 
    margin-bottom: 10px;

} 

h1 { 
    font-size: 36px; 
    font-size: 36px;

} 

#quarantineBadge h1  { 
    font-weight: bold; 
    font-size: 4em; 
    margin-bottom: 0; 
    font-weight: bold; 
    font-size: 4em; 
    margin-bottom: 0px;

} 

#quarantineBadge h1  { 
    color: white !important; 
    color: white !important;

} 

#quarantineBadge h1  { 
    font-size: 2.25em !important; 
    font-size: 2.25em !important;

} 

.studentStatus { 
    font-size: 1.9em; 
    background-color: #003660; 
    color: #FFFFFF; 
    padding: 2px 0px; 
    margiN: 2px 0px; 
    font-size: 1.9em; 
    background-color: rgb(0, 54, 96); 
    color: rgb(255, 255, 255); 
    padding-top: 2px; 
    padding-right: 0px; 
    padding-bottom: 2px; 
    padding-left: 0px; 
    margin-top: 2px; 
    margin-right: 0px; 
    margin-bottom: 2px; 
    margin-left: 0px;

} 

.text-center { 
    text-align: center; 
    text-align: center;

} 

.row { 
    margin-left: -15px; 
    margin-right: -15px; 
    margin-left: -15px; 
    margin-right: -15px;

} 

.clearfix:before,.clearfix:after,dd:before ,dd:after ,.container:before,.container:after,.container-fluid:before,.container-fluid:after,.row:before,.row:after,.form-group:before ,.form-group:after ,.btn-toolbar:before,.btn-toolbar:after,.btn-group:before ,.btn-group:after ,.nav:before,.nav:after,.navbar:before,.navbar:after,.navbar-header:before,.navbar-header:after,.navbar-collapse:before,.navbar-collapse:after,.pager:before,.pager:after,.panel-body:before,.panel-body:after,.modal-header:before,.modal-header:after,.modal-footer:before,.modal-footer:after { 
    content: " "; 
    display: table; 
    content: " "; 
    display: table;

} 

.clearfix:after,dd:after ,.container:after,.container-fluid:after,.row:after,.form-group:after ,.btn-toolbar:after,.btn-group:after ,.nav:after,.navbar:after,.navbar-header:after,.navbar-collapse:after,.pager:after,.panel-body:after,.modal-header:after,.modal-footer:after { 
    clear: both; 
    clear: both;

} 

.badge-mask-language { 
    font-size: 1.2em; 
    font-size: 1.2em;

} 

button,button { 
    font: 99% arial,helvetica,clean,sans-serif; 
    font-style: normal; 
    font-variant-caps: normal; 
    font-variant-ligatures: normal; 
    font-variant-numeric: normal; 
    font-variant-east-asian: normal; 
    font-weight: normal; 
    font-stretch: normal; 
    font-size: 99%; 
    line-height: normal; 
    font-family: arial, helvetica, clean, sans-serif;

} 

button { 
    margin: 0; 
    margin-top: 0px; 
    margin-right: 0px; 
    margin-bottom: 0px; 
    margin-left: 0px;

} 

button { 
    overflow: visible; 
    overflow-x: visible; 
    overflow-y: visible;

} 

button { 
    text-transform: none; 
    text-transform: none;

} 

button { 
    cursor: pointer; 
    appearance: button; 
    cursor: pointer;

} 

.btn { 
    display: inline-block; 
    margin-bottom: 0; 
    font-weight: normal; 
    text-align: center; 
    vertical-align: middle; 
    touch-action: manipulation; 
    cursor: pointer; 
    background-image: none; 
    border: 1px solid transparent; 
    white-space: nowrap; 
    padding: 8px 12px; 
    font-size: 14px; 
    line-height: 1.42857143; 
    border-radius: 4px; 
    user-select: none; 
    display: inline-block; 
    margin-bottom: 0px; 
    font-weight: normal; 
    text-align: center; 
    vertical-align: middle; 
    touch-action: manipulation; 
    cursor: pointer; 
    background-image: none; 
    border-top-width: 1px; 
    border-right-width: 1px; 
    border-bottom-width: 1px; 
    border-left-width: 1px; 
    border-top-style: solid; 
    border-right-style: solid; 
    border-bottom-style: solid; 
    border-left-style: solid; 
    border-top-color: transparent; 
    border-right-color: transparent; 
    border-bottom-color: transparent; 
    border-left-color: transparent; 
    border-image-source: initial; 
    border-image-slice: initial; 
    border-image-width: initial; 
    border-image-outset: initial; 
    border-image-repeat: initial; 
    white-space: nowrap; 
    padding-top: 8px; 
    padding-right: 12px; 
    padding-bottom: 8px; 
    padding-left: 12px; 
    font-size: 14px; 
    line-height: 1.42857; 
    border-top-left-radius: 4px; 
    border-top-right-radius: 4px; 
    border-bottom-right-radius: 4px; 
    border-bottom-left-radius: 4px; 
    user-select: none;

} 

.btn-primary { 
    color: #ffffff; 
    background-color: #2fa4e7; 
    border-color: #2fa4e7; 
    color: rgb(255, 255, 255); 
    background-color: rgb(47, 164, 231); 
    border-top-color: rgb(47, 164, 231); 
    border-right-color: rgb(47, 164, 231); 
    border-bottom-color: rgb(47, 164, 231); 
    border-left-color: rgb(47, 164, 231);

} 

.btn-sm { 
    padding: 5px 10px; 
    font-size: 12px; 
    line-height: 1.5; 
    border-radius: 3px; 
    padding-top: 5px; 
    padding-right: 10px; 
    padding-bottom: 5px; 
    padding-left: 10px; 
    font-size: 12px; 
    line-height: 1.5; 
    border-top-left-radius: 3px; 
    border-top-right-radius: 3px; 
    border-bottom-right-radius: 3px; 
    border-bottom-left-radius: 3px;

} 

.pull-right { 
    float: right !important; 
    float: right !important;

} 

.btn { 
    text-shadow: 0 1px 0 rgba(0,0,0,0.1); 
    text-shadow: rgba(0, 0, 0, 0.1) 0px 1px 0px;

} 

.btn-primary { 
    background-image: -webkit-linear-gradient(#54b4eb, #2fa4e7 60%, #1d9ce5); 
    background-image: -o-linear-gradient(#54b4eb, #2fa4e7 60%, #1d9ce5); 
    background-image: -webkit-gradient(linear, left top, left bottom, from(#54b4eb), color-stop(60%, #2fa4e7), to(#1d9ce5)); 
    background-image: linear-gradient(#54b4eb, #2fa4e7 60%, #1d9ce5); 
    background-repeat: no-repeat; 
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff54b4eb', endColorstr='#ff1d9ce5', GradientType=0); 
    filter: none; 
    border-bottom: 1px solid #178acc; 
    background-image: linear-gradient(rgb(84, 180, 235), rgb(47, 164, 231) 60%, rgb(29, 156, 229)); 
    background-repeat-x: no-repeat; 
    background-repeat-y: no-repeat; 
    filter: none; 
    border-bottom-width: 1px; 
    border-bottom-style: solid; 
    border-bottom-color: rgb(23, 138, 204);

} 

.pull-right { 
    float: right; 
    float: right;

} 

#quarantineBadge .exit  { 
    margin: 2px; 
    font-size: 1em; 
    margin-top: 2px; 
    margin-right: 2px; 
    margin-bottom: 2px; 
    margin-left: 2px; 
    font-size: 1em;

} 

.btn:hover { 
    color: #555555; 
    text-decoration: none; 
    color: rgb(85, 85, 85); 
    text-decoration-line: none; 
    text-decoration-thickness: initial; 
    text-decoration-style: initial; 
    text-decoration-color: initial;

} 

.btn-primary:hover { 
    color: #ffffff; 
    background-color: #178acc; 
    border-color: #1684c2; 
    color: rgb(255, 255, 255); 
    background-color: rgb(23, 138, 204); 
    border-top-color: rgb(22, 132, 194); 
    border-right-color: rgb(22, 132, 194); 
    border-bottom-color: rgb(22, 132, 194); 
    border-left-color: rgb(22, 132, 194);

} 

.btn-primary:active:hover { 
    color: #ffffff; 
    background-color: #1474ac; 
    border-color: #105b87; 
    color: rgb(255, 255, 255); 
    background-color: rgb(20, 116, 172); 
    border-top-color: rgb(16, 91, 135); 
    border-right-color: rgb(16, 91, 135); 
    border-bottom-color: rgb(16, 91, 135); 
    border-left-color: rgb(16, 91, 135);

} 

.col-xs-12 { 
    position: relative; 
    min-height: 1px; 
    padding-left: 15px; 
    padding-right: 15px; 
    position: relative; 
    min-height: 1px; 
    padding-left: 15px; 
    padding-right: 15px;

} 

.col-xs-12 { 
    float: left; 
    float: left;

} 

.col-xs-12 { 
    width: 100%; 
    width: 100%;

} 

.fa { 
    display: inline-block; 
    font: normal normal normal 14px/1 FontAwesome; 
    text-rendering: auto; 
    display: inline-block; 
    font-style: normal; 
    font-variant-caps: normal; 
    font-variant-ligatures: normal; 
    font-variant-numeric: normal; 
    font-variant-east-asian: normal; 
    font-weight: normal; 
    font-stretch: normal; 
    line-height: 1; 
    font-family: FontAwesome; 
    text-rendering: auto; 

} 

.fa-remove:before,.fa-close:before,.fa-times:before { 
    content: "\f00d"; 
    content: "";

} 

img { 
    border: 0; 
    border-top-width: 0px; 
    border-right-width: 0px; 
    border-bottom-width: 0px; 
    border-left-width: 0px; 
    border-top-style: initial; 
    border-right-style: initial; 
    border-bottom-style: initial; 
    border-left-style: initial; 
    border-top-color: initial; 
    border-right-color: initial; 
    border-bottom-color: initial; 
    border-left-color: initial; 
    border-image-source: initial; 
    border-image-slice: initial; 
    border-image-width: initial; 
    border-image-outset: initial; 
    border-image-repeat: initial;

} 

img { 
    vertical-align: middle; 
    vertical-align: middle;

} 

h3 { 
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif; 
    font-weight: 500; 
    line-height: 1.2; 
    color: #317eac; 
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; 
    font-weight: 500; 
    line-height: 1.2; 
    color: rgb(49, 126, 172);

} 

h3 { 
    margin-top: 20px; 
    margin-bottom: 10px; 
    margin-top: 20px; 
    margin-bottom: 10px;

} 

h3 { 
    font-size: 24px; 
    font-size: 24px;

} 

.mb-0 { 
    margin-bottom: 0rem !important; 
    margin-bottom: 0rem !important;

} 

#quarantineBadge h3  { 
    color: white !important; 
    color: white !important;

} 

strong { 
    font-weight: bold; 
    font-weight: bold;

} 
</style>
