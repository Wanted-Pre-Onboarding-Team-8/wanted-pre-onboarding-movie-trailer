import { useState } from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';

export default function DetailTab(props) {
  const [toggle, setToggle] = useState(1);

  const handleClickTab = (idx) => {
    setToggle(idx);
  };

  const renderTrailer = () => {
    const trailer = props.movieDetail.videos.results.find(
      (vid) => vid.name === 'Official Trailer',
    );
    const key = trailer ? trailer.key : props.movieDetail.videos.results[0].key;

    return (
      <YouTube
        src={`http://www.youtube.com/embed/${key}?autoplay=1&mute=1`}
        videoId={key}
        opts={{
          playerVars: {
            autoPlay: 1,
            mute: 1,
          },
        }}
      />
    );
  };

  return (
    <Wrapper>
      <TabMenu>
        <span
          className={toggle === 1 ? 'active-tabs' : 'Tabs'}
          onClick={() => handleClickTab(1)}
        >
          주요정보
        </span>
        <span
          className={toggle === 2 ? 'active-tabs' : 'Tabs'}
          onClick={() => handleClickTab(2)}
        >
          영상/포토
        </span>
      </TabMenu>
      <TabContents>
        <div className={toggle === 1 ? 'active-content' : 'content'}>
          {props.movieDetail.overview}
        </div>
        <div className={toggle === 2 ? 'active-content' : 'content'}>
          {props.movieDetail.videos ? renderTrailer() : null}
        </div>
      </TabContents>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 50%;
  margin-top: 30px;
`;

const TabMenu = styled.div`
  display: flex;
  font-size: 20px;
  margin-bottom: 20px;

  .Tabs {
    margin-right: 10%;
    text-align: center;
    box-sizing: content-box;
    position: relative;
    outline: none;
    cursor: pointer;
  }

  .active-tabs {
    margin-right: 10%;
    font-weight: 800;
    border-bottom: 2px solid rgba(0, 0, 0, 0.986);
  }
`;
const TabContents = styled.div`
  flex-grow: 1;

  .content {
    background: white;
    padding: 20px;
    width: 100%;
    height: 100%;
    display: none;
  }

  .active-content {
    display: block;
    line-height: 30px;
  }
`;
