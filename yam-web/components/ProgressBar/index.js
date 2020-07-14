import { useRef, useEffect } from 'react';
import './progressBar.module.css';

const ProgressBar = ({ item }) => {
  const progressRef = useRef(null);
  const progressBarRef = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const bounding = progressRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (bounding.top >= 0 && bounding.bottom <= windowHeight) {
        const progressWidth = `${progressBarRef.current.getAttribute('aria-valuenow')}%`;
        progressBarRef.current.style.width = progressWidth;
      } else {
        progressBarRef.current.style.width = 0;
      }
    };
    document.addEventListener('scroll', onScroll, false);
    return () => {
      document.removeEventListener('scroll', onScroll, false);
    };
  }, []);

  return (
    <div className="progress-lt m-25px-b" key={item.id} ref={progressRef}>
      <h6>{item.name}</h6>
      <span>{`${(item.ratting * 100) / 5}%`}</span>
      <div className="progress">
        <div
          ref={progressBarRef}
          className="progress-bar theme-g-bg"
          role="progressbar"
          aria-valuenow={(item.ratting * 100) / 5}
          aria-valuemin="0"
          aria-valuemax="100"
        />
        {/* /progress-bar */}
      </div>
      {/* /progress */}
    </div>
  );
};

export default ProgressBar;
