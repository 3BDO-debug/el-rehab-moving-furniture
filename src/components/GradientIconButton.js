import React from 'react';
import PropTypes from 'prop-types';
// material
import { IconButton } from '@mui/material';

// ---------------------------------------------------------------------------------------

GradientIconButton.propTypes = {
  icon: PropTypes.node.isRequired,
  startColor: PropTypes.string.isRequired,
  endColor: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

function GradientIconButton({ icon, startColor, endColor, onClick }) {
  return (
    <IconButton onClick={onClick}>
      <svg width={0} height={0}>
        <linearGradient id="linearColors" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset={'0%'} stopColor={startColor} />
          <stop offset={'100%'} stopColor={endColor} />
        </linearGradient>
      </svg>
      {React.cloneElement(icon, {
        sx: { ...icon.props?.sx, fill: 'url(#linearColors)' },
      })}
    </IconButton>
  );
}

export default GradientIconButton;
