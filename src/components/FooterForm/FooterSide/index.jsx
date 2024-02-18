import { SideText, TextCTA, TextContainer } from './FooterSide.element';

const FooterSide = () => {
  return (
    <SideText>
      <TextContainer>sign up for our newsletter and</TextContainer>
      <TextContainer>
        get my {''}
        <TextCTA>
          set up your child for success guide.
        </TextCTA>
      </TextContainer>
    </SideText>
  );
};
export default FooterSide;
