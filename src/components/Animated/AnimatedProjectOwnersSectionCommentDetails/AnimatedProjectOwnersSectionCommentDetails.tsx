import { FC } from 'react';
import {
  Container,
  CommentBgImg,
  CommentBgPicture,
  Content,
  Element,
} from './AnimatedProjectOwnersSectionCommentDetails.styled';
import commentBgMob from '@/images/main/projectOwners/comment-bg-mob-min.png';
import commentBgTablet from '@/images/main/projectOwners/comment-bg-tablet-min.png';
import commentBgDesk from '@/images/main/projectOwners/comment-bg-desk-min.png';
import { theme } from '@/constants';
import Quotes from '@/icons/projectOwners/quotes.svg?react';
import { IProps } from './AnimatedProjectOwnersSectionCommentDetails.types';
import AnimatedProjectOwnersSectionCommentDetailsText from '@AnimatedComponents/AnimatedProjectOwnersSectionCommentDetailsText';

const AnimatedProjectOwnersSectionCommentDetails: FC<IProps> = ({
  children,
  strings,
  title,
  subtitle,
  isFlexEnd,
  containerInView,
  transformOriginXDesk,
  transformOriginXTablet,
  transformOriginYDesk,
  transformOriginYTablet,
  animate,
  containerVariants,
  elementVariants,
}) => {
  const bgTabletMedia = `(min-width: ${theme.breakpoints.tablet}px)`;
  const bgDeskMedia = `(min-width: ${theme.breakpoints.desktop}px)`;

  return (
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
    </Container>
  );
};

export default AnimatedProjectOwnersSectionCommentDetails;
