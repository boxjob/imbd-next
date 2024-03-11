const Results = ({ results }) => {
    return (
        <div className="">
            { results.map( e => 
                <div key={ e.id } className="m-2">
                    <h2>{ e.original_title }</h2>
                </div>
            )}
        </div>
    );
}
 
export default Results;