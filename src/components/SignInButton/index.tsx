import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss';


export function SignInButton () {
    const isUserLoggenIn = true;
    return isUserLoggenIn ?(
        <button 
            type="button"
            className={styles.singInButton}
        >
            <FaGithub color='#04d361' />
            André Gois 
            <FiX color='#737380' className={styles.closeIcon} />
        </button>
    ) : (
        <button 
            type="button"
            className={styles.singInButton}
        >
            <FaGithub color='#eba417' />
            Sign in with github
        </button>
    );
}