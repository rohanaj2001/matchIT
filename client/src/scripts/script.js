var shirt=document.getElementById('shirtupload')
shirt.addEventListener('click',(event)=>{
event.preventDefault();

var reader = new FileReader();
var shirt_image = document.getElementById('shirt');
var name =shirt_image.files[0].name;
reader.addEventListener('load',()=>
{
    if(this.result && localStorage)
    {
        window.localStorage.setItem(name, this.result);
        console.log("shirt image added");
    }
    else{
        alert("couldn't add "+name);
    }

})
    reader.readAsDataURL(shirt_image.files[0])
    console.log(name);

})
