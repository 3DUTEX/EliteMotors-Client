import styled from 'styled-components';

import { FONT_DEFAULT } from '../../../../../../styles/default';
import { mixinFlex } from '../../../../../../styles/mixins';

export const VehicleContainer = styled.div`
  ${mixinFlex('column', 'initial', 'center')}
  width: 300px;
  height: 350px;

  font-family: ${FONT_DEFAULT};
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px 8px 8px 8px;
  overflow: hidden;

  .image-vehicle {
    width: inherit;
    height: 150px;
    border-radius: 8px 8px 0 0;
    object-fit: cover;
  }

  ul {
    font-size: 20px;
    width: inherit;
    height: 110px;
    padding: 5px 20px;
    margin: 10px 0;
    overflow-y: auto;
  }

  .price-vehicle {
    font-size: 25px;
    font-weight: 600;
  }

  .see-more-btn {
    width: inherit;
    padding: 0 10px;
  }

  @media (max-width: 720px) {
    width: 100%;
    height: 500px;

    .image-vehicle {
      height: 300px;
    }
  }
`;
