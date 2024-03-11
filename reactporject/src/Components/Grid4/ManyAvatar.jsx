import React from "react"
import Avatar from "@mui/material/Avatar"
import AvatarGroup from "@mui/material/AvatarGroup"

export default function ManyAvatar() {
  return (
    <div>
      <AvatarGroup sx={{ marginTop: "10px", justifyContent: "flex-end" }} max={5}>
        <Avatar alt="Remy Sharp" src="https://greakproject.vercel.app/images/avatars/5.png" />
        <Avatar alt="Travis Howard" src="https://greakproject.vercel.app/images/avatars/12.png" />
        <Avatar alt="Cindy Baker" src="https://greakproject.vercel.app/images/avatars/9.png" />
        <Avatar alt="Agnes Walker" src="https://greakproject.vercel.app/images/avatars/6.png" />
        <Avatar alt="Trevor Henderson" src="https://greakproject.vercel.app/images/avatars/14.png" />
      </AvatarGroup>
    </div>
  )
}
