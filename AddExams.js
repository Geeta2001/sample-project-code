import React, { Fragment, useEffect } from "react";
import { Container, Form, FormGroup, Input, Button } from "reactstrap";

const AddExams=()=> {
    useEffect(()=> {
        document.title="Add exams"
    }, []);
    return (
        <Fragment>
            <center><h1>Add exam details</h1></center>
            <Form>
                <FormGroup>
                    <b><label for="id">Exam id</label></b>
                    <Input 
                    type="text" 
                    placeholder="Enter id" 
                    id="id" />
                </FormGroup>
                <FormGroup>
                    <b><label for="exam">Exam name</label></b>
                    <Input 
                    type="text" 
                    placeholder="Enter exam name"  
                    id="name" />
                </FormGroup>
                <Container className="text-center">
                    <Button color="success">Add exam</Button> <space/>
                </Container>
            </Form>
        </Fragment>
    );
};
export default AddExams;