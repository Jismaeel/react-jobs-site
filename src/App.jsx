import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MainLayout from "./Layout/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFound from "./pages/NotFound";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobsPage from "./pages/AddJobsPage";
import EditJobs from "./pages/EditJobs";

const App = () => {
  // Add new job
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return res.json();
  };

  // Delete job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return res.json();
  };

  // Update job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return res.json();
  };

  return (
    <BrowserRouter basename="/react-jobs-site/">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route
            path="/add-job"
            element={<AddJobsPage addJobSubmit={addJob} />}
          />
          <Route path="/jobs" element={<JobsPage />} />
          <Route
            path="/jobs/:id"
            element={<JobPage deleteJob={deleteJob} />}
            loader={jobLoader}
          />
          <Route
            path="/edit-job/:id"
            element={<EditJobs updateJobSubmit={updateJob} />}
            loader={jobLoader}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
