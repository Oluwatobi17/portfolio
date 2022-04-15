const SkillCard = (props) =>{
    const {title, classN, img, color} = props.skill;

    const style = {
        'border-bottom': '3px solid '+color
    }
    return <div className={`card ${classN}`} style={style} >
            <img src={img} alt={classN} />
            <p>{title}</p>
        </div>
}

export default SkillCard;