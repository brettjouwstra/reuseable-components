
var sizeBox = document.getElementById('sizeBox'), // container for file size info
    progress = document.getElementById('progress');
let uploader = new ss.SimpleUpload({
    customHeaders: {"Authorization": "Basic base64-here"},
    dropzone: 'sizebox',
    multiple: true,
    button: 'customFile', // HTML element used as upload button
    url: '/-/image', // URL of server-side upload handler
    responseType: 'json',
    name: 'files', // Parameter name of the uploaded file
    form: 'upload',
    onComplete:   function(filename, response) {
        if (!response) {
          alert(filename + 'upload failed');
          return false;
        }
        alert(response)
        $("#alert").css("visibility", "visible")
      }
});

https://github.com/LPology/Simple-Ajax-Uploader
$('#customFile').on('change',function(){
  //get the file name
  var fileName = $(this).val();
  //replace the "Choose a file" label
  $(this).next('.custom-file-label').html(fileName.replace(/^.*[\\\/]/, ''));
})