import PropTypes  from "prop-types"

export default function Avatar({img}){
    return(
        <div className="avatar image-fit-ctn">
            <img src={img} />
        </div>
    )
}

Avatar.propTypes ={
    img: PropTypes.string.isRequired,
}