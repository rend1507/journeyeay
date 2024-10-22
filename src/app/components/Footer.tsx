import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Explore Bromo - All rights reserved.</p>
    </footer>
  );
};

export default Footer;
