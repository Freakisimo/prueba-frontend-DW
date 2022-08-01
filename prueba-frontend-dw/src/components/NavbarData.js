import React from "react";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import MessageIcon from '@mui/icons-material/Message';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';


const NavbarData = [
    {
        icon: <AddLocationIcon />,
        fieldName: "Add Location"
    },
    {
        icon: <LocationCityIcon />,
        fieldName: "Important Places"
    },
    {
        icon: <AssistantDirectionIcon />,
        fieldName: "Location Assitant"
    },
    {
        icon: <MessageIcon />,
        fieldName: "Add Message"
    },
    {
        icon: <ContactSupportIcon /> ,
        fieldName: "Support"
    }
]

export default NavbarData;