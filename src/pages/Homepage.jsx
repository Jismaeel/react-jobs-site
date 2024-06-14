import Hero from "../components/Hero"
import HomeCards from "../components/HomeCards";
import JobListings from "../components/Jobslistings";
import ViewALlJobs from "../components/ViewAllJobs";


const Homepage = () => {
  return (
    <>
    <Hero />
    <HomeCards />
    <JobListings isHome={true} />
    <ViewALlJobs />
    </>
  )
}

export default Homepage
