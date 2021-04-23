import React from 'react'
import {Box, Select, Button, MenuItem, makeStyles} from "@material-ui/core"

const useStyle = makeStyles({
    wrapper: {
        backgroundColor: "#fff",
        display:"flex",
        boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
        borderRadius: "5px",
        "& > *":{
            flex:1,
            height:"45px",
            margin:"8px",
        }
    }
})

export default props => {
    const classes = useStyle();
    return(
        <Box p={2} mt={-5} mb={2} className={classes.wrapper}>
            <Select disableUnderline variant="filled" defaultValue="Full Time">
                <MenuItem value="Full Time">Full Time</MenuItem>
                <MenuItem value="Part Time">Part Time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
            </Select>
            <Select disableUnderline variant="filled" defaultValue="Remote">
                <MenuItem value="Remote">Remote</MenuItem>
                <MenuItem value="In-office">In-office</MenuItem>
            </Select>
            <Button variant="contained" color="primary" disableElevation>Search</Button>
        </Box>
    )
}