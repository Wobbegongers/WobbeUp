import React from 'react'



const Image = () =>{


    const tester = (event) =>{
        event.preventDefault()
        console.log('hey')


        let p;
        let canvas = document.createElement("canvas");
        let img1=document.createElement("img"); 
        p=document.getElementById("file_upload").value;
        console.log("image info", p)
        img1.setAttribute('src', p); 
        canvas.width = img1.width; 
        canvas.height = img1.height; 
        var ctx = canvas.getContext("2d"); 
        ctx.drawImage(img1, 0, 0); 
        var dataURL = canvas.toDataURL("image/png");
        console.log('dataurl', dataURL)
        // alert("from getbase64 function"+dataURL );    


    }

    return(
        <div>
            <form>
                <input type = 'file' id = 'file_upload'></input>
                <input type = 'submit' value = "Submit" onClick = {tester}></input>
            </form>
           

        </div>
    )
}

export default Image