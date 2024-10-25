import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Journeyeay - All rights reserved.</p>
    </footer>
  );
};

export default Footer;
