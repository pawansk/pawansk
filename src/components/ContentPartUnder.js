import ContentPart from './ContentPart';


const ContentPartUnder = ({ children}) => {
    return (
       <div>
             <ContentPart>
            <div className="mainWrapper-under">
                {/* Render children */}
                {children}
            </div>
            </ContentPart>
            </div>
    );
};

export default ContentPartUnder;
