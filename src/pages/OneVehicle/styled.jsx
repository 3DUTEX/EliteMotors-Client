import styled from 'styled-components';

import { FONT_DEFAULT } from '../../styles/default';
import { mixinFlex } from '../../styles/mixins';

export const OneVehicleSection = styled.section`
  width: 100%;
  min-height: 80vh;
  padding-top: 75px;

  font-family: ${FONT_DEFAULT};
  background: #f1f1f1;

  .main-container {
    ${mixinFlex('row', 'center', 'center', '0 30px')};
    max-width: 95%;
    min-height: inherit;
    margin: 0 auto;
    padding: 20px 0;
  }

  .details-vehicle {
    ${mixinFlex('column', 'initial', 'initial', '30px 0')}
    width: 50%;
    padding: 30px;

    .name-vehicle {
      text-transform: uppercase;
      font-size: 30px;
    }

    .detail-vehicle {
      ${mixinFlex('column')}
      font-size: 20px;

      p {
        font-size: 16px;
      }
    }

    .price-vehicle {
      ${mixinFlex('column')}
      font-size: 35px;
    }
  }

  .images-vehicle {
    width: 50%;

    img {
      border-radius: 8px;
    }
  }

  .main-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  .other-images {
    display: flex;
    overflow-x: auto;
    gap: 0 10px;

    img {
      width: 25%;
      height: 200px;
      object-fit: cover;
    }
  }

  @media (max-width: 720px) {
    .main-container {
    ${mixinFlex('column', 'center', 'center', '0 30px')};
    max-width: 95%;
    min-height: inherit;
    margin: 0 auto;
    padding: 20px 0;

    .details-vehicle {
      width: 100%;
    }

    .images-vehicle {
      width: 100%;
    }
  }
  }
`;
