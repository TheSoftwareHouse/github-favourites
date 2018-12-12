import React from 'react';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

import { IconWrapper as mockIconWrapper } from 'components/atoms/icon/Icon.styles'; 

jest.mock('components/atoms/icon/Icon', () => ({
  Icon: mockIconWrapper,
}))