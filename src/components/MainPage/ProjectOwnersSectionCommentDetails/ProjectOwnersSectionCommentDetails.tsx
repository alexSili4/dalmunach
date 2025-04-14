import { FC, useRef } from 'react';
import {
  Container,
  CommentBgImg,
  CommentBgPicture,
  Content,
} from './ProjectOwnersSectionCommentDetails.styled';
import commentBgMob from '@/images/main/projectOwners/comment-bg-mob-min.png';
import commentBgTablet from '@/images/main/projectOwners/comment-bg-tablet-min.png';
import commentBgDesk from '@/images/main/projectOwners/comment-bg-desk-min.png';
import { theme } from '@/constants';
import Quotes from '@/icons/projectOwners/quotes.svg?react';
import { IProps } from './ProjectOwnersSectionCommentDetails.types';
import AnimatedProjectOwnersSectionCommentDetailsText from '@AnimatedComponents/AnimatedProjectOwnersSectionCommentDetailsText';
import { useInView } from 'framer-motion';

const ProjectOwnersSectionCommentDetails: FC<IProps> = ({
  children,
  strings,
  title,
  subtitle,
  isFlexEnd,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, {
    margin: '-200px 0px -200px 0px',
  });
  const bgTabletMedia = `(min-width: ${theme.breakpoints.tablet}px)`;
  const bgDeskMedia = `(min-width: ${theme.breakpoints.desktop}px)`;

  return (
    <Container ref={containerRef} isFlexEnd={isFlexEnd}>
      <Content>
        <CommentBgPicture>
          <source srcSet={commentBgDesk} media={bgDeskMedia} />
          <source srcSet={commentBgTablet} media={bgTabletMedia} />
          <CommentBgImg src={commentBgMob} alt='Декоративне зображення' />
        </CommentBgPicture>
        <Quotes />
        <AnimatedProjectOwnersSectionCommentDetailsText
          strings={strings}
          title={title}
          subtitle={subtitle}
          inView={inView}
        />
      </Content>
      {children}
    </Container>
  );
};

export default ProjectOwnersSectionCommentDetails;
