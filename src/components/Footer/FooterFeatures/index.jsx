import { Stack } from '@mui/material';
import { FooterLink, FooterHeader } from './FooterFeatures.element';
import { feature } from '../data';


const FooterFeatures = () => {
  return (
    <>
      {feature.map(({ id, category, sub }) => (
        <Stack key={id}>
          <FooterHeader>{category}</FooterHeader>
          <Stack>
            {sub.map((item, subIndex) => (
              <FooterLink key={subIndex}>{item}</FooterLink>
            ))}
          </Stack>
        </Stack>
      ))}
    </>
  );
};
export default FooterFeatures;
