import React from 'react'
import JobFunnelSection from './JobFunnelSection'
import TopJobsSection from './TopJobsSection'

function Feature() {
  return (
  < >
   
<JobFunnelSection 
  title="Write and improve your resume"
  paragraph1="Struggling to write your resume? Don't worry. We have over 250+ sample bullet points from from top resumes across dall industries and skills. Use our templates and sample lines to quickly write an effective resume from scratch."
  paragraph2="With Score My Resume, you can improve one upload at a time. Unlike any other too!, you get specific feedback on your resume's content, including on each bullet point."
  buttonText="Upload resumes >>"
   imageUrl="/image/Screenshot1.png"  
/>
<TopJobsSection 
  title="Proven to land top jobs"
  paragraph1="Resume Worded has helped hundreds of people land jobs at top companies like PwC, Google, Amazon and Credit Suisse."
  paragraph2="Our AI-powered technologies have been designed by real hiring managers and provides actionable feedback on your LinkedIn profile and resume."
  imageUrl="/image/Screenshot2.png"
/>

  <JobFunnelSection 
  title="Optimize your job search funnel"
  paragraph1="Let's say you apply to or get contacted by a recruiter for 50 job openings. Out of those, your resume might get you 5 interviews, and out of those, you may end up getting one job offer."
  paragraph2="Resume Worded optimizes this job search funnel. With LinkedIn Review, you'll get contacted by more recruiters for more jobs on LinkedIn, thus widening the top part of the funnel. With our resume tools, you'll then be able to ensure you are maximizing the conversion of those jobs to interviews."
  buttonText="Optimize your LinkedIn profile  >>"
 imageUrl="/image/Screenshot3.png"
/>


    
</>
  )
}

export default Feature