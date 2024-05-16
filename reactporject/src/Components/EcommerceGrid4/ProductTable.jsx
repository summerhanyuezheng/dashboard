import React, { useState } from "react";
import { Avatar } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Chip,
  Box,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PaymentIcon from "@mui/icons-material/Payment";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import ComputerIcon from "@mui/icons-material/Computer";
import MouseIcon from "@mui/icons-material/Mouse";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { Typography } from "@mui/material";
import { Menu, MenuItem, ListItemText } from "@mui/material";













function createData(
  product,
  brand,
  categoryIcon,
  categoryLabel,
  payment,
  paymentStatus,
  status,
  imageUrl
) {
  return {
    product,
    brand,
    category: { icon: categoryIcon, label: categoryLabel },
    payment,
    paymentStatus,
    status,
    imageUrl,
  };
}

const rows = [
  createData(
    "OnePlus 7Pro",
    "OnePlus",
    // {/* each circle warp an icon */},
    // {/* Avatar is the circle, custimize the color here */},
    <Avatar
      sx={{
        bgcolor: "#696cff29",
        width: 30,
        height: 30,
      }}
    >
      <SmartphoneIcon
        sx={{
          color: "#696cff",
          width: 16,
          height: 16,
        }}
      />
    </Avatar>,

    "Smart Phone",
    "$120/$499",
    "Partially Paid",
    "CONFIRMED",
    "https://greakproject.vercel.app/images/cards/oneplus-7pro-light.png"
  ),
  createData(
    "Magic Mouse",
    "Apple",
    <Avatar
      sx={{
        bgcolor: "#FFAB0029",
        width: 30,
        height: 30,
      }}
    >
      <MouseIcon
        sx={{
          color: "#FFAB00",
          width: 16,
          height: 16,
        }}
      />
    </Avatar>,

    "Mouse",
    "$149",
    "Fully Paid",
    "COMPLETED",
    "https://greakproject.vercel.app/images/cards/apple-magic-mouse-light.png"
  ),
  createData(
    "iMac Pro",
    "Apple",
    <Avatar
      sx={{
        bgcolor: "#03c3ec29",
        width: 30,
        height: 30,
      }}
    >
      <ComputerIcon
        sx={{
          color: "#03c3ec",
          width: 16,
          height: 16,
        }}
      />
    </Avatar>,

    "Computer",
    "$0/$899",
    "Unpaid",
    "CANCELLED",
    "	https://greakproject.vercel.app/images/cards/apple-iMac-pro-light.png"
  ),
  createData(
    "Note 10",
    "Samsung",
    <Avatar
      sx={{
        bgcolor: "#696cff29",
        width: 30,
        height: 30,
      }}
    >
      <SmartphoneIcon
        sx={{
          color: "#696cff",
          width: 16,
          height: 16,
        }}
      />
    </Avatar>,

    "Smart Phone",
    "$169",
    "Fully Paid",
    "COMPLETED",
    "https://greakproject.vercel.app/images/cards/samsung-note-10-light.png"
  ),
  createData(
    "iPhone 11 Pro",
    "Apple",
    <Avatar
      sx={{
        bgcolor: "#696cff29",
        width: 30,
        height: 30,
      }}
    >
      <SmartphoneIcon
        sx={{
          color: "#696cff",
          width: 16,
          height: 16,
        }}
      />
    </Avatar>,

    "Smart Phone",
    "$399",
    "Fully Paid",
    "COMPLETED",
    "https://greakproject.vercel.app/images/cards/apple-iPhone-11-pro-light.png"
  ),
  createData(
    "Mi Led TV 4X",
    "Xiaomi",
    <Avatar
      sx={{
        bgcolor: "#ff3e1d29",
        width: 30,
        height: 30,
      }}
    >
      <LiveTvIcon
        sx={{
          color: "#ff3e1d",
          width: 16,
          height: 16,
        }}
      />
    </Avatar>,

    "Smart TV",
    "$349 /$2599",
    "Fully Paid",
    "CONFIRMED",
    "https://greakproject.vercel.app/images/cards/mi-led-tv-4x-light.png"
  ),
  createData(
    "Logitech MX",
    "Logitech",
    <Avatar
      sx={{
        bgcolor: "#FFAB0029",
        width: 30,
        height: 30,
      }}
    >
      <MouseIcon
        sx={{
          color: "#FFAB00",
          width: 16,
          height: 16,
        }}
      />
    </Avatar>,
    "Mouse",
    "$89",
    "Fully Paid",
    "COMPLETED",
    "https://greakproject.vercel.app/images/cards/logitech-mx-light.png"
  ),
];

// Helper function to render payment information with conditional styling
function renderPaymentInfo(payment) {
  const parts = payment.split("/");
  if (parts.length === 2) {
    return (
      <>
        <Typography
          variant="heading1"
          component="span"
          sx={{ color: parts[0] === "$0" ? "#32475c61" : "#696cff" }}
        >
          {parts[0]} {/* First part, check if $0 then grey else purple */}
        </Typography>
        /
        <Typography
          variant="heading1"
          component="span"
          sx={{ color: "#32475c61" }}
        >
          {parts[1]} {/* Second part always grey */}
        </Typography>
      </>
    );
  } else {
    return (
      <Typography variant="heading1" component="span" sx={{ color: "#696cff" }}>
        {payment} {/* Single value, always purple */}
      </Typography>
    );
  }
}



export default function ProductTable() {



    //dropdown meun set up
const [anchorEl, setAnchorEl] = React.useState(null);
const [selectedIndex, setSelectedIndex] = React.useState(-1);

const handleClick = (event, index) => {
  setAnchorEl(event.currentTarget);
  setSelectedIndex(index);
};

const handleClose = () => {
  setAnchorEl(null);
};
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>PRODUCT</TableCell>
            <TableCell>CATEGORY</TableCell>
            <TableCell>PAYMENT</TableCell>
            <TableCell>ORDER STATUS</TableCell>
            <TableCell>ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                <Box display="flex" alignItems="center" gap={2}>
                  {row.imageUrl && (
                    <Avatar
                      src={row.imageUrl}
                      alt={row.product}
                      sx={{ width: 30, height: 30 }}
                    />
                  )}
                  <Box>
                    <Typography variant="body1">{row.product}</Typography>
                    <Typography variant="caption" color="textSecondary">
                      {row.brand}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center" gap={1}>
                  {row.category.icon}

                  <Typography variant="body2">{row.category.label}</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant="body1">
                  {renderPaymentInfo(row.payment)}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {row.paymentStatus}
                </Typography>
              </TableCell>
              <TableCell>
                <Chip
                  label={row.status}
                  sx={{
                    bgcolor:
                      row.status === "CONFIRMED"
                        ? "#696cff29"
                        : row.status === "COMPLETED"
                        ? "#4caf5029"
                        : "#f4433629", // Background colors
                    color:
                      row.status === "CONFIRMED"
                        ? "#696cff"
                        : row.status === "COMPLETED"
                        ? "#4caf50"
                        : "#f44336", // Text colors
                    borderRadius: "8px",
                    height: "18px",
                    fontSize: "0.8rem",
                    "& .MuiChip-label": {
                      color: "inherit", // Ensures text color is inherited from the parent Chip styles
                    },
                  }}
                  variant="filled"
                />
              </TableCell>
              <TableCell>
                <IconButton onClick={(event) => handleClick(event, index)}>
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl) && selectedIndex === index}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                  }}
                  transformOrigin={{
                    vertical: "right",
                    horizontal: "center"
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <ListItemText primary="View Details" />
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemText primary="Print Invoice" />
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemText primary="Buy Again" />
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemText primary="Delete History" />
                  </MenuItem>
                </Menu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
