import { Typewriter } from 'react-simple-typewriter';

export default function Type() {
    return (
        <Typewriter
            words={['Front-End Developer', 'Web Designer', 'Web Developer']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}               
        />
    );
}
