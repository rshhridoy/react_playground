import Propic from './assets/passport.png'

function Card(){
    return(
        <div className="card">
            <img className='card-img' src={Propic} alt="Profile Pic" srcset="" />
            <h2 className="card-title">Hridoy</h2>
            <p className="card-designation">Software Developer</p>
        </div>
    );
    
}

export default Card;