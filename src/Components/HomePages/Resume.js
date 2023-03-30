import React, { Component } from "react";
//import Slide from "react-reveal";
import {Button,Form}from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    // const education = this.props.data.education.map(function (education) {
    //   return (
    //     <div key={education.school}>
    //       <h3>{education.school}</h3>
    //       <p className="info">
    //         {education.degree} <span>&bull;</span>
    //         <em className="date">{education.graduated}</em>
    //       </p>
    //       <p>{education.description}</p>
    //     </div>
    //   );
    // });



   

    return (
      <section id="resume">
        {/* <Slide left duration={1300}> */}
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>الاستبيانات</span>
              </h1>
            </div>

              <div className="row item">
                
          
                <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <h1>الرجاء تعبئة الاستبيان</h1>
                <label for="formfullnamearabic">الاسم الثلاثي باللغة العربية </label>
            <Form.Group className="mb-3"   controlId='formfullnamearabic'>
              
    <Form.Control type='text'  required > 

    </Form.Control>
    
</Form.Group>
<label for="formfullnameenglish">الاسم الثلاثي باللغة الانكليزية </label>
<Form.Group className="mb-3" controlId='formfullnameenglish'>
    <Form.Control type='text'  required > 

    </Form.Control>
</Form.Group>
<label for="formfullnamearabic">اسم الأم</label>
<Form.Group className="mb-3" controlId='mothername'>
    <Form.Control type='text'  required > 

    </Form.Control>
</Form.Group> 
<label for="address">مكان الاقامة  </label>
   <Form.Group className="mb-3" controlId='address'>
    <Form.Control type='text'  required > 

    </Form.Control>
</Form.Group>   
<label for="date">تاريخ تعبئة الاستمارة </label>
 <Form.Group className="mb-3" controlId='date'>
    <Form.Control type='date'  required > 

    </Form.Control>
</Form.Group> 
<label for="phone"> رقم الموبايل </label>
   <Form.Group className="mb-3" controlId='phone'>
    <Form.Control type='number' placeholder='رقم الموبايل' required > 

    </Form.Control>
</Form.Group>   
<label for="courses">الدورات التي يرغب الطالب بحضورها</label>
 <Form.Group className="mb-3" controlId='courses'>
    <Form.Control type='text'  required > 

    </Form.Control>
</Form.Group>  
<label for="time">   التوقيت المناسب للطالب </label>
  <Form.Group className="mb-3" controlId='time'>
    <Form.Control type='time' required > 

    </Form.Control>
</Form.Group>

<Button type="submit" >
حفظ
</Button>
            </Form></div>
              </div>
            
        
      </section>
    );
  }
}

export default Resume;
