import React from 'react'
import {IconButton,Typography,makeStyles, Box, Grid, FilledInput, Button, Select, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions} from '@material-ui/core'
import {Close} from '@material-ui/icons'
const useStyles = makeStyles((theme) =>({
    skillChip:{
        margin:theme.spacing(0.5),
        padding:theme.spacing(0.75),
        fontSize: "14.5px",
        borderRadius: "5px",
        transition: ".3s",
        cursor: "pointer",
        fontWeight: 600,
        border: `1px solid ${theme.palette.secondary.main}`,
        color:theme.palette.secondary.main,
        cursor: "pointer",

        "&:hover":{
            background: theme.palette.secondary.main,
            color:"#fff"
        }
    }
}));

export default (props) => {
    const classes = useStyles();
    const skills = [
        "Javascript",
        "React",
        "Node",
        "Vue",
        "Firebase",
        "MongoDB",
        "SQL"
    ]
    return(
        <Dialog open={true} fullWidth>
            <DialogTitle>
                <Box display="flex" width="100%" justifyContent="space-between" alignItems="center">
                    Post a Job
                    <IconButton><Close /></IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FilledInput fullWidth placeholder="Job Title *" disableUnderline />
                    </Grid>
                    <Grid item xs={6}>
                        <Select fullWidth disableUnderline variant="filled" defaultValue="Full Time">
                            <MenuItem value="Full Time">Full Time</MenuItem>
                            <MenuItem value="Part Time">Part Time</MenuItem>
                            <MenuItem value="Contract">Contract</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput fullWidth placeholder="Company Name *" disableUnderline />
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput fullWidth placeholder="Company URL *" disableUnderline />
                    </Grid>
                    <Grid item xs={6}>
                        <Select fullWidth disableUnderline variant="filled" defaultValue="Remote">
                            <MenuItem value="Remote">Remote</MenuItem>
                            <MenuItem value="In-office">In-office</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput fullWidth placeholder="Job Link *" disableUnderline />
                    </Grid>
                    <Grid item xs={12}>
                        <FilledInput multiline rows={4} fullWidth placeholder="Job Description *" disableUnderline />
                    </Grid>
                </Grid>
                <Box mt={2}>
                    <Typography>Skills</Typography>
                    <Box display="flex">
                        {skills.map((skill) => (<Box className={classes.skillChip} key={skill}>{skill}</Box>))}
                    </Box>
                </Box>
                <DialogActions>
                    <Box color="red" width="100%" display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="caption">* Required fields</Typography>
                        <Button variant="contained" color="primary" disableElevation>Post job</Button>
                    </Box>                 
                </DialogActions>

            </DialogContent>
        </Dialog>
    )
}