import Header from 'components/Header';
import { textLabel } from 'common/textLabel';

const ContactPage = () => {
  document.body.style.backgroundColor = textLabel.PrimaryIndigo;

  return (
    <>
      <Header cur = {'contact'} />
    </>
  )
}

export default ContactPage;