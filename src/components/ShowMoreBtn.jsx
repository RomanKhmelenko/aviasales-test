import "../assets/styles/ShowMoreBtn.css";

const ShowMoreBtn = (showMore) => {

    return (
        <div className="show-more-btn" onClick={showMore.showMore}>
            показать еще 5 билетов!
        </div>
    )
}

export default ShowMoreBtn;