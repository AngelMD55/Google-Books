import React from 'react'
import { Row, Col } from "../Grid/index"

export default function SavedBook(props) {
    return (
        <div className="border container mb-3" id={props.id} >
            <Row>
                <Col size="12" className="d-flex">
                    <h3 className="float-left ml-4 mt-2" style={{ display: "inLine" }}>{props.title}</h3>
                    <button type="button" className="btn btn-primary m-2 float-right"><a href={props.link} style={{color:"white"}}>View</a></button>
                </Col>
            </Row>
            <Row>
                <div className="text-left ml-3 mr-3">
                    <p>&nbsp;&nbsp;Written by: {props.authors}</p>
                </div>
            </Row>
            <Row>
                <div className=" d-flex mr-3" style={{overflow:"auto"}}>
                    <Col size="md-3 lg-3">
                        <img className="mb-3 ml-5" style={{width:"200px", height:"200px"}} alt="Book Cover" src={props.image}></img>
                    </Col>
                    <Col size="md-9 lg-9">
                        <p className="text-left ml-4">{props.description}</p>
                    </Col>
                </div>
            </Row>
        </div>
    )
}