import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

import theme from "./theme/theme";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/Job/JobCard";
import NewJobModal from "./components/Job/NewJobModal";
import { firestore, app } from "./firebase/config";
import { Close } from "@material-ui/icons/";

export default () => {
  const [jobs, setJobs] = useState([]);
  const [loader, setLoader] = useState(true);
  const [customSearch, setCustomSearch] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const fetchJobs = async () => {
    setLoader(true);
    setCustomSearch(false);
    const req = await firestore
      .collection("jobs")
      .orderBy("postedOn", "desc")
      .get();
    const tempJobs = req.docs.map((job) => ({
      ...job.data(),
      id: job.id,
      postedOn: job.data().postedOn.toDate(),
    }));
    setJobs(tempJobs);
    setLoader(false);
  };

  const fetchJobsCustom = async (jobSearch) => {
    setLoader(true);
    setCustomSearch(true);
    const req = await firestore
      .collection("jobs")
      .orderBy("postedOn", "desc")
      .where("type", "==", jobSearch.type)
      .where("location", "==", jobSearch.location)
      .get();
    const tempJobs = req.docs.map((job) => ({
      ...job.data(),
      id: job.id,
      postedOn: job.data().postedOn.toDate(),
    }));
    setJobs(tempJobs);
    setLoader(false);
  };

  const postJob = async (jobDetails) => {
    await firestore.collection("jobs").add({
      ...jobDetails,
      postedOn: app.firestore.FieldValue.serverTimestamp(),
    });
    fetchJobs();
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header newmodalOpen={() => setModalOpen(true)} />
      <NewJobModal
        closeModal={() => setModalOpen(false)}
        modalOpen={modalOpen}
        postJob={postJob}
      />
      <Box mb={3}>
        <Grid container justify="center">
          <Grid item xs={10}>
            <SearchBar fetchJobsCustom={fetchJobsCustom} />

            {loader ? (
              <Box display="flex" justifyContent="center">
                <CircularProgress />
              </Box>
            ) : (
              <>
                {customSearch && (
                  <Box display="flex" justifyContent="flex-end" my={2}>
                    <Button onClick={fetchJobs}>
                      <Close size={20} />
                      Custom Search
                    </Button>
                  </Box>
                )}
                {jobs.map((job) => (
                  <JobCard key={job.id} {...job} />
                ))}
              </>
            )}
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};
