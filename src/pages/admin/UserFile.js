import React from 'react'
import { blockUser, makeAdmin, makeUser, unBlockUser } from '@/redux/slicess/admin/adminSlice';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import Paper from '@mui/material/Paper';
import { useDispatch } from 'react-redux';

export const UserFile = ({ userList }) => {
    const dispatch = useDispatch()
    const handleBlock = (id, email) => {
        const body = [id, { "email": email }]
        dispatch(blockUser(body))

    }
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>S. No.</TableCell>
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
                                        <TableCell component="th" scope="row">
                                            {i + 1}
                                        </TableCell>
                                        <TableCell align="center">{item._id}</TableCell>
                                        <TableCell align="center">{item.email}</TableCell>
                                        <TableCell align="center">{item.firstName}</TableCell>
                                        <TableCell align="center">{item.isAdmin ? <Button onClick={() => { dispatch(makeUser(item._id)) }}>Make User</Button> : <Button onClick={() => { dispatch(makeAdmin(item._id)) }}>Make Admin</Button>}</TableCell>
                                        <TableCell align="center">{item.isVarified === 1 ? <Button onClick={() => { dispatch(handleBlock(item._id, item.email)) }}>block</Button> : <Button onClick={() => { dispatch(unBlockUser(item._id)) }}>Unblock</Button>}</TableCell>
                                    </TableRow>
                                )
                            })
                                : null
                        }
                    </TableBody>

                </Table>
            </TableContainer>

        </>
    )
}
