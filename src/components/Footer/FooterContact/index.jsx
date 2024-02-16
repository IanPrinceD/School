import { Stack } from "@mui/material";
import { contact } from "../data";
import { FooterHeader, FooterLink } from "./FooterContact.element";

const FooterContact = () => {
  return (
    <>
      {contact.map(({ id, category, sub }) => (
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
}
export default FooterContact