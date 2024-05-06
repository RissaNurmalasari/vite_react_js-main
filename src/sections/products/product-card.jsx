import { useState } from 'react';
import PropTypes from 'prop-types';

import {
    Card,
    Table,
    Popover,
    TableRow,
    MenuItem,
    TableBody,
    TableCell,
    TableHead,
    CardHeader,
    IconButton,
    TableContainer,
} from '@mui/material';

import Iconify from 'src/components/iconify';

export default function ProductsCard({ title, list }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [currentTask, setCurrentTask] = useState(null);

    const handleClickMenu = (event, task) => {
        setAnchorEl(event.currentTarget);
        setCurrentTask(task);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
        setCurrentTask(null);
    };

    const handleEdit = () => {
        // Tambahkan fungsi untuk mengedit data di sini
        console.log(`Edit task: ${currentTask.id}`);
        handleCloseMenu();
    };

    const handleDelete = () => {
        // Tambahkan fungsi untuk menghapus data di sini
        console.log(`Delete task: ${currentTask.id}`);
        handleCloseMenu();
    };

    return (
        <Card>
            <CardHeader title={title} />

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>No</TableCell>
                            <TableCell>Division Target</TableCell>
                            <TableCell>Division Department Name</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list.map((task, index) => (
                            <TableRow key={task.id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{task.divisionTarget}</TableCell>
                                <TableCell>{task.divisionDepartmentName}</TableCell>
                                <TableCell>
                                    <IconButton onClick={(event) => handleClickMenu(event, task)}>
                                        <Iconify icon="eva:more-vertical-fill" />
                                    </IconButton>

                                    <Popover
                                        open={Boolean(anchorEl)}
                                        anchorEl={anchorEl}
                                        onClose={handleCloseMenu}
                                        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                    >
                                        <MenuItem onClick={handleEdit}>
                                            <Iconify icon="solar:pen-bold" sx={{ mr: 2 }} />
                                            Edit
                                        </MenuItem>
                                        <MenuItem onClick={handleDelete} sx={{ color: 'error.main' }}>
                                            <Iconify icon="solar:trash-bin-trash-bold" sx={{ mr: 2 }} />
                                            Delete
                                        </MenuItem>
                                    </Popover>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    );
}

ProductsCard.propTypes = {
    list: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
};
