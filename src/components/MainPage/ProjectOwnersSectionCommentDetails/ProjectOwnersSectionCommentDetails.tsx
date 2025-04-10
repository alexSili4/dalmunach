import { FC } from 'react';
import {
  Container,
  CommentBgImg,
  CommentBgPicture,
  Content,
<<<<<<< HEAD:src/components/Animated/AnimatedProjectOwnersSectionCommentDetails/AnimatedProjectOwnersSectionCommentDetails.tsx
  Element,
} from './AnimatedProjectOwnersSectionCommentDetails.styled';
=======
} from './ProjectOwnersSectionCommentDetails.styled';
>>>>>>> 1a06ac301e203db3c39a65768dc682508e98cff6:src/components/MainPage/ProjectOwnersSectionCommentDetails/ProjectOwnersSectionCommentDetails.tsx
import commentBgMob from '@/images/main/projectOwners/comment-bg-mob-min.png';
import commentBgTablet from '@/images/main/projectOwners/comment-bg-tablet-min.png';
import commentBgDesk from '@/images/main/projectOwners/comment-bg-desk-min.png';
import { theme } from '@/constants';
import Quotes from '@/icons/projectOwners/quotes.svg?react';
import { IProps } from './ProjectOwnersSectionCommentDetails.types';
import AnimatedProjectOwnersSectionCommentDetailsText from '@AnimatedComponents/AnimatedProjectOwnersSectionCommentDetailsText';

const ProjectOwnersSectionCommentDetails: FC<IProps> = ({
  children,
  strings,
  title,
  subtitle,
  isFlexEnd,
<<<<<<< HEAD:src/components/Animated/AnimatedProjectOwnersSectionCommentDetails/AnimatedProjectOwnersSectionCommentDetails.tsx
  containerInView,
  transformOriginXDesk,
  transformOriginXTablet,
  transformOriginYDesk,
  transformOriginYTablet,
=======
  inView,
  containerRef,
>>>>>>> 1a06ac301e203db3c39a65768dc682508e98cff6:src/components/MainPage/ProjectOwnersSectionCommentDetails/ProjectOwnersSectionCommentDetails.tsx
}) => {
  const bgTabletMedia = `(min-width: ${theme.breakpoints.tablet}px)`;
  const bgDeskMedia = `(min-width: ${theme.breakpoints.desktop}px)`;

  return (
<<<<<<< HEAD:src/components/Animated/AnimatedProjectOwnersSectionCommentDetails/AnimatedProjectOwnersSectionCommentDetails.tsx
    <Container
      variants={containerVariants}
      initial='visible'
      animate={animate}
      isFlexEnd={isFlexEnd}
    >
      <Element
        variants={elementVariants}
        transformOriginXDesk={transformOriginXDesk}
        transformOriginXTablet={transformOriginXTablet}
        transformOriginYDesk={transformOriginYDesk}
        transformOriginYTablet={transformOriginYTablet}
      >
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
            inView={containerInView}
          />
        </Content>
        {children}
      </Element>
=======
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
>>>>>>> 1a06ac301e203db3c39a65768dc682508e98cff6:src/components/MainPage/ProjectOwnersSectionCommentDetails/ProjectOwnersSectionCommentDetails.tsx
    </Container>
  );
};

export default ProjectOwnersSectionCommentDetails;
