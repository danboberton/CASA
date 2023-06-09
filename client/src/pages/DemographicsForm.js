import React from "react";
import {Button, Form, FormGroup, Label, Input, FormText, Table, Col, Row} from 'reactstrap';

export default function DemographicsForm(props){

    const handleAge = (e) =>{
        let updateObject = props.context.experimentState.getCopy();
        updateObject.age = e.target.value;
        props.context.setExperimentState(updateObject)
    }

    const handleGender = (e) =>{
        let updateObject = props.context.experimentState.getCopy();
        updateObject.gender = e.target.attributes.id.nodeValue;
        props.context.setExperimentState(updateObject);
    }

    const handleCompUse = (e) =>{
        let updateObject = props.context.experimentState.getCopy();
        updateObject.computerUse = e.target.attributes.id.nodeValue;
        props.context.setExperimentState(updateObject);
    }

    const handleBrand = (e) =>{
        let updateObject = props.context.experimentState.getCopy();
        updateObject.brand = e.target.attributes.id.nodeValue;
        props.context.setExperimentState(updateObject);
    }

    const handleSilent = (e) =>{
        let updateObject = props.context.experimentState.getCopy();
        updateObject.silent = e.target.attributes.id.nodeValue;
        props.context.setExperimentState(updateObject);
    }

    const handleDefaultNotification = (e) =>{
        let updateObject = props.context.experimentState.getCopy();
        updateObject.defaultNotification = e.target.attributes.id.nodeValue;
        props.context.setExperimentState(updateObject);
    }

    return(
        <div className={"content"}>
            <h1>Demographics Form</h1>
            <div className={"form-container"}>
                <Table className={"form text-body"}>
                    <thead>
                        <tr>
                            <th>Question</th>
                            <th>Response</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Label for="gender" sm={2}>Gender:</Label></td>
                            <td>
                                <FormGroup className={"formGroup"}
                                           onChange={handleGender}>
                                    <Label check>
                                        <Input type="radio" name="radio-gender" id="female" />{' '}
                                        Female
                                    </Label><br/>
                                    <Label check>
                                        <Input type="radio" name="radio-gender" id="male" />{' '}
                                        Male
                                    </Label><br/>
                                    <Label check>
                                        <Input type="radio" name="radio-gender" id="other"/>{' '}
                                        Prefer not to say
                                    </Label>
                                </FormGroup>
                            </td>
                        </tr>

                        <tr>
                            <td><Label for="age">Age:</Label></td>
                            <td>
                                <FormGroup className={"formGroup"} row>
                                    <Input type="text" name="text1" id="Age" placeholder="Enter your age"
                                           onChange={handleAge}/>{' '}
                                </FormGroup>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <Label for="Hours"  sm={3}>How many hours on average do you use a computer per day?</Label>
                            </td>
                            <td>
                                <FormGroup className={"formGroup"} onChange={handleCompUse} row>
                                    <Label check>
                                        <Input type="radio" name="radio-compuse" id="1-3"/>{' '}
                                        1 - 3
                                    </Label><br/>
                                    <Label check>
                                        <Input type="radio" name="radio-compuse" id="4-7"/>{' '}
                                        4 - 7
                                    </Label><br/>
                                    <Label check>
                                        <Input type="radio" name="radio-compuse" id="8-10"/>{' '}
                                        8 - 10
                                    </Label><br/>
                                    <Label check>
                                        <Input type="radio" name="radio-compuse" id="10+"/>{' '}
                                        10+
                                    </Label>
                                </FormGroup>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <Label for="Brand"  sm={3}>What brand is your phone?</Label>
                            </td>
                            <td>
                                <FormGroup className={"formGroup"} onChange={handleBrand} row>
                                    <Label check>
                                        <Input type="radio" name="radio-device" id="Apple"/>{' '}
                                        Apple
                                    </Label><br/>
                                    <Label check>
                                        <Input type="radio" name="radio-device" id="Samsung"/>{' '}
                                        Samsung
                                    </Label><br/>
                                    <Label check>
                                        <Input type="radio" name="radio-device" id="Pixel"/>{' '}
                                        Pixel
                                    </Label><br/>
                                    <Label check>
                                        <Input type="radio" name="radio-device" id="LG"/>{' '}
                                        LG
                                    </Label><br/>
                                    <Label check>
                                        <Input type="radio" name="radio-device" id="Nokia"/>{' '}
                                        Nokia
                                    </Label><br/>
                                    <Label check>
                                        <Input type="radio" name="radio-device" id="Other"/>{' '}
                                        Other
                                    </Label><br/>
                                </FormGroup>
                            </td>
                        </tr>

                        <tr>
                            <td><Label for="silent" sm={2}>How often is your phone on silent during the day?</Label></td>
                            <td>
                                <FormGroup className={"formGroup"} row
                                           onChange={handleSilent}>
                                    <Label check>
                                        <Input type="radio" name="radio-silent" id="1" />{' '}
                                        1 - never
                                    </Label><br/>
                                    <Label check>
                                        <Input type="radio" name="radio-silent" id="2" />{' '}
                                        2 - sometimes
                                    </Label><br/>
                                    <Label check>
                                        <Input type="radio" name="radio-silent" id="3"/>{' '}
                                        3 - half of the time
                                    </Label><br/>
                                    <Label check>
                                        <Input type="radio" name="radio-silent" id="4"/>{' '}
                                        4 - most of the time
                                    </Label><br/>
                                    <Label check>
                                        <Input type="radio" name="radio-silent" id="5"/>{' '}
                                        5 - always
                                    </Label>
                                </FormGroup>
                            </td>
                        </tr>

                        <tr>
                            <td><Label for="defaultNotification" sm={2}>Do you use the default notification sound on your phone?</Label></td>
                            <td>
                                <FormGroup className={"formGroup"} row
                                           onChange={handleDefaultNotification}>
                                    <Label check>
                                        <Input type="radio" name="radio-default-notification" id="True" />{' '}
                                        Yes
                                    </Label><br/>
                                    <Label check>
                                        <Input type="radio" name="radio-default-notification" id="False" />{' '}
                                        No
                                    </Label>
                                </FormGroup>
                            </td>
                        </tr>

                    </tbody>
                </Table>
                
            </div>
        </div>
    )
}
