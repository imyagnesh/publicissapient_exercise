import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const star = ['fas', 'star'];
const starAlt = ['far', 'star'];
const starHalf = ['fas', 'star-half-alt'];

const Ratting = ({ ratting }) => {
  return (
    <span>
      <For each="i" of={[...Array(5).keys()]}>
        <Choose>
          <When condition={i < ratting && i + 1 > ratting}>
            <FontAwesomeIcon icon={starHalf} color="#ffb400" />
          </When>
          <When condition={i < ratting}>
            <FontAwesomeIcon icon={star} color="#ffb400" />
          </When>
          <Otherwise>
            <FontAwesomeIcon icon={starAlt} color="#ffb400" />
          </Otherwise>
        </Choose>
      </For>
    </span>
  );
};

export default Ratting;
