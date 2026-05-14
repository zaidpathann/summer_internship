function Header() {

    const hour = new Date().getHours()

    let greeting = ""

    if(hour >= 5 && hour <= 11){
        greeting = "Good Morning"
    }
    else if(hour >= 12 && hour <= 17){
        greeting = "Good Afternoon"
    }
    else{
        greeting = "Good Evening"
    }

    return(
        <div className="zp-header">

            <h1 className="zp-title">
                {greeting}
            </h1>

            <h2 className="zp-subtitle">
                Welcome {import.meta.env.VITE_INTERN_NAME}
            </h2>
            <h4>Time : {hour} O'clock</h4>

        </div>
    )
}

export default Header