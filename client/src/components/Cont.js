import React, { Component } from 'react';
import '../css/Cont.css'
import axios from 'axios';
var qs = require('qs');

class Cont extends Component {

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


    render() {
        return (
            <>
                <div className='cont'>
                    <div className='content'>
                        <div className='rect1'>
                            <p>Give us an image of your shirt</p>
                            <input type="file" accept='image/png, image/jpeg' className='choose' id='shirt' multiple={false} onChange={this.shirtUploadHandler} />
                            <button className='choose' id='uploadshirt' onClick={this.uploadShirt}>Upload</button>
                        </div>
                        <div className='matches'>
                            .
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