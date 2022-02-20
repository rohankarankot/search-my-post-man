import {
  styled,
  Container,
  Table,
  TableBody,
  Paper,
  TableRow,
  TableContainer,
  TableHead,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

const DashInfo = ({ responce }) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  return (
    <Container>
      {console.log(responce)}
      {responce.length ? (
        <TableContainer component={Paper} style={{ maxHeight: 350 }}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell> Name</StyledTableCell>
                <StyledTableCell> BranchType</StyledTableCell>
                <StyledTableCell> Circle</StyledTableCell>
                <StyledTableCell> District</StyledTableCell>
                <StyledTableCell> Division</StyledTableCell>
                <StyledTableCell> Region</StyledTableCell>
                <StyledTableCell> Block</StyledTableCell>
                <StyledTableCell> State</StyledTableCell>
                <StyledTableCell> Country</StyledTableCell>{" "}
              </TableRow>{" "}
            </TableHead>{" "}
            <TableBody>
              {responce[0].PostOffice.map((obj) => (
                <tr>
                  <StyledTableCell>{obj.Name}</StyledTableCell>
                  <StyledTableCell>{obj.BranchType}</StyledTableCell>
                  <StyledTableCell>{obj.Circle}</StyledTableCell>
                  <StyledTableCell>{obj.District}</StyledTableCell>
                  <StyledTableCell>{obj.Division}</StyledTableCell>
                  <StyledTableCell>{obj.Region}</StyledTableCell>
                  <StyledTableCell>{obj.Block}</StyledTableCell>
                  <StyledTableCell>{obj.State}</StyledTableCell>
                  <StyledTableCell>{obj.Country}</StyledTableCell>
                </tr>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        ""
      )}
    </Container>
  );
};

export default DashInfo;
