import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
      <div className="container mx-auto flex justify-between">
        <p>devops@2023</p>
        <div>
            <a href="https://github.com/myusername" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://twitter.com/myusername" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com/in/myusername/" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
