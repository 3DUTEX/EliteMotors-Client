import styled from 'styled-components';

import { mixinFlex } from '../../../../styles/mixins';

export const ContainerVehicles = styled.div`
  ${mixinFlex('row', 'center', 'initial', '20px')}
  flex-wrap: wrap;
  min-height: 80vh;

  max-width: 95%;
  padding: 15px;
  margin: 30px auto;
`;
