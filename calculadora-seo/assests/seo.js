var boldWords;
var boldList = "";
var ellipsis = " ...";
var dateEllipsis = " <b>...</b> ";

var d = new Date();
var month = new Array(12);
month[0] = "Ene";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Abr";
month[4] = "May";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Ago";
month[8] = "Sep";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dic";

var todaysDate = month[d.getMonth()] + ' '  + d.getDate() + ', ' + d.getFullYear();

function get(e){return document.getElementById(e);}
function val(e){return document.getElementById(e).value;}
function html(e){return document.getElementById(e).innerHTML;}

function titleFunction(){
    theTitle = val('in_title').replace(/^\s+|\s+$/g,"");
    get('titlechar').innerHTML = theTitle.length;
    get('out_title').innerHTML = theTitle;
    var dateLength = 0;
    if(theTitle.length + dateLength <= 60){
        get('out_title').innerHTML = theTitle;}
    else{
        var snipLimit = 60 - dateLength;
        snippetSpace = theTitle.lastIndexOf(" ",snipLimit);
        get('out_title').innerHTML = theTitle.substring(0,snippetSpace).concat(ellipsis.bold());}



    // if(get('check_bold').checked == true){
    //     highlightTerms('out_title');
    // }
}
function snippetFunction(){
    theSnippet = val('in_snippet').replace(/^\s+|\s+$/g,"");
    /// if(get('check_date').checked == true){
     /// var dateLength = html('out_date').length + 5;
//     //     document.getElementById('out_datedots').style.display = "inline";
     // }else{
       var dateLength = 0;
//     //     document.getElementById('out_datedots').style.display = "none";
 //}
    var snippetLength = theSnippet.length + dateLength;
    get('snippetchar').innerHTML = snippetLength;
    if(theSnippet.length + dateLength <= 156){
        get('out_snippet').innerHTML = theSnippet;}
    else{
        var snipLimit = 153 - dateLength;
        snippetSpace = theSnippet.lastIndexOf(" ",snipLimit);
        get('out_snippet').innerHTML = theSnippet.substring(0,snippetSpace).concat(ellipsis.bold());}
    // if(get('check_bold').checked == true){
    //     highlightTerms('out_snippet');
    // }
}
function urlFunction(){
    var theURL = val('in_url');
    theURL = theURL.replace('http://','');
    theURL = theURL.replace(/^\s+|\s+$/g,"");
    get('out_url').innerHTML = theURL;
    // if(get('check_bold').checked == true){
    //     highlightURL();}
    }

// function showTopads(){
//     if(get('check_topads').checked == true){
//         document.getElementById('out_topads').style.display = "block";
//         document.getElementById('notes_default').style.display = "none";
//         document.getElementById('notes_sponsored').style.display = "block";}
//     else{
//         document.getElementById('out_topads').style.display = "none";
//         if(get('check_rightads').checked == false){
//             document.getElementById('notes_default').style.display = "block";
//             document.getElementById('notes_sponsored').style.display = "none";}}}
// function showRightads(){
//     if(get('check_rightads').checked == true){
//         document.getElementById('out_rightads').style.display = "block";
//         document.getElementById('notes_default').style.display = "none";
//         document.getElementById('notes_sponsored').style.display = "block";}
//     else{
//         document.getElementById('out_rightads').style.display = "none";
//         document.getElementById('topspons').float = "right";
//         if(get('check_topads').checked == false){
//             document.getElementById('notes_default').style.display = "block";
//             document.getElementById('notes_sponsored').style.display = "none";}}}
function showOrganics(){
    // if(get('check_organics').checked == true){
    //     document.getElementById('toporganic').style.display = "block";
        
    // }
    // else{
    //     document.getElementById('toporganic').style.display = "none";
    
    // }
}
function showSerpElements(){
    if(get('check_serpelements').checked == true){
        // document.getElementById('box_topads').style.display = "inline";
        // document.getElementById('box_rightads').style.display = "inline";
        // document.getElementById('box_organics').style.display = "inline";
    }
    else{
        // document.getElementById('box_topads').style.display = "none";
        // document.getElementById('box_rightads').style.display = "none";
        // document.getElementById('box_organics').style.display = "none";
    }
    if(get('check_serpelements').checked == true){
        document.getElementById('out_topsearch').style.display = "block";
        document.getElementById('out_bottomsearch').style.display = "block";
         document.getElementById('footer').style.display = "block";
        // showTopads();
        // showRightads();
        showOrganics();}
    else{
         document.getElementById('out_topsearch').style.display = "none";
         document.getElementById('out_bottomsearch').style.display = "none";
         document.getElementById('footer').style.display = "none";
        // document.getElementById('out_leftside').style.display = "none";
        // document.getElementById('out_topads').style.display = "none";
        // document.getElementById('out_rightads').style.display = "none";
        // document.getElementById('topspons').float = "right";
        // document.getElementById('toporganic').style.display = "none";
        // document.getElementById('bottomorganic').style.display = "none";
        // document.getElementById('notes_default').style.display = "block";
        // document.getElementById('notes_sponsored').style.display = "none";}}
function dateFunction(){
        get('out_date').innerHTML = val('in_datevalue').replace(/^\s+|\s+$/g,"");
        snippetFunction();
        dateError();}
function showDate(){
    if(get('check_date').checked == true){
        document.getElementById('out_date').style.display = "inline";
        document.getElementById('box_date').style.display = "block";
        document.getElementById('out_datedots').style.display = "inline";}
    else{
        document.getElementById('out_date').style.display = "none";
        document.getElementById('box_date').style.display = "none";
        document.getElementById('out_datedots').style.display = "none";}
    showTR();
    dateFunction();
    dateError();}
function useTodaysDate(){
    if(val('in_datevalue') == '' && get('check_date').checked == true){
        get('in_datevalue').innerHTML = todaysDate;}}
function focusDateValue(){
    get('in_datevalue').focus();}
function dateError(){
    if(val('in_datevalue') == '' && get('check_date').checked == true){
            document.getElementById('addadate').color = "#F00";
            document.getElementById('enteradate').color = "#F00";
            document.getElementById('out_datedots').color = "#F00";
            focusDateValue();}
        else{
            document.getElementById('addadate').color = "#000";
            document.getElementById('enteradate').color = "#333";
            document.getElementById('out_datedots').color = "#666";}}


function showCached(){
    if(get('check_cached').checked == true && get('check_similar').checked == true){
        document.getElementById('out_dash1').style.display = "inline";
        document.getElementById('out_dash2').style.display = "inline";}
    if(get('check_cached').checked == false && get('check_similar').checked == false){
        document.getElementById('out_dash1').style.display = "none";
        document.getElementById('out_dash2').style.display = "none";}
    if(get('check_cached').checked == true && get('check_similar').checked == false){
        document.getElementById('out_dash1').style.display = "inline";
        document.getElementById('out_dash2').style.display = "none";}
    if(get('check_cached').checked == false && get('check_similar').checked == true){
        document.getElementById('out_dash1').style.display = "inline";
        document.getElementById('out_dash2').style.display = "none";}
    if(get('check_cached').checked == true){
        document.getElementById('out_cached').style.display = "inline";}
    else{
        document.getElementById('out_cached').style.display = "none";}
    if(get('check_similar').checked == true){
        document.getElementById('out_similar').style.display = "inline";}
    else{
        document.getElementById('out_similar').style.display = "none";}}





// This function takes the value of in_bold
// and outputs an array of words to make bold
function makeBoldWords(){
    var splitChars = /\s+/g;
    var trashChars = /\s+|\W+|^.{1,2}$/g;
    boldWords = "";
    boldWords = val('in_bold').replace(trashChars," ").toLowerCase();
    boldWords = boldWords.split(splitChars);
    for(i=0; i<boldWords.length; i++){
        boldWords[i] = boldWords[i].replace(trashChars,"");
        if(boldWords[i] == ""){
            boldWords.splice(i,1);
            i--;
        }
    }
    boldList = "";
    for(i=0; i<boldWords.length; i++){
        boldList += boldWords[i] + "\n";
    }
    get('in_bold').value = boldList;
    return boldWords;
}





function focusRichText(){
        get('in_richtext').focus();}
        
function pageRefresh(){
    // showTopads();
    // showRightads();
    showOrganics();
    showSerpElements();
    showRichSnippet();
    useTodaysDate();
    showDate();
    showCached();
    showBold();
    titleFunction();
    snippetFunction();
    urlFunction();
    richTextFunction();
    dateFunction();
}


    }
}
// titleFunction();
// snippetFunction();

function showBold(){
    if(get('check_bold').checked == false){
            document.getElementById('box_bold').style.display = "none";}
    else{
            document.getElementById('box_bold').style.display = "block";}
// The next 2 lines are there to force IE to reflow the page layout.
    document.getElementById('out_searchresults').style.display = "none";
    document.getElementById('out_searchresults').style.display = "block";
}

function focusBold(){
    titleFunction();
    snippetFunction();
    urlFunction();
    get('in_bold').focus();
    get('in_bold').select();}

    
function highlightTerms(content){
    makeBoldWords();
    var outNode = get(content);
    for(i=0; i<boldWords.length; i++){
        var boldRegExp = new RegExp('\\b('+boldWords[i]+'(\'\\S*)?)\\b','ig');
        var tempText = outNode.innerHTML;
        outNode.innerHTML = tempText.replace(boldRegExp,'<em>$1</em>');
    }
}



// This function takes the value of in_bold
// and outputs an array of words to make bold
function makeBoldWords(){
    var splitChars = /\s+/g;
    var trashChars = /\s+|\W+|^.{1,2}$/g;
    boldWords = "";
    boldWords = val('in_bold').replace(trashChars," ").toLowerCase();
    boldWords = boldWords.split(splitChars);
    for(i=0; i<boldWords.length; i++){
        boldWords[i] = boldWords[i].replace(trashChars,"");
        if(boldWords[i] == ""){
            boldWords.splice(i,1);
            i--;
        }
    }
    boldList = "";
    for(i=0; i<boldWords.length; i++){
        boldList += boldWords[i] + "\n";
    }
    get('in_bold').value = boldList;
    return boldWords;
}
function highlightURL(){
    makeBoldWords();
    var outNode = get('out_url');
    for(i=0; i<boldWords.length; i++){
        var boldRegExp = new RegExp('('+boldWords[i]+')','ig');
        var tempText = outNode.innerHTML;
        outNode.innerHTML = tempText.replace(boldRegExp,'<em>$1</em>');
    }
}
function showRichSnippet(){
    if(get('check_richsnippet').checked == true){
         document.getElementById('out_richsnippet').style.display = "inline";
        document.getElementById('box_richtext').style.display = "block";
        document.getElementById('box_stars').style.display = "block";}
    else{
        document.getElementById('out_richsnippet').style.display = "none";
        document.getElementById('box_richtext').style.display = "none";
        document.getElementById('box_stars').style.display = "none";}
    if(get('check_stars').checked == true){
        document.getElementById('out_stars').style.display = "inline";}
    else{
        document.getElementById('out_stars').style.display = "none";}
    showTR();}

    function showTR(){
        if(get('check_date').checked == false && get('check_richsnippet').checked == false){
                //document.getElementById('box_rich_date').style.display = "none";
            }
        else{
               // document.getElementById('box_rich_date').style.display = "block";
            }
            }

            function focusRichText(){
                get('in_richtext').focus();}

                function richTextFunction(){
                    if(val('in_richtext') != ''){
                        get('out_richtext').innerHTML = val('in_richtext').replace(/^\s+|\s+$/g,"");
                    }
                }