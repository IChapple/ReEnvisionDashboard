//External
import { Component } from '@angular/core';

//Material Components
import { MdToolbar }              from '@angular2-material/toolbar';
import { MD_SIDENAV_DIRECTIVES }  from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES }     from '@angular2-material/list';
import { MD_CARD_DIRECTIVES }     from '@angular2-material/card';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

//Local
import { PatientComponent } from './+patient/patient.component';
import { NavComponent, ComponentViews } from './shared';

@Component({
  moduleId: module.id,
  selector: 're-envision-dashboard-app',
  templateUrl: 're-envision-dashboard.component.html',
  styleUrls: ['re-envision-dashboard.component.css'],
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MdIcon,
    PatientComponent
  ],
  providers: [MdIconRegistry]
})
export class ReEnvisionDashboardAppComponent {
  title = "Dox Re-Envision Dashboard";

  //TODO: This object needs to get moved to another file and defined as a class
  views:Object[] = [
    {
      name: "Account-Information",
      description: "Component for editing account information",
      icon: "assignment ind"
    },
    //Should Texting and PhoneBook really be the same component
    {
      name: "Account-Phones",
      description: "Component for editing the account phonebook",
      icon: "assignment ind"
    },
    {
      name: "Account-Texting",
      description: "Component for editing account texting preferences",
      icon: "assignment ind"
    },
    {
      name: "Patient-Demographics",
      description: "Component for viewing general patient information",
      icon: "face"
    },
    {
      name: "Patient-Appointments",
      description: "Component for viewing a list of patient appointments",
      icon: "face"
    },
    //Should these 3 Components really be the same component
    {
      name: "Patient-Allergy-List",
      description: "Component for viewing a list of patient allergies",
      icon: "face"
    },
    {
      name: "Patient-Condition-List",
      description: "Component for viewing a list of patient Medical Conditions",
      icon: "face"
    },
    {
      name: "Patient-Medication-List",
      description: "Component for viewing a list of patient Medications",
      icon: "face"
    }
  ];
}
