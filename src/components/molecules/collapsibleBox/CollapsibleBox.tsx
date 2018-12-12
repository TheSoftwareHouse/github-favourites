import React from 'react';

import { Icon } from 'components';

import { CollapsibleBoxProps } from './CollapsibleBox.interface';
import { Box, CollapseToggleButton } from './CollapsibleBox.styles';

export const CollapsibleBox = ({ className, children, collapsed, onToggleCollapse }: CollapsibleBoxProps) => (
  <Box className={className || ''}>
    {children}

    <CollapseToggleButton onClick={onToggleCollapse} className="box__collapse-toggle">
      <Icon name={collapsed ? 'chevron-arrow-down' : 'chevron-arrow-up'} color="primary" size="12px" />
    </CollapseToggleButton>
  </Box>
);
