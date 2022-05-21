
// $(function (){
//     $('[data-toggle-"popover"]').popover()
// })
// function myCopy(name){
//     var range =document.createRange();
//     range.selectNode(document.getElementById(name));
//     window.getSelection().removeAllRanges();
//     window.getSelection().addRange();
//     document.execCommand("copy");
//     window.getSelection().removeAllRanges();

// }

// var myCode=document.getElementById('#mypython');
// var myText = document.querySelector("#input");
// myCode.addEventListener('click', execCopy);
// function execCopy() {
//   myText.select();
//   document.execCommand("copy");
// }
  
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }
                

 