import React from "react";
import styled from "styled-components";
import theme from "../../../theme";

//사이드바의 각 버튼
const SidebarElement = (props) => {
    const { onClick, num, isChecked, type } = props;

    return (
        <Element>
            <Icon onClick={onClick}>
                {type === "scrap" &&
                    (isChecked === true ? (
                        <svg
                            width="24"
                            height="24"
                            fill={theme.mainColor}
                            stroke={theme.mainColor}
                            strokeWidth="0.5"
                            viewBox="0 0 24 24"
                            preserveAspectRatio="xMidYMid meet">
                            <path d="M11.53 18.54l-8.06 4.31A1 1 0 0 1 2 21.97V3.5A1.5 1.5 0 0 1 3.5 2h17A1.5 1.5 0 0 1 22 3.5v18.47a1 1 0 0 1-1.47.88l-8.06-4.31a1 1 0 0 0-.94 0z"></path>
                        </svg>
                    ) : (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            preserveAspectRatio="xMidYMid meet">
                            <path
                                fillRule="evenodd"
                                transform="matrix(1 0 0 -1 0 23.033)"
                                d="M12.943 6.342a2 2 0 0 1-1.886 0L3 2.032V20.5a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5V2.033l-8.057 4.309zm-.471-.882l8.056-4.31A1 1 0 0 1 22 2.034V20.5a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 20.5V2.033a1 1 0 0 1 1.472-.882l8.056 4.31a1 1 0 0 0 .944 0z"></path>
                        </svg>
                    ))}
                {type === "like" &&
                    (isChecked === true ? (
                        <svg
                            width="24"
                            height="24"
                            fill={theme.Element}
                            stroke={theme.Element}
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            preserveAspectRatio="xMidYMid meet">
                            <path d="M23.22 7.95c.4 4.94-2.92 9.71-10.92 13.85a.47.47 0 0 1-.42 0C3.88 17.66.56 12.9.96 7.93 1.54 2.48 8.28.3 12.1 4.7c3.8-4.4 10.55-2.22 11.13 3.25z"></path>
                        </svg>
                    ) : (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            preserveAspectRatio="xMidYMid meet">
                            <path
                                fill="currentColor"
                                d="M22.971 7.638c-.548-5.17-7.119-7.135-10.57-2.488a.5.5 0 0 1-.802 0C8.148.503 1.577 2.469 1.029 7.625.642 12.451 3.897 17.183 12 21.436c8.104-4.252 11.36-8.984 10.972-13.798zm.996-.093c.428 5.319-3.137 10.446-11.738 14.899a.5.5 0 0 1-.46 0C3.169 17.99-.395 12.864.034 7.532.656 1.67 7.904-.683 12 4.052 16.096-.683 23.344 1.67 23.967 7.545z"></path>
                        </svg>
                    ))}
            </Icon>
            <Num>{num && num.toLocaleString()}</Num>
        </Element>
    );
};

const Element = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #aaaaaa;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    box-shadow: 1px 1px 1px lightgray;
    &:hover {
        background-color: #eeeeee;
        cursor: pointer;
    }
`;
const Num = styled.span``;
export default SidebarElement;
