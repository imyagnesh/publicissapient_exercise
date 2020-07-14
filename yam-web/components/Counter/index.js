import { useRef } from 'react';
import Skeleton from 'react-loading-skeleton';
import './counter.module.css';
// const counter = (ele, start, end, frameDelay = 100, mul = 1.2) => {
//   const element = ele;
//   let increment = 2;
//   let current = start;
//   const timer = setInterval(() => {
//     current += increment;
//     increment *= mul;
//     if (current >= end) {
//       current = end;
//       clearInterval(timer);
//     }

//     element.innerHTML = Math.floor(current).toLocaleString();
//   }, frameDelay);
// };

// let a = true;

// eslint-disable-next-line react/prop-types
const Counter = ({ data }) => {
  const sectionRef = useRef(null);
  // useEffect(() => {
  //   const onScroll = () => {
  //     const bounding = sectionRef.current.getBoundingClientRect();
  //     if (
  //       a &&
  //       bounding.top >= 0 &&
  //       bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  //     ) {
  //       const counts = document.querySelectorAll('.count');
  //       counts.forEach((ele) => {
  //         counter(ele, 0, Number(ele.getAttribute('data-count')), 50);
  //       });
  //       a = false;
  //     }
  //   };
  //   document.addEventListener('scroll', onScroll, false);
  //   return () => {
  //     document.removeEventListener('scroll', onScroll, false);
  //   };
  // }, []);

  return (
    <section className="counter-section" ref={sectionRef}>
      <div className="container">
        <div className="counter-row">
          <div className="row">
            <Choose>
              <When condition={data}>
                <For each="item" of={data}>
                  <div className="col-6 col-md-3 col-sm-6" key={item.id}>
                    <div className="counter-col">
                      <div className="counter-data" data-count="375">
                        <div className="count" data-count="375">
                          {item.number}
                        </div>
                        <h6>{item.description}</h6>
                      </div>
                    </div>
                  </div>
                </For>
              </When>
              <Otherwise>
                <For each="item" of={[...Array(4).keys()]}>
                  <div className="col-6 col-md-3 col-sm-6" key={item.id}>
                    <div className="counter-col">
                      <div className="counter-data" data-count="375">
                        <div className="count" data-count="375">
                          <Skeleton height={30} width="30%" />
                        </div>
                        <h6>
                          <Skeleton height={12} width="60%" />
                        </h6>
                      </div>
                    </div>
                  </div>
                </For>
              </Otherwise>
            </Choose>
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
