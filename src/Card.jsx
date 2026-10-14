import MyPic from './assets/passport.png'

function Card() {
    return(
        <div className="card">
            <img className='card-image' src={MyPic} alt="profile Picture" />
            <h2 className='card-title'>Hridoy</h2>
            <p className='card-designation'>Software Developer</p>
        </div>
    );
}

export default Card