import React, { useState } from "react";
import "./App.css";
import profileImg from "./assets/profile.JPG"; 
import lsuLogo from "./assets/LSU.jpeg";


function App() {
  const [showPreview, setShowPreview] = useState(false);
  return (
    <div className="container">
      {/* Left Sidebar */}
      <aside className="sidebar">
        <img src={profileImg} alt="Aiden Thornton" className="profile-img" />
        <h1>Aiden Thornton</h1>

        {/* Contact Card */}
        <div className="contact-card">
          <p><strong>Email:</strong> aidenthornton@example.com</p>
          <p><strong>LinkedIn:</strong> 
            <a href="https://linkedin.com/in/aidenthornton" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/aidenthornton
            </a>
          </p>
          <p><strong>GitHub:</strong> 
            <a href="https://github.com/aidenthornton" target="_blank" rel="noopener noreferrer">
              github.com/aidenthornton
            </a>
          </p>
        </div>
        <h2 className="sidebar-section-title">Resume</h2>
        <div className="resume-row">
        <span className="resume-text">View and Download my resume</span>
        <button 
          className="resume-preview-button" 
          onClick={() => setShowPreview(true)}
        >
          👁️
        </button>
        <a 
          href="/ThorntonResume.pdf" 
          download 
          className="resume-icon-button"
        >
          ⬇️
        </a>
      </div>

        {showPreview && (
          <div className="pdf-modal-overlay" onClick={() => setShowPreview(false)}>
            <div className="pdf-modal" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={() => setShowPreview(false)}>✖</button>

              {/* Display the PNG instead of PDF viewer */}
              <img 
                src="/ThorntonResume (1)-1.png" 
                alt="Resume Preview" 
                className="resume-image"
              />
            </div>
          </div>
        )}
      </aside>

      {/* Right Scrollable Content */}
      <main className="main-content">
        <section id="about">
          <h2>About Me</h2>
          <div className="about-card">
            <p>
            I am a senior at Louisiana State University, pursuing a degree in Computer Science with a concentration 
            in Cybersecurity, and I am on track to graduate in December 2025. I have a strong passion for networking, 
            building and securing networks, and I maintain a home network lab to experiment and sharpen my skills. 
            Professionally, I have experience working in industrial environments, where I contributed to developing
            and assessing the cybersecurity of corporate networks. Outside of technology, I enjoy spending time outdoors,
            going camping, and exploring off-road adventures in my Jeep.

            </p>
          </div>
        </section>

        <section id="education">
          <h2>Education</h2>
          <div className="education-grid">
            <div className="education-card">
              <img src={lsuLogo} alt="LSU Logo" className="education-logo" />


              <div>
                <h3>Louisiana State University (LSU)</h3>
                <p className="degree">B.S. in Computer Science – Concentration in Cybersecurity</p>
                <p className="date">Expected Graduation: December 2025</p>
                <ul>
                  <li>GPA 3.5</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience">
          <h2>Work Experience</h2>
          <div className="experience-grid">
            {/* Job 1 */}
           <div className="experience-card">
            <h3>IT Intern - Methanex - (5/25 - 8/25) </h3>
           <ul>
              <li>Gained practical experience in OT/IT segmentation and cybersecurity principles through the analysis of plant network infrastructure.</li>
              <li>Documented technical processes and user instructions for reference.</li>
             <li>Assisted in setting up and configuring a CCTV server to support physical security monitoring, including storage allocation and system access permissions.</li>
             <li> Conducted a firewall gap analysis between the Distributed control system perimeter firewalls and the DMZ perimeter firewalls, identifying misconfigured rules, open RDP ports, and overly broad IP ranges, and made remediation recommendations.</li>
             <li> Shadowed IT and OT professionals to better understand system interdependencies and network security in critical infrastructure environments.</li>
           </ul>
          </div>

          {/* Job 2 */}
           <div className="experience-card">
             <h3>IT analyst - DeepSouth - (8/25 - 11/25)</h3>
              <ul>
                <li>Served as the Lead IT Analyst, managing all daily IT operations across the company.</li>
                <li>Handled end-to-end ticket resolution, including troubleshooting hardware, software, networking, and user account issues.</li>
                <li>Managed full computer lifecycle deployment — imaging, configuring, asset tagging, and delivering systems to employees.</li>
                <li>Maintained accurate IT inventory for laptops, peripherals, networking gear, and licensing.</li>
                <li>Maintained accurate IT inventory for laptops, peripherals, networking gear, and licensing.</li>
                <li>Oversaw procurement and ordering of all IT equipment, ensuring cost-effective purchasing and minimized downtime.</li>
                <li>Led the full migration of the Viewpoint (ERP) server to a cloud-hosted environment, including planning, data transfer, testing, and company-wide rollout.</li>
                <li>Acted as the primary point of contact for all IT-related issues, supporting employees across field, office, and crane operations.</li>
             </ul>
          </div>

          <div className="experience-card">
            <h3>Control Systems Engineer - John H Carter - (11/25 - Present) </h3>
           <ul>
              <li>Design, build, and implement DCS (Distributed Control Systems) and SIS (Safety Instrumented Systems) for industrial plants, with a primary focus on DeltaV architectures.</li>
              <li>Engineer and deploy plant wireless networks, including RF surveys, device configuration, antenna placement, and secure network design for industrial environments.</li>
             <li>Configure and harden industrial firewalls to ensure secure segmentation between control systems, corporate networks, and remote access.</li>
             <li> Perform on-site system installation, commissioning, and startup support, ensuring all control logic, field instrumentation, and network components function reliably.</li>
             <li> Conduct maintenance, troubleshooting, and repair of DCS/SIS systems to minimize plant downtime and ensure process safety.</li>
             <li>Collaborate closely with process engineers, operators, and plant management to translate operational needs into functional control strategies.</li>
             <li>Create and maintain system documentation including architecture diagrams, control narratives, wiring schematics, network topology, and safety integrity documentation.</li>
           </ul>
          </div>
        </div>
      </section>

        {/* Projects */}
        <section id="projects">
          <h2>Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Tiger Tasks</h3>
              <p>As Project Manager for Tiger Tasks, I led a development team in building a full-stack web platform designed to help LSU students request and offer academic or campus-related assistance through a structured forum system. The application was developed using C#, the .NET Framework, HTML, CSS, and a MySQL database hosted in Azure, integrating secure user account creation and authentication.</p>
            </div>
            <div className="project-card">
              <h3>Refuge</h3>
              <p>Refuge is a full-stack mobile application designed to help communities prepare for hurricanes through education, planning, and real-time utility. Built with a React Native and JavaScript frontend, paired with a TypeScript backend and a MongoDB database, the app delivers an interactive and informative experience. Refuge features a complete preparedness course system, where users learn essential hurricane safety concepts and complete quizzes to earn achievement badges displayed on their profile. The app also includes an AI-powered chat assistant for instant guidance, a shelter map that helps users locate nearby emergency shelters, and a notification center for important alerts and updates. I developed the application’s architecture, user interface, course logic, badge system, and API integration to provide a modern, accessible tool that strengthens hurricane readiness.</p>
            </div>
            <div className="project-card">
              <h3> Home Network Lab </h3>
              <p>I designed and built a fully functional home network lab to strengthen my skills in networking, cybersecurity, and systems administration. The lab includes a segmented network layout with VLANs, managed switching, and a dedicated firewall/router to mirror real enterprise environments. I deployed virtualized servers for services such as Active Directory, DNS, DHCP, and file sharing, along with monitoring and logging tools to track network performance and security events. The environment also incorporates wireless access points, IoT isolation, and test environments for experimenting with configurations, security hardening, and failure scenarios. This lab provides a safe, controlled sandbox where I continually practice network design, troubleshooting, policy implementation, and system administration best practices.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
