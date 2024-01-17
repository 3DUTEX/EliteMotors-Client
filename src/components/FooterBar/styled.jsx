import styled from 'styled-components';
import { FONT_DEFAULT, PRIMARY_COLOR } from '../../styles/default';

export const FooterBarSection = styled.section`
  width: 100%;
  margin-top: 1px;

  font-size: 25px;
  font-family: ${FONT_DEFAULT};
  background: #000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const FooterBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;

  width: 80%;
  margin: 0 auto;
  padding: 100px 0 50px 0;

  color: #fff;

  .logo {
    text-align: center;
    font-size: 50px;
    color: #fff;
  }

  .grid {
    display: flex;
    justify-content: space-between;
    gap: 0 20px;
  }

  .contact-list {
    display: flex;
    flex-direction: column;
    gap: 20px 0;

    li {
      display: flex;
      align-items: center;
      gap: 0 10px;
      word-break: break-all;
    }
  }

  .item-container {
    display: flex;
    flex-direction: column;

    width: 50%;

    p {
      height: 200px;
      overflow: auto;
    }
  }

  .detach {
    margin: 0;
    padding: 0;
    color: ${PRIMARY_COLOR};
  }

  .warning {
    display: flex;
    justify-content: center;
    margin-top: 100px;
    font-style: italic;
  }

  .sub-title {
    display: flex;
    align-items: center;
    gap: 0 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #000;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: #fff;
  }

  @media (max-width: 720px) {
    .grid {
      flex-direction: column;
      gap: 30px 0;
    }

    .item-container {
      width: 100%;
      gap: 20px 0;
    }

    .sub-title {
      font-size: 30px;
    }

    .warning {
      flex-direction: column;

      .exclamation {
        font-size: 50px;
      }
    }

    .contact-list {
      gap: 40px 0;

      li {
        flex-direction: column;
      }

      .icon {
        font-size: 50px;
        padding-bottom: 10px;
      }
    }
  }
`;
