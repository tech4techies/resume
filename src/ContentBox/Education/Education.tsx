import React, { Fragment, useState } from 'react';
import { ListBox, Title, List, StyledListDiv, StyledImage, ListItem } from '../../components/components';
import { Config } from '../../config';



const StarImage: React.FC = () => {
    return (<StyledImage style={{height: 18, width: 18, marginTop: 2}} src={'https://cdn.convertcart.com/uploads/ac8ea213.svg'} alt=''/>)
}

interface IListProps {
    val: string;
}

const ListHeading: React.FC<IListProps> = (props) => {
    const { val } = props;
    console.log(typeof val);
    return (
        <StyledListDiv style={{marginTop: 1, fontSize:18, fontWeight:600, marginLeft:3 }}>
            {val}
        </StyledListDiv>
    )
}

interface IBoxProps {
    vals: any;
}
const ListContentBox: React.FC<IBoxProps> = (props) => {
    const { vals } = props;
    return(
        <StyledListDiv style={{display: 'flex', flexDirection: 'column' }}>
            <StyledListDiv style={{ marginLeft: 30, display: 'flex', flexDirection: 'row', marginBottom: 5, marginTop: 5}}>
            {vals.qualification}  { vals.specialization.length > 0 && `( ${vals.specialization} )`} {`, Grade : ${parseFloat(vals.percentage.toString()).toFixed(2)}%`} 
            </StyledListDiv>
            <StyledListDiv style={{ marginLeft: 30, display: 'flex', flexDirection: 'row'}}>
            {vals.years}   
            </StyledListDiv>    
            <StyledListDiv style={{ marginLeft: 30, display: 'flex', flexDirection: 'row'}}>
            {vals.location}  
            </StyledListDiv>    
        </StyledListDiv>
    )
}

interface ICollapseProps {
    val: string;
    onCollapseClick: () => void;
}
const CollapseLink: React.FC<ICollapseProps> = (props) => {
return <StyledListDiv onClick={props.onCollapseClick} 
            style={{color:'blue', cursor:'pointer', textDecoration:'underline', marginLeft: /Less/gi.test(props.val) ?'78%': '70%'}}> 
                {props.val} 
        </StyledListDiv>
}

interface IEduDetail {
    name: string,
    qualification: string,
    specialization: string,
    location: string,
    percentage: number,
    years: string
}
interface IEducation {
    [k: string]: IEduDetail 
}

const Education:React.FC = () => {
    const [ showMore, setShowMore ] = useState(false); 
    const  education  = Config.education as IEducation;
    const levels = (Object.keys(education));
    const { name, ...rest} = education[levels[0]];
    const onCollapseClick = () => setShowMore(!showMore);
    return (
        <Fragment>
            <ListBox style={{marginLeft: '8%'}}>
                <Title>Education</Title>
                {!showMore && (
                    <List>
                        <ListItem style={{flexDirection: 'column'}} >
                            <StyledListDiv style={{display: 'flex'}}>
                                <StarImage/><ListHeading val={name} />
                            </StyledListDiv>
                            <ListContentBox vals={rest} />
                        </ListItem>
                    </List>
                )}
                {showMore && (
                    <List>
                        {
                            levels.map((level:string) => {
                                const { name, ...rest } = education[level];
                                return(
                                    <Fragment>
                                        <ListItem style={{flexDirection: 'column'}} key={level}>
                                            <StyledListDiv style={{display: 'flex'}}>
                                                <StarImage/><ListHeading val={name} />
                                            </StyledListDiv>
                                            <ListContentBox vals={rest} />
                                        </ListItem>
                                    </Fragment>
                                )
                            })
                        }
                    </List>
                )}
                { showMore && (<CollapseLink onCollapseClick={onCollapseClick} val={ ' - Show Less '} />)}
            {!showMore &&(<CollapseLink onCollapseClick={onCollapseClick} val={' + Show More '} />)}
            </ListBox>
        </Fragment>
    )
}

export default Education;