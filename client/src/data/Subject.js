import getExperimentCount from "../api/getExperimentCount"
import { experimentArray, experimentConfig0 } from "../components/ExperimentDesign";
import {UserActionData} from "./UserActionData";

export default class subject {
    gender = undefined;
    age = undefined;
    computerUse = undefined;
    groupID = undefined;
    assignedExperiment = undefined;
    brand = undefined;
    silent = undefined;
    defaultNotification = undefined;
    phaseData = [];

    #NUMBER_OF_PHASES = 3;

    constructor(knownGroupID, knownAssignedExperiment) {
        for (let i = 0; i < this.#NUMBER_OF_PHASES; i++){
            this.phaseData.push(new UserActionData())
        }

        // If GroupID of AssignedExperiment is already known, don't
        //   use an API call to generate new data
        //this.groupID = knownGroupID ? knownGroupID : generate_groupID();
        //this.assignedExperiment = knownAssignedExperiment ? knownAssignedExperiment : AssignExp(this.groupID);
        if (knownGroupID) {
            this.groupID = knownGroupID;
            this.assignedExperiment = AssignExp(this.groupID);
        } else {
            generate_groupID().then((groupID) => {
                this.groupID = groupID;
                this.assignedExperiment = AssignExp(this.groupID);
            });
        }
    }

    getCopy(){
        let copy = new subject(this.groupID, this.assignedExperiment);
        copy.gender = this.gender;
        copy.age = this.age;
        copy.computerUse = this.computerUse;
        copy.phaseData = this.phaseData;
        copy.brand = this.brand;
        copy.silent = this.silent;
        copy.defaultNotification = this.defaultNotification;


        return copy;
    }

    toString(){
        return JSON.stringify(this);
        }

    set actions(actionsInput){
        this.phaseData.push(actionsInput);
    }

    get actions(){
        return this.phaseData;
    }
}

async function generate_groupID() {
    let unique_id_num; //store unique id number
    let group_char;
    let final_id;
    
    //getExperimentCount().then((count)=> {entries = JSON.stringify(count)});

    async function run() {
        const entries = await getExperimentCount();
        return entries;
    }
    
    let expCount;
    let resultobj 
    resultobj = await run();
    expCount = resultobj.count;

    console.log("getExperimentCount from Subject constructor")
    console.log("number for switch statement:", expCount, typeof expCount)
    switch (expCount) {
        case 0:
            group_char = 'A';
            break;
        case 1:
            group_char = 'B';
            break;
        case 2: 
            group_char = 'C';
            break;
        case 3: 
            group_char = 'D';
            break;
        case 4:
            group_char = 'A'
            break;
        case 5:
            group_char = 'B'
            break;
        case 6:
            group_char = 'C'
            break;
        case 7:
            group_char = 'D';
            break;
        case 8:
            group_char = 'A';
            break;
        case 9: 
            group_char = 'B';
            break;
        case 10: 
            group_char = 'C';
            break;
        case 11:
            group_char = 'D';
            break;
        case 12:
            group_char = 'A';
            break;
        case 13:
            group_char = 'B';
            break;
        case 14:
            group_char = 'C';
            break;
        case 15:
            group_char = 'D';
            break;
        case 16: 
            group_char = 'A';
            break;
        case 17: 
            group_char = 'B';
            break;
        case 18:
            group_char = 'C'
            break;
        case 19:
            group_char = 'D'
            break;
        case 20:
            group_char = 'A'
            break;
        case 21:
            group_char = 'B';
            break;
        case 22:
            group_char = 'C';
            break;
        case 23: 
            group_char = 'D';
            break;
        default:
            group_char = 'Z'
    }

    //randomly generate id for subject, can change to something with a standard distribution
    
    unique_id_num = Math.floor(Math.random() * (10000))
    unique_id_num = unique_id_num.toString();
    final_id = group_char.concat("-", unique_id_num);
    console.log("finalID: ", final_id);
    
    return final_id;
}

async function AssignExp(groupID) {

    console.log("groupID:", groupID);
    let group_char = groupID.charAt(0)
    let experiment_group;

    async function run() {
        const count = await getExperimentCount();
        return count;
    }
    
    let entries;
    let resultobj 
    resultobj = await run();
    entries = resultobj.count;

    console.log("My group char: ", group_char, "my entries: ", entries)

    if (group_char === 'A' && (entries === 0 || entries === 4)) {
        experiment_group = experimentArray.expArray[0];
    } else if (group_char === 'A' && (entries === 8 || entries === 12)) {
        experiment_group = experimentArray.expArray[1];
    } else if (group_char === 'A' && (entries === 16 || entries === 20)) {
        experiment_group = experimentArray.expArray[2];
    } else if (group_char === 'B' && (entries === 1 || entries === 5)) {
        experiment_group = experimentConfig0;
        console.log(experiment_group, typeof experiment_group);
    } else if (group_char === 'B' && (entries === 9 || entries === 13)) {
        experiment_group = experimentArray.expArray[4];
    } else if (group_char === 'B' && (entries === 17 || entries === 21)) {
        experiment_group = experimentArray.expArray[5];
    } else if (group_char === 'C' && (entries === 2 || entries === 6)) {
        experiment_group = experimentArray.expArray[6];
    } else if (group_char === 'C' && (entries === 10 || entries === 14)) {
        experiment_group = experimentArray.expArray[7];
    } else if (group_char === 'C' && (entries === 18 || entries === 22)) {
        experiment_group = experimentArray.expArray[8];
    } else if (group_char === 'D' && (entries === 3 || entries === 7)) {
        experiment_group = experimentArray.expArray[9];
    } else if (group_char === 'D' && (entries === 11 || entries === 15)) {
        experiment_group = experimentArray.expArray[10];
    } else if (group_char === 'D' && (entries === 19 || entries === 23)) {
        experiment_group = experimentArray.expArray[11];
    }

    console.log("my experiment group:", experiment_group);
    return experiment_group;
}