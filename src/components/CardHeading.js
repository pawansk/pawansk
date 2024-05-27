const CardHeading = ({CardHeadingText, children, className, smallHeading, cardHeadingText, cardHeadingTextClass, handlecardHeadingText}) =>{

return(
  <div className={`card ${className ? className : ''}`}>
        <div className="g-0 align-items-center row">
       {CardHeadingText && 
       <div className={`d-flex align-items-center justify-content-between heading ${smallHeading ? 'smallHeading' : ''}`}>
       {CardHeadingText}
       {cardHeadingText && <div className={`${cardHeadingTextClass ? cardHeadingTextClass  : ''}`} onClick={handlecardHeadingText}>{cardHeadingText}</div>}
       </div>
       } 
            <div className="card-body">
            
              <div>{children}</div>
          </div>
          </div>
        </div>
 
);
};

export default CardHeading;



