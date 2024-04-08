import { Link } from "react-router-dom"
import "./style.css"
import placeholder from "../../images/placeholder.jfif"
const Project = () => {

    return (
        <>
            <div className="backend-container">
                <h1>FRONT-END Projects</h1>

                <div className="project-container">
                    <div className="single-project-container">
                        <Link to="/projects/1" className="image-container"><img src={placeholder} alt="" /></Link>
                        <div className="content">
                            <h2>This is a tomato</h2>
                            <h3>Technologies Used: </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptate eligendi nihil saepe repellendus, ipsam possimus reprehenderit consequuntur labore, alias qui tenetur tempore! Sed a reprehenderit ut commodi optio modi?</p>
                        </div>
                    </div>
                    <div className="single-project-container">
                        <Link to="/projects/1" className="image-container"><img src={placeholder} alt="" /></Link>
                        <div className="content">
                            <h2>This is a tomato</h2>
                            <h3>Technologies Used: </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptate eligendi nihil saepe repellendus, ipsam possimus reprehenderit consequuntur labore, alias qui tenetur tempore! Sed a reprehenderit ut commodi optio modi?</p>
                        </div>
                    </div>
                    <div className="single-project-container">
                        <Link to="/projects/1" className="image-container"><img src={placeholder} alt="" /></Link>
                        <div className="content">
                            <h2>This is a tomato</h2>
                            <h3>Technologies Used: </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptate eligendi nihil saepe repellendus, ipsam possimus reprehenderit consequuntur labore, alias qui tenetur tempore! Sed a reprehenderit ut commodi optio modi?</p>
                        </div>
                    </div>
                    <div className="single-project-container">
                        <Link to="/projects/1" className="image-container"><img src={placeholder} alt="" /></Link>
                        <div className="content">
                            <h2>This is a tomato</h2>
                            <h3>Technologies Used: </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptate eligendi nihil saepe repellendus, ipsam possimus reprehenderit consequuntur labore, alias qui tenetur tempore! Sed a reprehenderit ut commodi optio modi?</p>
                        </div>
                    </div>

                </div>



            </div>

            <div className="backend-container">
                <h1>BACK-END Projects</h1>

                <div className="project-container">
                    <div className="single-project-container">
                        <Link to="/projects/1" className="image-container"><img src={placeholder} alt="" /></Link>
                        <div className="content">
                            <h2>This is a tomato</h2>
                            <h3>Technologies Used: </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptate eligendi nihil saepe repellendus, ipsam possimus reprehenderit consequuntur labore, alias qui tenetur tempore! Sed a reprehenderit ut commodi optio modi?</p>
                        </div>
                    </div>
                    <div className="single-project-container">
                        <Link to="/projects/1" className="image-container"><img src={placeholder} alt="" /></Link>
                        <div className="content">
                            <h2>This is a tomato</h2>
                            <h3>Technologies Used: </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptate eligendi nihil saepe repellendus, ipsam possimus reprehenderit consequuntur labore, alias qui tenetur tempore! Sed a reprehenderit ut commodi optio modi?</p>
                        </div>
                    </div>
                    <div className="single-project-container">
                        <Link to="/projects/1" className="image-container"><img src={placeholder} alt="" /></Link>
                        <div className="content">
                            <h2>This is a tomato</h2>
                            <h3>Technologies Used: </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptate eligendi nihil saepe repellendus, ipsam possimus reprehenderit consequuntur labore, alias qui tenetur tempore! Sed a reprehenderit ut commodi optio modi?</p>
                        </div>
                    </div>
                    <div className="single-project-container">
                        <Link to="/projects/1" className="image-container"><img src={placeholder} alt="" /></Link>
                        <div className="content">
                            <h2>This is a tomato</h2>
                            <h3>Technologies Used: </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptate eligendi nihil saepe repellendus, ipsam possimus reprehenderit consequuntur labore, alias qui tenetur tempore! Sed a reprehenderit ut commodi optio modi?</p>
                        </div>
                    </div>

                </div>



            </div>


        </>

    )

}

export default Project;