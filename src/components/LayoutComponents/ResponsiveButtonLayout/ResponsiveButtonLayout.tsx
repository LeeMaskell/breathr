import React from 'react';
import styled from 'styled-components';

const ResponsiveButtonContainer = styled.div<{$width: number,  $responsiveWidth: number | undefined}>`
  width: ${props => props.$width}rem;

  @media (max-width: 768px) {
    width: ${props => props.$responsiveWidth ? `${props.$responsiveWidth}rem` : `100%`};
  }
`;

export default function ResponsiveButtonLayout({width, responsiveWidth, children}: {width: number; responsiveWidth?: number; children: any}) {
  return (
    <ResponsiveButtonContainer $width={width} $responsiveWidth={responsiveWidth}>{children}</ResponsiveButtonContainer>
  )
}
