import React from "react";
import {Box, Grid, Typography, Button} from "@material-ui/core"
import { ThemeProvider } from "@material-ui/styles";


import theme from "./theme/theme"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar";
import JobCard from "./components/Job/JobCard";
import NewJobTitle from './components/Job/NewJobModal'

export default () => {
  return <ThemeProvider theme={theme}>
    <Header />
    <NewJobTitle/>
    <Grid container justify="center">
      <Grid item xs={10}>
        <SearchBar/> 
        <JobCard />
        <JobCard />
        <JobCard />
      </Grid>
    </Grid>
  </ThemeProvider>
};
