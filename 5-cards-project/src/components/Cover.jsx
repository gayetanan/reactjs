import PropTypes from "prop-types"
export default function PostCover({img}){
    return(
        <div className="cover image-fit-ctn">
            <img src={img}></img>
        </div>
    )
}

PostCover.propTypes ={
    img: PropTypes.string.isRequired,
}