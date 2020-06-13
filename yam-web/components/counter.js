import { useRef, useEffect } from 'react';

const counter = (ele, start, end, frameDelay = 100, mul = 1.2) => {
  const element = ele;
  let increment = 2;
  let current = start;
  const timer = setInterval(() => {
    current += increment;
    increment *= mul;
    if (current >= end) {
      current = end;
      clearInterval(timer);
    }

    element.innerHTML = Math.floor(current).toLocaleString();
  }, frameDelay);
};

let a = true;

const Counter = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const bounding = sectionRef.current.getBoundingClientRect();
      if (
        a &&
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      ) {
        const counts = document.querySelectorAll('.count');
        counts.forEach((ele) => {
          counter(ele, 0, Number(ele.getAttribute('data-count')), 50);
        });
        a = false;
      }
    };
    document.addEventListener('scroll', onScroll, false);
    return () => {
      document.removeEventListener('scroll', onScroll, false);
    };
  }, []);

  return (
    <section className="counter-section" ref={sectionRef}>
      <div className="container">
        <div className="counter-row">
          <div className="row">
            <div className="col-6 col-md-3 col-sm-6">
              <div className="counter-col">
                <div className="counter-data" data-count="375">
                  <div className="count" data-count="375">
                    375
                  </div>
                  <h6>Happy Clients</h6>
                </div>
              </div>
            </div>
            {/* col */}

            <div className="col-6 col-md-3 col-sm-6">
              <div className="counter-col">
                <div className="counter-data" data-count="375">
                  <div className="count" data-count="375">
                    375
                  </div>
                  <h6>Telephonic Talk</h6>
                </div>
              </div>
            </div>
            {/* col */}

            <div className="col-6 col-md-3 col-sm-6">
              <div className="counter-col">
                <div className="counter-data" data-count="550">
                  <div className="count" data-count="550">
                    550
                  </div>
                  <h6>Photo Capture</h6>
                </div>
              </div>
            </div>
            {/* col */}

            <div className="col-6 col-md-3 col-sm-6">
              <div className="counter-col">
                <div className="counter-data" data-count="450">
                  <div className="count" data-count="450">
                    450
                  </div>
                  <h6>Project Completed</h6>
                </div>
              </div>
            </div>
            {/* col */}
          </div>
          {/* row */}
        </div>
      </div>
      {/* container */}
    </section>
  );
};

export default Counter;
