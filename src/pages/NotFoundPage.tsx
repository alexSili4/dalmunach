import { FC } from 'react';
import { PagePaths } from '@/constants';
import { Navigate } from 'react-router-dom';

const NotFoundPage: FC = () => {
  return <Navigate to={PagePaths.root} />;
};

export default NotFoundPage;
