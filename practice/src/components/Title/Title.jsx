import { memo } from 'react';

function Title({ title }) {
  return <h2>{title}</h2>;
}

export default memo(Title);
