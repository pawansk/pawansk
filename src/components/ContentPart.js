import PageTitle from './PageTitle';


const ContentPart = ({mainWrapperToggle, children }) => {
    return (
        <div className={`mainWrapper ${mainWrapperToggle ? 'mainWrapper-full' : ''}`}>
             {/* <PageTitle PageHeading={PageHeading}></PageTitle> */}
             <div className="mainWrapper-under">
                {/* Render children */}
                {children}
            </div>
        </div>
    );
};

export default ContentPart;
