function SkillBadge({name, level}) {

    return(
        <div className="zp-skill-badge">

            <h3>

                {name} - {level}%

                {
                    level >= 90 && " 🔥"
                }

            </h3>

        </div>
    )
}

export default SkillBadge