import React, { Component } from "react";
//import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

  
    const message = this.props.data.contactmessage;

    return (
      <section id="contact">
        {/* <Fade bottom duration={1000}> */}
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{message}</p>
            </div>
          </div>
        {/* </Fade> */}

        <div className="row">
          {/* <Slide left duration={1000}> */}
            <div className="eight columns">
              <form action="" method="post" id="contactForm" name="contactForm">
                <fieldset>
                  <div>
                    <label htmlFor="formfullnamearabic">
                      الاسم الثلاثي باللغة العربية <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="formfullnamearabic"
                      name="formfullnamearabic"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="formfullnameenglish">
                      الاسم الثلاثي باللغة الانكليزية <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="formfullnameenglish"
                      name="formfullnameenglish"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="mothername">
                      اسم الأم    <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="mothername"
                      name="mothername"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="address">
                      مكان الاقامة     <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="address"
                      name="address"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="date">
                      تاريخ تعبئة الاستمارة      <span className="required">*</span>
                    </label>
                    <input
                      type="date"
                      defaultValue=""
                      size="35"
                      id="date"
                      name="date"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone">
                      رقم الهاتف        <span className="required">*</span>
                    </label>
                    <input
                      type="number"
                      defaultValue=""
                      size="35"
                      id="phone"
                      name="phone"
                      onChange={this.handleChange}
                    />
                  </div>
                  
                

                  <div>
                    <label htmlFor="courses">
                    الدورات التي يرغب الطالب بحضورها      <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="courses"
                      name="courses"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="time">
                      التوقيت المناسب للطالب <span className="required">*</span>
                    </label>
                    <input
                      type="time"
                      defaultValue=""
                      size="35"
                      id="time"
                      name="time"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="branches">اسم الفرع </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="branches"
                      name="branches"
                      onChange={this.handleChange}
                    />
                  </div>

                 

                  <div>
                    <button className="submit">Submit</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>

              <div id="message-warning"> لم تتم العملية بنجاح</div>
              <div id="message-success">
                <i className="fa fa-check"></i>تمت العملية بنجاح
                <br />
              </div>
            </div>
         
            
                   
        </div>
      </section>
    );
  }
}

export default Contact;
