"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const Openings = () => {
  // Define separate state variables for each job description
  const [showDescription1, setShowDescription1] = useState(false);
  const [showDescription2, setShowDescription2] = useState(false);
  const [showDescription3, setShowDescription3] = useState(false);

  // Toggle functions for each job description
  const toggleDescription1 = () => {
    setShowDescription1(!showDescription1);
  };

  const toggleDescription2 = () => {
    setShowDescription2(!showDescription2);
  };

  const toggleDescription3 = () => {
    setShowDescription3(!showDescription3);
  };

  return (
    <section
      className="join-text nitro-offscreen w-full p-[20px] lg:p-[40px]"
      id="currentOpenings"
    >
      <div className="container mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Current openings
          </h2>
          <h2 className="text-lg lg:text-xl font-normal">
            We’re always looking for talented people
          </h2>
        </div>
        <div className="join-box flex flex-col gap-4 ">
        <div className="JobContainer bg-[#eeeeee] p-4 rounded-lg">
            <div className="JobPostContainer text-black">
              <div className="flex flex-wrap items-center">
                <div className="w-full md:w-1/2 flex flex-col justify-center lg:items-start items-center">
                  <div className="mb-2">
                    <b>Job Code:</b>2402237
                  </div>
                  <div className="mb-2">
                    <h2 className="text-2xl font-bold">NodeJS Developer</h2>
                  </div>
                  <div className="mb-2">
                    <b>Experience:</b> 1 to 2 Years
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center lg:justify-end ">
                  <div className="flex flex-col items-center lg:items-end gap-4">
                    <div className="mb-2 flex gap-2 items-center">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1" />
                      <p className="text-lg">Jaipur</p>
                    </div>
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                      onClick={toggleDescription1}
                    >
                      {showDescription1
                        ? "Hide Description"
                        : "Show Description"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {showDescription1 && (
          
              <div className="DescriptionContainer flex flex-col gap-4 bg-[#eeeeee] p-4 rounded-lg">
                <p>
                  <b>Job Summary:</b>
                  <br />
                  We are looking for a highly skilled Node.js Developer to join
                  our dynamic team. The ideal candidate will have experience in
                  building scalable, high-performance applications and possess a
                  deep understanding of server-side development.
                </p>
                <p>
                  <b>Key Responsibilities:</b>
                  <br />
                  <ol>
                    <li>
                      Develop and maintain server-side applications using
                      Node.js
                    </li>
                    <li>Write reusable, testable, and efficient code</li>
                    <li>
                      Design and implement low-latency, high-availability, and
                      performant applications
                    </li>
                    <li>
                      Collaborate with front-end developers to integrate
                      user-facing elements with server-side logic
                    </li>
                    <li>Implement security and data protection measures</li>
                    <li>
                      Optimize applications for maximum speed and scalability
                    </li>
                    <li>Troubleshoot and debug applications</li>
                    <li>
                      Participate in code reviews and provide constructive
                      feedback
                    </li>
                    <li>
                      Stay up-to-date with emerging technologies and industry
                      trends
                    </li>
                  </ol>
                </p>
                <p>
                  <b>Requirements:</b>
                  <br />
                  <ol>
                    <li>
                      Proven experience as a Node.js Developer or similar role
                    </li>
                    <li>Strong proficiency with JavaScript (ES6+)</li>
                    <li>
                      In-depth knowledge of Node.js and frameworks such as
                      Express, Koa, or Hapi
                    </li>
                    <li>
                      Understanding of asynchronous programming and its quirks
                      and workarounds
                    </li>
                    <li>Experience with RESTful APIs and web services</li>
                    <li>
                      Knowledge of database systems such as MongoDB, MySQL, or
                      PostgreSQL
                    </li>
                    <li>
                      Familiarity with front-end technologies, such as HTML5 and
                      CSS3
                    </li>
                    <li>
                      Understanding of fundamental design principles behind
                      scalable applications
                    </li>
                    <li>
                      Proficient understanding of code versioning tools, such as
                      Git
                    </li>
                    <li>
                      Excellent problem-solving skills and attention to detail
                    </li>
                    <li>Strong communication and teamwork skills</li>
                  </ol>
                </p>
                <p>
                  <b>Preferred Qualifications:</b>
                  <br />
                  <ol>
                    <li>
                      Experience with containerization and orchestration tools
                      like Docker and Kubernetes
                    </li>
                    <li>Familiarity with CI/CD pipelines and tools</li>
                    <li>
                      Knowledge of cloud platforms such as AWS, Azure, or Google
                      Cloud
                    </li>
                    <li>Experience with TypeScript</li>
                  </ol>
                </p>
                <p>
                  <b>Education:</b>
                  <br />
                  Bachelor's degree in Computer Science, Engineering, or a
                  related field (or equivalent work experience).
                </p>
                <p>
                  <b>What We Offer:</b>
                  <br />
                  <ol>
                    <li>Competitive salary and benefits package</li>
                    <li>
                      Opportunity to work on exciting and challenging projects
                    </li>
                    <li>Collaborative and innovative work environment</li>
                    <li>Professional development and growth opportunities</li>
                  </ol>
                </p>
                <p>
                  <b>How to Apply:</b>
                  <br />
                  Interested candidates are encouraged to send their resume to{" "}
                  <a href="mailto:hr@techanicinfotech.com" className="hover:text-blue-600 hover:underline">
                    hr@techanicinfotech.com
                  </a>{" "}
                  with the subject line "Application for Node.js Developer
                  Position."
                </p>
              

              <button className="bg-blue-500 px-4 py-3 text-white rounded-lg w-fit">
                {" "}
                <Link href="#applyform">Apply Now</Link>
              </button>
            </div>
          )}
          <div className="JobContainer bg-[#eeeeee] p-4 rounded-lg">
            <div className="JobPostContainer text-black">
              <div className="flex flex-wrap items-center">
                <div className="w-full md:w-1/2 flex flex-col justify-center lg:items-start items-center">
                  <div className="mb-2">
                    <b>Job Code:</b>2402238
                  </div>
                  <div className="mb-2">
                    <h2 className="text-2xl font-bold">SEO Executive</h2>
                  </div>
                  <div className="mb-2">
                    <b>Experience:</b> 2+ Years
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center lg:justify-end">
                  <div className="flex flex-col items-center lg:items-end gap-4">
                    <div className="mb-2 flex gap-2 items-center">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1" />
                      <p className="text-lg">Jaipur</p>
                    </div>
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                      onClick={toggleDescription2}
                    >
                      {showDescription2
                        ? "Hide Description"
                        : "Show Description"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {showDescription2 && (
         <div className="JobDescriptionContainer flex flex-col gap-4 bg-[#eeeeee] p-4 rounded-lg">
         <p className="flex flex-col gap-2">
           <b>Job Summary:</b>
           We are seeking a skilled and motivated SEO Executive to join our marketing team. The ideal candidate will be responsible for managing all SEO activities such as content strategy, link building, and keyword strategy to increase rankings on all major search networks.
         </p>
         <p className="flex flex-col gap-2">
           <b>Key Responsibilities:</b>
           <ol >
             <li>Conduct keyword research to guide content teams</li>
             <li>Develop and implement effective SEO strategies</li>
             <li>Analyze data to identify trends and insights for better SEO strategies</li>
             <li>Track, report, and analyze website analytics and PPC initiatives and campaigns</li>
             <li>Perform ongoing keyword discovery, expansion, and optimization</li>
             <li>Research and implement search engine optimization recommendations</li>
             <li>Research and analyze competitor advertising links</li>
             <li>Develop and implement link building strategy</li>
             <li>Work with editorial and marketing teams to drive SEO in content creation and content programming</li>
             <li>Recommend changes to website architecture, content, linking, and other factors to improve SEO positions for target keywords</li>
             <li>Stay up-to-date with the latest SEO and digital marketing trends and best practices</li>
           </ol>
         </p>
         <p className="flex flex-col gap-2">
           <b>Requirements:</b>
           <ol>
             <li>Proven experience as an SEO Executive or similar role</li>
             <li>Solid understanding of performance marketing, conversion, and online customer acquisition</li>
             <li>In-depth experience with website analytics tools (e.g., Google Analytics, NetInsight, Omniture, WebTrends)</li>
             <li>Experience with bid management tools (e.g., Click Equations, Marin, Kenshoo, Search Ignite)</li>
             <li>Experience with A/B and multivariate experiments</li>
             <li>Knowledge of ranking factors and search engine algorithms</li>
             <li>Up-to-date with the latest trends and best practices in SEO and SEM</li>
             <li>Strong analytical skills and experience generating SEO reports</li>
             <li>Familiarity with relevant web technologies, such as HTML, CSS, and JavaScript</li>
             <li>Excellent communication skills</li>
             <li>Ability to work within a team and independently</li>
           </ol>
         </p>
         <p className="flex flex-col gap-2">
           <b>Preferred Qualifications:</b>
           <ol>
             <li>Bachelor's degree in Marketing, Business, or a related field</li>
             <li>Certification in Google Analytics or Google AdWords</li>
             <li>Experience with CMS platforms such as WordPress</li>
           </ol>
         </p>
         <p className="flex flex-col gap-2">
           <b>What We Offer:</b>
           <ol>
             <li>Competitive salary and benefits package</li>
             <li>Opportunity to work on exciting and challenging projects</li>
             <li>Collaborative and innovative work environment</li>
             <li>Professional development and growth opportunities</li>
           </ol>
         </p>
         <p className="flex flex-col gap-2"> 
           <b>How to Apply:</b>
           Interested candidates are encouraged to send their resume to <a  className="hover:text-blue-600 hover:underline" href="mailto:hr@techanicinfotech.com">hr@techanicinfotech.com</a> with the subject line "Application for SEO Executive Position."
         </p>
         <button className="bg-blue-500 px-4 py-3 text-white rounded-lg w-fit">
                {" "}
                <Link href="#applyform">Apply Now</Link>
              </button>
       </div>
       
          )}
          <div className="JobContainer bg-[#eeeeee] p-4 rounded-lg">
            <div className="JobPostContainer text-black">
              <div className="flex flex-wrap items-center">
                <div className="w-full md:w-1/2 flex flex-col justify-center lg:items-start items-center">
                  <div className="mb-2">
                    <b>Job Code:</b>2402239
                  </div>
                  <div className="mb-2">
                    <h2 className="text-2xl font-bold">SEO Intern</h2>
                  </div>
                  <div className="mb-2">
                    <b>Experience:</b> Intern
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center lg:justify-end">
                  <div className="flex flex-col items-center lg:items-end gap-4">
                    <div className="mb-2 flex gap-2 items-center">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1" />
                      <p className="text-lg">Jaipur</p>
                    </div>
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                      onClick={toggleDescription3}
                    >
                      {showDescription3
                        ? "Hide Description"
                        : "Show Description"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {showDescription3 && (
         <div className="JobDescriptionContainer flex flex-col gap-4 bg-[#eeeeee] p-4 rounded-lg">
         <p className="flex flex-col gap-2">
           <b>Job Summary:</b>
           We are looking for a passionate and enthusiastic SEO Intern to join our marketing team. This role is designed for individuals who are eager to learn about search engine optimization and digital marketing strategies. As an SEO Intern, you will support the SEO team in implementing optimization strategies for the company’s website and other digital properties.
         </p>
         <p className="flex flex-col gap-2">
           <b>Key Responsibilities:</b>
           <ol>
             <li>Assist in conducting keyword research to guide content teams</li>
             <li>Support in developing and implementing link building strategies</li>
             <li>Monitor and analyze SEO performance using tools like Google Analytics</li>
             <li>Conduct on-page SEO audits and provide recommendations for improvement</li>
             <li>Assist in creating and optimizing content for the website and blog</li>
             <li>Stay up-to-date with the latest SEO trends and best practices</li>
             <li>Help in preparing SEO performance reports</li>
             <li>Collaborate with the marketing team to align SEO strategies with overall marketing goals</li>
             <li>Perform competitive analysis and identify opportunities for growth</li>
           </ol>
         </p>
         <p className="flex flex-col gap-2">
           <b>Requirements:</b>
           <ol>
             <li>Current enrollment in a Bachelor’s degree program in Marketing, Business, Communications, or a related field</li>
             <li>Basic understanding of SEO principles and digital marketing concepts</li>
             <li>Familiarity with SEO tools such as Google Analytics, Google Search Console, and SEMrush is a plus</li>
             <li>Strong analytical skills and attention to detail</li>
             <li>Excellent written and verbal communication skills</li>
             <li>Ability to work independently and as part of a team</li>
             <li>Eagerness to learn and stay updated on SEO and digital marketing trends</li>
             <li>Proficiency in Microsoft Office Suite (Word, Excel, PowerPoint)</li>
           </ol>
         </p>
         <p className="flex flex-col gap-2">
           <b>Preferred Qualifications:</b>
           <ol>
             <li>Previous internship or coursework related to SEO or digital marketing</li>
             <li>Basic knowledge of HTML/CSS</li>
             <li>Experience with content management systems (e.g., WordPress)</li>
           </ol>
         </p>
         <p className="flex flex-col gap-2">
           <b>What We Offer:</b>
           <ol>
             <li>Hands-on experience with SEO and digital marketing strategies</li>
             <li>Mentorship and training from experienced SEO professionals</li>
             <li>Opportunity to work on real projects and make a significant impact</li>
             <li>Collaborative and supportive work environment</li>
             <li>Potential for future employment opportunities</li>
           </ol>
         </p>
         <p className="flex flex-col gap-2"> 
           <b>How to Apply:</b>
           Interested candidates are encouraged to send their resume to <a className="hover:text-blue-600 hover:underline" href="mailto:hr@techanicinfotech.com">hr@techanicinfotech.com</a> with the subject line "Application for SEO Intern Position."
         </p>
         <button className="bg-blue-500 px-4 py-3 text-white rounded-lg w-fit">
           <Link href="#applyform">Apply Now</Link>
         </button>
       </div>
       
          )}
        </div>
      </div>
    </section>
  );
};

export default Openings;
