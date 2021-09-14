import { Link } from "react-router-dom"

const _404 = () => {
    return ( 
        <div className="container-fluid">
            <div className="row mt-4 align-items-center">
                <div className="col-12 text-left" style={{borderBottom:'2px solid #b8b8b8', marginBottom:'3em'}}>
                    <h1 className="pageTitle">Page Not found</h1>
                </div>
                <br></br>
                <div className="col-8 text-center product-container" style={{paddingBottom: '2em'}}>
                    <h2>Sorry!</h2>
                    <br />
                    <p>The page you're looking for does not exist.</p>
                    <br />
                    <Link to="/">Click here to return to the homepage!</Link>
                </div>
            </div>
            
        </div>
    );
}
 
export default _404;