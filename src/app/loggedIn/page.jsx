'use client'

import React, { useEffect, useState } from 'react';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Styles from './loggedIn.module.css'
import config from "../../config.js"
import Navbar from '../components/navbar/navbar';
import Greeting from '../components/greeting';
import { FaMagic, FaUpload, FaBolt, FaCommentAlt, FaStar, FaAward, FaLifeRing, FaCog } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FiTarget } from "react-icons/fi";
import Subscription from '../Subscription/page';
import UploadResume from '../components/uploadResume/page';
import ProtectedRoute from '../components/protected routes';
import NotAvailable from '../components/notAvailable/page';

// import loggedIn, {user} from '../components/loggedin/page';
function LoggedIn() {
  const auth = getAuth();
  const router = useRouter();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      else {
        router.push("/")
      }
    })
    return () => unsubscribe();
  }, [auth, router]);

  // function hidden() {
  //   const [showHidden, setShowHidden] = useState(false)
  // }

  return (

    <ProtectedRoute>
      <Navbar func="Logout" />
      <div className={Styles.body}>

        <div className={Styles.left}>
          <div className={Styles.greeting}>
            <h1 className={Styles.gretingPhrase} >{Greeting()} ,  {user ? user.displayName : "Guest"}.</h1>
            <h2 className={Styles.gretingPhrase2}> Welcome back to your career toolkit.</h2>
          </div>

          <div className={Styles.mainContainer}>
            <div className={Styles.quickLink}>
              <h1>Quick Links</h1></div>
            <div className={Styles.container}>
             <Link href="/components/uploadResume" className={Styles.containerLinks}>

                <div className={Styles.paraLink}>Score My Resume</div>
                <Image
                  src="/image/smr-icon-dashboard.png"

                  alt="Score my resume"
                  width={150}
                  height={150}
                />
                <div className={Styles.subtitle}>
                  Get expert feedback on your resume, instantly
                </div>
              </Link>
              <Link href="/components/notAvailable" className={Styles.containerLinks}>
                <div className={Styles.paraLink}>Targeted Resume</div>
                <Image
                  src="/image/targeted-resume.png"

                  alt="Score my resume"
                  width={150}
                  height={150}
                />
                <div className={Styles.subtitle}>
                  Tailor your resume to a job description
                </div>
              </Link>
              <Link href="/components/notAvailable" className={Styles.containerLinks}>
                <div className={Styles.paraLink}>LinkedIn Review</div>
                <Image
                  src="/image/linkedin-review.png"

                  alt="Score my resume"
                  width={150}
                  height={150}
                />
                <div className={Styles.subtitle}>
                  Optimize your LinkedIn profile in seconds
                </div>
              </Link>
            </div>
          </div>


          <div className={Styles.dashboardContainer}>
            <div className={Styles.dashboard}>
              <h1>Dashboard</h1>
            </div>
            <div className={Styles.linkContainer}>
              <div className={Styles.containerRow1}>
                <Link href="/components/uploadResume"> <div className={`${Styles.links} ${Styles.active}`} >
                  <FaMagic className="text-lg icon" style={{ color: 'white' }} />
                  <p >PROGRESS</p>
                </div></Link>
                <Link href="/components/uploadResume"> <div className={Styles.links}>
                  <FaBolt className="text-lg icon" style={{ color: 'white' }} />
                  <p>RESUMES</p></div></Link>
                <Link href="/components/notAvailable"> <div className={Styles.links}>
                  <FaLinkedin className="text-lg icon" style={{ color: 'white' }} />
                  <p>LINKED IN</p></div></Link>
                <Link href="/components/feedback"> <div className={Styles.links}>
                  <FaCommentAlt className="text-lg icon" style={{ color: 'white' }} />
                  <p>FEEDBACK</p></div></Link>
              </div>
              <div className={Styles.containerRow2}>
                <Link href="/Subscription"> <div className={Styles.links}>
                  <FaStar className="text-lg icon" style={{ color: '#0bf9a0' }} />
                  <p style={{ color: "#0bf9a0" }}>
                    GET PRO</p></div></Link>
                <Link href="/components/notAvailable"> <div className={Styles.links}>
                  <FaAward className="text-lg icon" style={{ color: 'white' }} />
                  <p>CAREER TOOLS</p></div></Link>
                <Link href="/components/helpCenter"> <div className={Styles.links}>
                  <FaLifeRing className="text-lg icon" style={{ color: 'white' }} />
                  <p>HELP CENTER</p></div></Link>
                <Link href="/score"> <div className={Styles.links}>
                  <FaCog className="text-lg icon" style={{ color: 'white' }} />
                  <p>MY ACCOUNT</p></div></Link>
              </div>
            </div>
          </div>

        </div>
        <div className={Styles.right}>
          <div className={Styles.card}>
            <div className={Styles.getProContainer}>
              <div className={Styles.proHeading}>
                <h3 style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#ed9702"
                }}
                >Offer: Get <u>75% off</u> Resume Worded Pro</h3>
              </div>
              <div className={Styles.proDisc} ><p>Unlock AI-powered resume writing, unlimited reviews, ATS optimization, industry-specific templates, and expert tools. Proven to get you more interviews</p></div>
              <div className={Styles.getProButton}>
              <Link href="/Subscription">  <button  >UPGRADE TO PRO</button></Link>
              </div>
              <p className={Styles.proPara}>* Limited Time Bonus: You'll also get access to our LinkedIn optimization suite (worth $49) for free.</p>


            </div>

            <div className={Styles.progressContainer}>
              <div className={Styles.progressHeading}><h1>Track your progress</h1></div>
              <div className={Styles.progressPara}>
                <h2>Our tools will guide you through the process of creating your <strong>most effective</strong> resume and LinkedIn profile.
                  resume and LinkedIn profile.
                  To make the most out of them, follow the steps below.



                </h2></div>
              <div className={Styles.box} >
                <div className={Styles.boxContent}>
                  <h1 className={Styles.boxheading}>Overall Resume Score</h1>
                  <h2 className={Styles.boxDesc}><strong>You have not uploaded your resume yet.</strong>
                    Get your free resume score.
                  </h2>
                  <Link href="../components/uploadResume"><div className={Styles.boxButton} style={{backgroundColor:"#4f0ed1", color:"white"}}><FaUpload className={Styles.boxIcons} ></FaUpload><p className={Styles.boxButtonPara}>Upload Resume</p></div></Link>
                </div>
                <div className={Styles.boxRight}>
                  <div className={Styles.scoreContainer}>
                    ?
                    <span className={Styles.outOf}>/100</span>
                  </div>
                </div>

              </div>
              
              {/* <div className={Styles.hiddenBox} style={{}} >
                <div className={Styles.hiddenContentBox}>
                  <p className={Styles.hiddenBoxPara}>
                    Upload your resume to our AI-powered Score My Resume and get
                    expert feedback, instantly. We'll score your resume on key
                    criteria recruiters and hiring managers
                    look for, such as impact, word choice and style.
                  </p>
                  <div className={Styles.progressBox}>
                    <strong>You have not uploaded your resume for a free resume review yet.</strong>
                    Upload your resume to get started. If you need a
                    resume template or sample bullet points, see the section above.
                  </div>
                  <Link href="/"><div className={Styles.boxButton1}><FaUpload className="text-lg icon" ></FaUpload><p className={Styles.boxButtonPara}>Upload Resume</p></div></Link>

                </div>
              </div> */}

              <div className={Styles.box} >
                <div className={Styles.boxContent}>
                  <h1 className={Styles.boxheading}>Targeted Resume score</h1>
                  <h2 className={Styles.boxDesc}><strong>You have not tried this tool yet</strong>
                   . Your resume may be missing important keywords. Match it to a job posting to fix.						
                  </h2>
                  <Link href="/components/notAvailable"><div className={Styles.boxButton}><FiTarget className={Styles.boxIcons} ></FiTarget><p className={Styles.boxButtonPara}>Target your resume</p></div></Link>
                </div>
                <div className={Styles.boxRight}>
                  <div className={Styles.scoreContainer}>
                    ?
                    <span className={Styles.outOf}>/100</span>
                  </div>
                </div>

              </div>
              <div className={Styles.box} >
                <div className={Styles.boxContent}>
                  <h1 className={Styles.boxheading}>LinkedIn profile score</h1>
                  <h2 className={Styles.boxDesc}><strong>You have not optimized your LinkedIn profile yet.</strong>
                    You might be missing out on opportunities from recruiters.						
                  </h2>
                  <Link href="/components/notAvailable"><div className={Styles.boxButton}><FaLinkedin className={Styles.boxIcons}></FaLinkedin><p className={Styles.boxButtonPara}>  Upload LinkedIn profile</p></div></Link>
                </div>
                <div className={Styles.boxRight}>
                  <div className={Styles.scoreContainer}>
                    ?
                    <span className={Styles.outOf}>/100</span>
                  </div>
                </div>

              </div>

              <div className={Styles.additionalContainer}>
                <h1 className={Styles.additionalContainerHeading}>
                  Additional resources
                </h1>
              </div>
               <div className={Styles.box} >
                <div className={Styles.boxContent}>
               <Link href="/components/notAvailable"> <h1 className={Styles.boxheading}>COVER LETTER GENERATOR</h1></Link> 
                  <h2 className={Styles.boxDesc}>Let our AI write a great cover letter for you, in seconds. 
                  </h2>
                </div>
                <div className={Styles.boxRight} style={{width: "45%", display:"flex", alignItems:"flex-start", justifyContent:"flex-start" }}>
                  <Link href="/"><div className={Styles.boxButton} style={{width:"100%"}}><FaUpload className={Styles.boxIcons} ></FaUpload><p className={Styles.boxButtonPara}>COVER LETTER GENERATOR</p></div></Link>
                 
                </div>

              </div>
               <div className={Styles.box} >
                <div className={Styles.boxContent}>
                  <h1 className={Styles.boxheading}>Don't have a resume?</h1>
                  <h2 className={Styles.boxDesc}>If you'd like to create a new resume with our sample templates and bullet points, click this.
                  </h2>
                </div>
            

              </div>
            </div>


          </div>


        </div>
      </div>

</ProtectedRoute>

    
    
  )
}

export default LoggedIn;
