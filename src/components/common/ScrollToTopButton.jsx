import styled from 'styled-components';
import { FaArrowCircleUp } from 'react-icons/fa';
import { colors } from '../../style/colors';
import { useEffect, useState } from 'react';

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleShowButton);

    return () => {
      window.removeEventListener('scroll', handleShowButton);
    };
  }, []);

  return (
    showButton && (
      <Wrapper onClick={scrollToTop}>
        <FaArrowCircleUp />
      </Wrapper>
    )
  );
}

const Wrapper = styled.div`
  position: fixed;
  right: 5%;
  bottom: 5%;
  z-index: 1;

  * {
    font-size: 2em;
    border-radius: 50%;
    color: ${colors.white};
    cursor: pointer;
  }
`;
