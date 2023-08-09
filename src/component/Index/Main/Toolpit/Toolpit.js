import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import './Toolpit.scss'


export default function SimpleTooltips({setActive}) {

  return (
    <div className="toolpit" onClick={() => setActive(true)}>
      <Tooltip title="Подсказка" aria-label="Подсказака">
        <Fab color="primary">
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  );
}