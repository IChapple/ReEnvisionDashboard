import { Component } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdInput } from '@angular2-material/input';
import { MdCheckbox } from '@angular2-material/checkbox';
import { MdRadioButton, MdRadioGroup, MdRadioDispatcher } from '@angular2-material/radio';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';

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
    MdButton,
    MdInput,
    MdCheckbox,
    MdRadioGroup,
    MdRadioButton,
    MdIcon
  ],
  providers: [MdIconRegistry, MdRadioDispatcher]
})
export class ReEnvisionDashboardAppComponent {
  views:Object[] = [
    {
      name: "Account-Info",
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
      name: "Patient-Info",
      description: "Component for viewing general patient information",
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
