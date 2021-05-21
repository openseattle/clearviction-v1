import React from "react";
import logo from '../Assets/CVP.png'
import '../CSS/Home.css'

const Home = () => {
  return (
    <div>
      <section class="container-fluid"></section>
      <section class="container-fluid-header">
        <div class="row">
          <div class="col" id="jumbotron-text">
            <h3>Washington Conviction Vacation Project</h3>
            {/* <button type="button" class="btn btn-primary" onClick="#section-one">Learn More!</button> */}
          </div>
          <div class="col">
            <img src={logo} id="logo"></img>
          </div>
        </div>
      </section>

      <section class="container-fluid-content" id="section-one">
        <div class="row">
          <div class="col">
            <h1 class="display-6">Who We Are</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
              <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
            </svg>
            <p>
              The Washington Conviction Vacation Project is an all-volunteer team focused on reducing barriers faced by people with a conviction on their record. If you’d like to know more about the barriers that people continue to face for years after satisfying the sentence they are issued by a court, Center for American Progress has created a <a href="https://www.americanprogress.org/issues/criminal-justice/reports/2020/04/15/483264/expunging-clearing-criminal-records/">great reference. </a>
            </p>
            <p>
            “Vacation” is what the court calls it when they make a conviction no longer visible to prospective employers, landlords, and the like. It’s not gone, it’s just invisible to society.
            </p>
            <p>We are doing this by streamlining the process of vacating eligible convictions in Washington State.</p>
          </div>
          <div class="col">
            <h1 class="display-6">The Problem</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-patch-question-fill" viewBox="0 0 16 16">
              <path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z"/>
            </svg>
            <p>
            The process of vacating a conviction is convoluted, making it difficult for most folks to navigate. It requires a number of steps that can be difficult to accomplish: gathering documents, filing motions with the court, scheduling hearings with a judge, as well as determining eligibility. Each step requires time and know-how, increasing the barrier of entry for applicants to reaching vacation status. 
            </p>
            <p>
            Hiring an attorney can simplify the process, but it’s unaffordable for most, and while free volunteer services are available,  these clinics are inaccessible, and only cover a few of the steps within the process.
            </p>
          </div>
          <div class="col">
            <h1 class="display-6">Our Goal</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-lightbulb-fill" viewBox="0 0 16 16">
              <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/>
            </svg>
            <p>
              We believe that we can create software that simplifies some of the steps people go through when asking a court to vacate their convictions. 
            </p>
            <p>
            We will be creating and releasing the software bit by bit, making sure earlier features work before stacking on additional features. Whichever parts of the process the software helps with first, and whether we limit the first versions to particular counties or conviction types will be a function of our Research and Design activities, spoken of below.  
            </p>
          </div>
        </div>
      </section>

      <section class="container-fluid-content">
        <div class="row">
            <div class="col">
              <h1 class="display-6">Research Findings</h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-clipboard-data" viewBox="0 0 16 16">
                <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z"/>
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
              </svg>
              <p>
              We have conducted a round of interviews with attorneys who are subject matter experts in conviction vacations and surfaced a number of challenges their clients typically face. These pain points fall within 4 categories: determining vacation eligibility, communication with clients, finding conviction records, and interaction with courts. 
              </p>
            </div>
            <div class="col">
              <h1 class="display-6">Product & Design</h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-easel" viewBox="0 0 16 16">
                <path d="M8 0a.5.5 0 0 1 .473.337L9.046 2H14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1.85l1.323 3.837a.5.5 0 1 1-.946.326L11.092 11H8.5v3a.5.5 0 0 1-1 0v-3H4.908l-1.435 4.163a.5.5 0 1 1-.946-.326L3.85 11H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4.954L7.527.337A.5.5 0 0 1 8 0zM2 3v7h12V3H2z"/>
              </svg>
              <p>
              Based on our research and product release plan, we have decided to tackle <em>determining vacation eligibility</em> first. Multiple states have successfully implemented different versions of this type of software. Not only do they provide a proof of concept that this type of software is in demand and can work, but they have also inspired us with ideas for different features that we could incorporate into our work in Washington State.
              </p>
            </div>
            <div class="col">
              <h1 class="display-6">Eligibility Calculator</h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-calculator" viewBox="0 0 16 16">
                <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"/>
              </svg>
              <p>
              Our first release will be a tool that helps clients determine whether a conviction they have qualifies for vacationーwhether they should even bother trying to get the court to vacate it.  This eligibility calculator is rooted in the Revised Code of Washington/laws (RCW) which the subject matter expert attorneys we mentioned above typically use. 
              </p>
            </div>
        </div>
      </section>

      <section class="container-fluid-content">
        <div class="row">
          <h1 class="display-6">Future Plans</h1>
            <div class="col">
              <p>
              We have all sorts of additional tools in mind that could help applicants locate court documents, prepare and file relevant motions with the court, and track their progress and status.  We are investigating the feasibility of a Turbo Tax style interface to simplify this process, and then e-filing the forms in counties where it is permitted. 
              </p>
            </div>
            <div class="col">
              <p>
              Additional tools are being explored to assist volunteer attorneys - ones who normally specialize in other legal areas - navigate the conviction vacation domain when they help out in those free legal clinics. These tools will help prime these attorneys to be in a better position to represent individuals across the state. 
              </p>
            </div>
            <div class="col">
              <p>
              We are only limited by each court’s cooperation and the bounds of our volunteers' time, which is why we can use any help that you are willing to offer. If you are interested in learning more about the project or volunteering your skills and time, please connect with us!
              </p>
            </div>
        </div>
      </section>

      <section class="container-fluid-content">
        <div class="row">
          <div class="col">
            <h3>Want to Learn More?</h3>
            <button type="button" class="btn btn-primary"><a class="white-link" href="mailto:cvp@seamus.work">Contact Us!</a></button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
