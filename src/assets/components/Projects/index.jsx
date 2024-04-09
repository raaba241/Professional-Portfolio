import { Link } from "react-router-dom"
import "./style.css"
import placeholder from "../../images/placeholder.jfif"
import { motion } from "framer-motion"
import AnimatedPage from "../AnimatedPage"
import employeeManagerImg from "../../images/employee.webp"

const Project = () => {

    return (

        <>

            <AnimatedPage>
                <div className="backend-container">
                    <h1>FRONT-END Projects</h1>

                    <div className="project-container">
                        <div className="single-project-container">
                            <Link to="/projects/1" className="image-container"><img src={employeeManagerImg} alt="" /></Link>
                            <div className="content">
                                <h2>This is a tomato</h2>
                                <h3>Technologies Used: </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptate eligendi nihil saepe repellendus, ipsam possimus reprehenderit consequuntur labore, alias qui tenetur tempore! Sed a reprehenderit ut commodi optio modi?</p>
                            </div>
                        </div>
                        <div className="single-project-container">
                            <Link to="/projects/1" className="image-container"><img src={employeeManagerImg} alt="" /></Link>
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
                            <Link to="/projects/1" className="image-container"><img src={employeeManagerImg} alt="" /></Link>
                            <div className="content">
                                <h2>Employee-Manager!</h2>
                                <h3>Technologies Used: SQL, NODE.js </h3>
                                <p>Employee-Tracker was created for business to manage their employees in a company. You can view/add employees or departments and update/add roles within the company.</p>
                            </div>
                        </div>
                        <div className="single-project-container">
                            <Link to="/projects/1" className="image-container"><img src={employeeManagerImg} alt="" /></Link>
                            <div className="content">
                                <h2>Ecommerce Database</h2>
                                <h3>Technologies Used: SQL, JS, Node.js, MVC Paradigm</h3>
                                <p>A database created for a business to be able to manage/monitor their inventory. Managers can Add, Delete, Update,Create products using this app.</p>
                            </div>
                        </div>

                    </div>



                </div>
                <div className="backend-container">
                    <h1>FULL-STACK Projects</h1>

                    <div className="project-container">
                        <div className="single-project-container">
                            <Link to="/projects/1" className="image-container"><img src={employeeManagerImg} alt="" /></Link>
                            <div className="content">
                                <h2>This is a tomato</h2>
                                <h3>Technologies Used: </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptate eligendi nihil saepe repellendus, ipsam possimus reprehenderit consequuntur labore, alias qui tenetur tempore! Sed a reprehenderit ut commodi optio modi?</p>
                            </div>
                        </div>
                        <div className="single-project-container">
                            <Link to="/projects/1" className="image-container"><img src={employeeManagerImg} alt="" /></Link>
                            <div className="content">
                                <h2>This is a tomato</h2>
                                <h3>Technologies Used: </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus voluptate eligendi nihil saepe repellendus, ipsam possimus reprehenderit consequuntur labore, alias qui tenetur tempore! Sed a reprehenderit ut commodi optio modi?</p>
                            </div>
                        </div>

                    </div>



                </div>



            </AnimatedPage>


        </>

    )

}

export default Project;