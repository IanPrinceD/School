import { Stack } from "@mui/material";
import { links } from "../data";
import { FooterHeader, FooterLink } from "./FooterLinks.element";
import { NavLink as RouterNavLink } from 'react-router-dom';

const FooterLinks = () => {
  return (
    <>
      {links.map(({ id, category, sub }) => (
        <Stack key={id}>
          <FooterHeader>{category}</FooterHeader>
          <Stack>
            {sub.map(({ id: subId, link, text }) => (
              <FooterLink component={RouterNavLink} key={subId} to={link}>
                {text}
              </FooterLink>
            ))}
          </Stack>
        </Stack>
      ))}
    </>
  );
}
export default FooterLinks