import React, { Component } from 'react';
import '../css/Cont.css'
import axios from 'axios';
var qs = require('qs');

class Cont extends Component {
    constructor(props) {
        super(props);
        this.state = { shirtColor: '',shirtComplementaryColor : '' };
      }
    shirtUploadHandler = (e) => {

        var reader = new FileReader();

        reader.onload = async function () {
            const image = reader.result;
            console.log(image); //base64encoded string
            var data = qs.stringify({
                'shirtImage': image
            });
            var config = {
                method: 'post',
                url: 'http://localhost:5000/shirtapi?method=post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: data
            };


            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                })
                .catch(function (error) {
                    alert("upload unsuccessful "+error);
                    console.log(error);
                });

        };
        reader.onerror = function (error) {
            alert("upload unsuccessful")
            console.log('Error: ', error);
        };
        reader.readAsDataURL(e.target.files[0]);

    }
    uploadShirt = (e) => {
        e.preventDefault();
        console.log("shirt uploaded");

    }

    pantUploadHandler = (e) => {

        var reader = new FileReader();

        reader.onload = async function () {
            const image = reader.result;
            console.log(image); //base64encoded string
            var data = qs.stringify({
                'pantImage': image
            });
            var config = {
                method: 'post',
                url: 'http://localhost:5000/pantapi?method=post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: data
            };


            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                })
                .catch(function (error) {
                    alert("upload unsuccessful "+error);
                    console.log(error);
                });

        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
        reader.readAsDataURL(e.target.files[0]);

    }
    uploadPant = (e) => {
        e.preventDefault();
        console.log("pant uploaded");
    }
  
    showResults=async (e)=> {
        let c,cc
        var config = {
            method: 'get',
            url: 'http://localhost:5000/matches?method=get',
            headers: { }
          };
          
          await axios(config)
          .then(async response=>{
            console.log(response.data);
              c=await response.data.shirtColor
              cc=await response.data.shirtComplementaryColor
            })
            .catch(function (error) {
            console.log(error);
            
        })
        this.setState({ shirtColor: c, shirtComplementaryColor :cc})
        document.getElementById('c').style.backgroundColor=`${c}`
        document.getElementById('c').style.display=`block`

        document.getElementById('cc').style.backgroundColor=`${cc}`
        document.getElementById('cc').style.display=`block`
    

          }
    


    render() {
        return (
            <>
                <div className='cont'>
                    <div className='content'>
                        <div className='rect1'>
                            <p>Give us an image of your shirt</p>
                            <input type="file" accept='image/png' className='choose' id='shirt' multiple={false} onChange={this.shirtUploadHandler} />
                            <button className='choose' id='uploadshirt' onClick={this.uploadShirt}>Upload</button>
                        </div>
                        <div className='matches'>
                            <div id='c' className='dyn'></div>
                            <div id='cc' className='dyn'></div>
                            <button className='choose' style={{minWidth:'fit-content'}} onClick={this.showResults}>Show results</button>
                        </div>
                        <div className='rect1' id='pant'>
                            <p>Give us an image of your pant</p>
                            <input type='file' accept='image/png, image/jpeg' id="pant" className='choose' multiple={false} onChange={this.pantUploadHandler} />
                            <button className='choose' id='uploadpant' onClick={this.uploadPant}>Upload</button>
                        </div>
                        <div className='rect1' id='result'>
                            <div className='progtrack'>
                                <div className='proghead'></div>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}
export default Cont;