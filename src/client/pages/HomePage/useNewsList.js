import React, { useState, useEffect } from 'react';
import NewsDetails from '../../components/NewsDetails/NewsDetails';
import UpIcon from '../../assets/icons/arrow_drop_up.svg';

const useNewsList = ({ news, hideHit, upVote }) => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const data =
      news?.hits?.reduce((p, c) => {
        if (!c.hide) {
          return [
            ...p,
            {
              comments: c.num_comments || 0,
              voteCount: c.points || 0,
              upVote: (
                <div
                  className="btn"
                  aria-label={`upVote for ${c.objectID}`}
                  role="button"
                  tabIndex={0}
                  data-testid={`upvote-${c.objectID}`}
                  onKeyDown={() => upVote(c.objectID)}
                  onClick={() => upVote(c.objectID)}
                >
                  <UpIcon width={32} height={32} fill="#979797" />
                </div>
              ),
              newsDetails: (
                <NewsDetails hit={c} onHide={hideHit} data-testid={`newsDetails-${c.objectID}`} />
              ),
              objectID: c.objectID,
            },
          ];
        }
        return p;
      }, []) || [];
    setNewsList(data);
  }, [news, hideHit, upVote]);

  return {
    newsList,
  };
};

export default useNewsList;
