import styled from "styled-components";
import { MainBackground } from "../../../assets";

const TeamLeftBox = styled.div`
    width: 75%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const TeamRightBox = styled.div`
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TeamName = styled.div`

`;
const TeamMember = styled.div`

`;

const SaveBtn = styled.div`
    padding: 0 2rem;
`;
const SubBtn = styled.div`
    padding: 0 2rem;
`;

export {
    TeamLeftBox,
    TeamRightBox,
    TeamName,
    TeamMember,
    SaveBtn,
    SubBtn
}