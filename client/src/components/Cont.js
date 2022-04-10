import React,{Component} from 'react';
import '../css/Cont.css'

class Cont extends Component{
    uploadHandler = (e)=>{
        e.preventDefault();
        console.log(e.target.files[0]);

    }
    render (){
        return (
            <>
                <div className='cont'>
                    <div className='content'>
                        <div className='rect1'>
                            <p>Give us an image of your shirt</p>
                            <input type="file" id="shirt"  className='choose' accept='image/png, image/jpeg'  name='shirt' onChange={this.uploadHandler}/>
                            <button className='choose' id='uploadshirt'>Upload</button>
                        </div>
                        <div className='matches'>
                            .
                        </div>
                        <div className='rect1' id='pant'>
                        <p>Give us an image of your pant</p>
                        <input type='file' accept='image/png, image/jpeg' id="pant" className='choose' />  
                        <button className='choose' id='uploadpant'>Upload</button>
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