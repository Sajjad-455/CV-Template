import React from 'react'
import {Box,Button,Typography} from '@material-ui/core'
import ProfileImg from '../../assets/images/profile.jpg'
import Timeline from '../Timeline/Timeline'
import {useStyle} from './Style';
function Profile() {
    const classess=useStyle();
    return (
        <Box className={classess.profile} boxShadow={2}>
            <Box p={4} >
                <Typography variant="h5" className={classess.profileName}>Muhammad Sajjad</Typography>
                <Typography variant="subtitle1" className={classess.profileJob}>FrontEnd Developer</Typography>
            </Box>
            <Box component="div" className={classess.profileImage}>
                <img src={ProfileImg} alt="" className={classess.profileImageSrc} />
            </Box>
            <Box>
                <Timeline />

                <Button variant="contained" color="primary">Download Cv</Button>
            </Box>
        </Box>
    )
}

export default Profile
