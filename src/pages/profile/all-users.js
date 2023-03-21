import React, { useEffect, useState } from 'react'
import { blockUser, getAllUsers, makeAdmin, makeUser, unBlockUser } from '@/redux/slicess/admin/adminSlice';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { BiLockAlt, BiLockOpenAlt } from 'react-icons/bi';
import { FaUser, FaUsers } from 'react-icons/fa';
import { toast } from 'react-toastify';

const AllUsers = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    const { userAction,userList } = useSelector((state) => {
        return {
            userAction: state?.RootReducer?.adminSlice?.userActions,
            userList: state?.RootReducer?.adminSlice?.users?.userList,
        }
    })

    useEffect(() => {
        dispatch(getAllUsers())
      }, [userAction])

    useEffect(() => {
     if(userAction){
        toast.success(userAction.success)
        setLoading(false)
     }
    }, [userAction])
    const handleBlock = (id, email) => {
        const body = [id, { "email": email }]
        dispatch(blockUser(body))
        setLoading(true)
    }
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Id</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Admin / User</TableCell>
                            <TableCell align="center">Varified</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            userList ? userList?.map((item, i) => {
                                return (
                                    <TableRow
                                        key={i}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        {!item.isAdmin ? 
                                        <>
                                        <TableCell align="center">{item._id}</TableCell>
                                        <TableCell align="center">{item.email}</TableCell>
                                        <TableCell align="center">{item.firstName}</TableCell>
                                        <TableCell align="center">{item.isAdmin ?
                                            <Button
                                                onClick={() => { dispatch(makeUser(item._id));setLoading(true) }}
                                                variant="contained"
                                                color="success"
                                                disabled={loading ? true : false}>
                                                Make User<FaUsers />
                                            </Button>
                                            :
                                            <Button
                                                onClick={() => { dispatch(makeAdmin(item._id));setLoading(true) }}
                                                variant="contained"
                                                color="secondary"
                                                disabled={loading ? true : false}>
                                                Make Admin <FaUser />
                                            </Button>
                                        }
                                        </TableCell>
                                        <TableCell align="center">{item.isVarified === 1 ?
                                            <Button
                                                onClick={() => { handleBlock(item._id, item.email) }}
                                                variant="outlined"
                                                color="error"
                                                disabled={loading ? true : false}>
                                                block<BiLockAlt />
                                            </Button>
                                            :
                                            <Button
                                                onClick={() => { dispatch(unBlockUser(item._id));setLoading(true) }}
                                                variant="outlined"
                                                color="success"
                                                disabled={loading ? true : false}>
                                                Unblock<BiLockOpenAlt />
                                            </Button>
                                        }
                                        </TableCell>
                                        </>
                                       :
                                       null }
                                    </TableRow>
                                )
                            })
                                : null //loader
                        }
                    </TableBody>

                </Table>
            </TableContainer>

        </>
    )
}

export default AllUsers
