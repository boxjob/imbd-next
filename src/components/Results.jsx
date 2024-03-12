const { default: Card } = require("./Card")

const Results = ({ results }) => {
    return (
        <div className="grid sm:grid-col-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-8 m-4 p-4 ">
            { results.map( e => 
                <Card key={ e.id } result={ e } />
            )}
        </div>
    );
}
 
export default Results;