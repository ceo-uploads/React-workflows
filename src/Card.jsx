import profilePic from './assets/img1.jpg'

function Card() {
    return(
        <div className="card">
            <img className="img" src={profilePic} alt="profile Picture"></img>
            <h2 className="title">Ceo-Uploads</h2>
            <p className="text">I make Youtube videos and Do many things..</p>
        </div>
    );
}

export default Card