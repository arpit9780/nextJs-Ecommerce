import { getAdminProfile, getAllUsers } from '@/redux/slicess/admin/adminSlice';
import { Avatar, Badge, Grid, ListItemButton, ListItemIcon } from '@mui/material'
import { Box } from '@mui/system';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react'
import { AiOutlineCamera } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';
import { CiCircleRemove } from 'react-icons/ci';
import { MdOutlinePassword } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { UserFile } from './UserFile';
import { RingLoader } from 'react-spinners';
import { Dailogs } from '@/component/dailogFile/Dailogs';


const index = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isField, setIsField] = useState(false)
  const [isRemove, setIsRemove] = useState(false)
  
  const dispatch = useDispatch()

  const { role, profile, userList, userAction, adminAction } = useSelector((state) => {
    return {
      role: state?.RootReducer?.authSlice?.role,
      profile: state?.RootReducer?.adminSlice?.admin?.Admin?.[0],
      userList: state?.RootReducer?.adminSlice?.users?.userList,
      userAction: state?.RootReducer?.adminSlice?.userActions,
      adminAction: state?.RootReducer?.adminSlice?.adminActions,
    }
  })
  useEffect(() => {
    if (role === "Welcome admin..!!") {
      dispatch(getAdminProfile())
    }
  }, [adminAction])

  useEffect(() => {
    if (role === "Welcome admin..!!") {
      dispatch(getAllUsers())
    }
  }, [userAction])

  

  const handleUpdateOpen = () => {
    setIsRemove(false)
    setIsField(true)
    setIsOpen(true);
  };

  const handlePasswordOpen = () => {
    setIsRemove(false)
    setIsField(false)
    setIsOpen(true)
  }

  const removeAdmin = () => {
    setIsRemove(true)
    setIsOpen(true);
  }
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className='container'>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <Grid item>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={
                  <AiOutlineCamera style={{ fontSize: "35px", backgroundColor: "azure", borderRadius: "100%" }} />
                }
              >
                <Avatar alt="complex" sx={{ width: 156, height: 156 }}
                  src="https://images.pexels.com/photos/1692984/pexels-photo-1692984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </Badge>
            </Grid>
          </Grid>
          <Grid item xs={6} md={4}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                {profile ?
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1" component="div">
                      {profile?.firstName}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {profile?.email}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {profile?._id}
                    </Typography>
                  </Grid>
                  :
                  <Grid item xs>
                    <RingLoader color="#6C757D" style={{ position: 'absolute', top: "40%", left: "35%" }} />
                  </Grid>
                }
                <Grid item>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  $19.00
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} md={4}>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              <nav aria-label="main mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton onClick={handleUpdateOpen}>
                      <ListItemIcon>
                        <GrUpdate style={{ fontSize: "20px" }} />
                      </ListItemIcon>
                      <ListItemText primary="Update" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton onClick={removeAdmin}>
                      <ListItemIcon>
                        <CiCircleRemove style={{ fontSize: "25px", color: "#ff0000" }} />
                      </ListItemIcon>
                      <ListItemText primary="Remove" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton onClick={handlePasswordOpen}>
                      <ListItemIcon>
                        <MdOutlinePassword style={{ fontSize: "25px", color: "black" }} />
                      </ListItemIcon>
                      <ListItemText primary="Change Password" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Box>
          </Grid>
          <Grid item xs={6} md={12}>
            <UserFile userList={userList} />
          </Grid>
        </Grid>
      </div>
      {isOpen ? <Dailogs open={isOpen} handleClose={handleClose} isField={isField} isRemove={isRemove}/> : null }
    </>
  )
}

export default index