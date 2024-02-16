import { Box, Stack } from "@mui/material";
import { socmed } from "../data";
import { FooterHeader, FooterLink } from "./FooterSocmed.element";
import { NavLink as RouterNavLink } from 'react-router-dom';

const FooterSocmed = () => {
  return (
    <>
      {socmed.map(({ id, category, sub }) => (
        <Stack key={id}>
          <FooterHeader>{category}</FooterHeader>
          <Stack>
            {sub.map(({ id: subId, link, text, icon }) => (
              <FooterLink component={RouterNavLink} key={subId} to={link}>
                <Stack direction="row">
                  <Box sx={{ marginRight: '1rem', fontSize: '2rem' }}>
                    {icon}
                  </Box>
                  <Box>{text}</Box>
                </Stack>
              </FooterLink>
            ))}
          </Stack>
        </Stack>
      ))}
    </>
  );
}
export default FooterSocmed