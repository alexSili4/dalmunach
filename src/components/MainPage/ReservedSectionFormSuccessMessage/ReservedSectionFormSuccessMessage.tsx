import { FC } from 'react';
import {
  Container,
  Content,
  Text,
  Title,
} from './ReservedSectionFormSuccessMessage.styled';
import DecorativeElement from '@/icons/reserved/decorative-element.svg?react';

const ReservedSectionFormSuccessMessage: FC = () => {
  return (
    <Container>
      <Content>
        <Title>
          Дякуємо
          <br />
          за замовлення!
        </Title>
        <Text>
          Ми отримали вашу заявку та незабаром зв'яжемося з вами для
          підтвердження деталей. Гарного дня!
        </Text>
      </Content>
      <DecorativeElement />
    </Container>
  );
};

export default ReservedSectionFormSuccessMessage;
