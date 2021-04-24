import React from "react";
import {Box, Grid, Typography, Button} from "@material-ui/core"
import { ThemeProvider } from "@material-ui/styles";


import theme from "./theme/theme"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar";
import JobCard from "./components/Job/JobCard";

export default () => {
  return <ThemeProvider theme={theme}>
    <Header />
    <Grid container justify="center">
      <Grid item xs={10}>
        <SearchBar/> 
        <JobCard />
      </Grid>
    </Grid>
  </ThemeProvider>
};
