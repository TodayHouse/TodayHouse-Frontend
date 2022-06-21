import React from "react";
import Rating from "react-star-ratings";
import theme from "../theme";

//rating(0~5 소수점 가능), size(px)를 props로 받아야 함
//ex) rating={4.5} size="36px"
const Star = (props) => {
    const { size, changeRating, rating } = props;

    return (
        <Rating
            rating={rating}
            starRatedColor={theme.mainColor}
            starEmptyColor="lightgray"
            starHoverColor={theme.mainColor}
            numberOfStars={5}
            name="rating"
            starDimension={props.size}
            starSpacing="0px"
            size={size}
            changeRating={changeRating}
        />
    );
};

export default Star;
