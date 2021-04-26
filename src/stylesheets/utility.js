import styled from 'styled-components'

const theme = {
    colors: {
        primaryBlue: "#35aac4",
        secondaryBlue: "#d7eef3"
    },
    maxWidth: '1170px',
    gutter: '16px',
    maxTextWidth: '720px',
    breakpoints: {
      xs: '400px',
      s: '600px',
      m: '900px',
      l: '1200px',
    },
}

export default theme;

export const Column = styled.div`
img {
  display: block;
  margin: 0 auto;
}
`;


export const Grid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  align-items: center;
  grid-template-rows: auto;
  gap: 2rem 0;
  @media all and (min-width: 768px) {
    gap: 0px 2rem;
  }
  img {
    max-width: 100%;
  }
`;

export const TwoColumnGrid = styled(Grid)`
  margin-bottom: 4rem;
  @media all and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ThreeColumnGrid = styled(Grid)`
  @media all and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 1rem;
  }
  @media all and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 1rem;
    grid-template-areas:
      ". . .";
  }
`;

export const FourColumnGrid = styled(Grid)`
  @media all and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 1rem;

  }
  @media all and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 1rem;
    grid-template-areas:
      ". . . .";
  }
`;

export const CenterAlign = styled.div`
  text-align: center;
  margin: 1rem 0;
`;

export const Row = styled.div`
  width: 100%;
`;

export const FlexBetween = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const MaxContainer = styled(FlexBetween)`
    max-width: 100%;
    padding-left: ${theme.gutter};
    padding-right: ${theme.gutter};
    margin: 0 auto;
    width: 100%;
    @media all and (min-width: 768px) {
      max-width: ${theme.maxWidth};
    }
`;

export const Button = styled.a`
    padding: 0.5rem 1.5rem;
    display: inline-block;
    transition: 0.3s ease-out background-color, 0.3s ease-out color;
    border: 1px solid;
`;

export const PrimaryButton = styled(Button)`
    background-color: ${theme.colors.primaryBlue};
    border-color: ${theme.colors.primaryBlue};
    border-radius: 25px;
    color: #fff;
    &:hover {
      background-color: #fff;
      color: ${theme.colors.primaryBlue};
      border-color: ${theme.colors.primaryBlue};
    }
`;

export const SecondaryButton = styled(Button)`
    background-color: ${theme.colors.secondaryBlue};
    border-color: ${theme.colors.secondaryBlue};
    border-radius: 25px;
    color: ${theme.colors.primaryBlue};
    &:hover {
      background-color: ${theme.colors.primaryBlue};
      color: #fff;
    }
`;