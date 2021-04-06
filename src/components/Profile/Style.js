import {makeStyles} from '@material-ui/core/styles';

export const useStyle=makeStyles(theme => ({
    profile: {
        width: "100%",
        backgroundColor: theme.palette.common.white,
        borderRadius: "6px",
        display: "inline-block"
    },
    profileName: {
        fontSize: "17px",
        textTransform: "uppercase",
        fontWeight: "bold",
    },
    profileJob: {
        fontSize: " 13px",
        color: theme.palette.grey[600],
    },
    profileImage: {
        marginTop: "-10px",
        clipPath: " polygon(0 9%,100%0,100%94%,0%100%)"
    },
    profileImageSrc: {
        width: "100%"
    }
}));
