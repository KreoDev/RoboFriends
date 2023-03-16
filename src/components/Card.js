const Card = ({ name, email, id }) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma1 grow bw2 shadow-5 '>
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h4>{name}</h4>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card