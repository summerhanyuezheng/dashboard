import React from "react"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"

export default function SingleAvatar() {
  return (
    <>
      <Typography sx={{ display: "flex", marginTop: "20px" }}>
        <Avatar sx={{ marginRight: "10px" }} alt="Remy Sharp" src="https://greakproject.vercel.app/images/avatars/3.png" />
        <Typography sx={{ color: "#32475cde", fontSize: "16px", marginBottom: "10px" }}>
          Steven Nash(Client)<Typography sx={{ color: "#32475c99", fontSize: "16px" }}>CEO of ThemeSelection</Typography>
        </Typography>
      </Typography>
    </>
  )
}
