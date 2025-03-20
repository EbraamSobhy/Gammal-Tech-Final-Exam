import './home.css';
import BgVideo from './Reference video.mp4';

function Home() {
    return (
        <div className='main'>
            <video src={BgVideo} autoPlay loop muted />
            <div className="content">
                <p>Welcome To Gammal Tech</p>
                <p>Final Exam</p>
                <br />
            </div>
        </div>
    );
}

export default Home;
