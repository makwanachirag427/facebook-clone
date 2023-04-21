import React from 'react';
import "./SidebarRow.css"
import { Avatar } from '@mui/material';
const SidebarRow = ({src,Icon,title}) => {
  return (
    <div className='sidebarRow'>
      {src && <Avatar  sx={{ width: 28, height: 28 }} src={src}/>}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  )
}

export default SidebarRow
