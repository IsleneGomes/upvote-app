import React, { useContext, useRef, useState } from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import { Bell } from 'react-feather';
import ContextUpvote from '../../../../context/ContextUpvote';

export default function Notifications() {
  const { user } = useContext(ContextUpvote);
  const [open, close] = useState(false);
  const userLogin = !!user;
  const href = useRef(null);

  const handleOpen = () => {
    close(true);
  };

  const handleClose = () => {
    close(false);
  };

  return (
  userLogin && (
    <>
      <IconButton ref={href} onClick={handleOpen}>
        <SvgIcon>
          <Bell />
        </SvgIcon>
      </IconButton>
      <Popover>
        close={handleClose}
        open={open}
        anchorEl={href.current}
        anchorOrigin = {{
          vertical: 'bottom',
          horizintal: 'right',
        }}
        transformOrigin = {{
          vertical: 'top',
          horizintal: 'right',
        }}
      </Popover>
    </>
  )
 );
}
