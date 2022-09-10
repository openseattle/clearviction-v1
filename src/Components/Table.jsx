import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@material-ui/core";

const DataTable = props => {
    return (
        <TableContainer component={Paper}>
            <Typography>{props.tableHeader}</Typography>
            <Table sx={{ minWidth: 650, }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Question</TableCell>
                        <TableCell align="right">Your Answer</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((row, idx) => (
                        <TableRow key={idx} sx={{ "&:last-child td, &:last-child th": { border: 0, }, }}>
                            <TableCell component="th" scope="row">
                                {row[0].question}
                            </TableCell>
                            <TableCell align="right">{row[0].answer}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DataTable;
