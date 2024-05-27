
const CardSection = ({children, className, style}) =>{
    return(
        <div className="row">
        <div className="col-xl-12">
            <div className="card">
                <div className={`card-body ${className}`} style={style}>
                     {children}
                </div>
            </div>
        </div>
        </div>
    );
};

export default CardSection;