import { View } from '../models/view.model';

export var Views: View[] = [
    {
      name: "Account-Information",
      description: "Component for editing account information",
      icon: "assignment ind",
      cols: 1,
      rows: 1,
      color: 'lightblue'
    },
    //Should Texting and PhoneBook really be the same component
    {
      name: "Account-Phones",
      description: "Component for editing the account phonebook",
      icon: "assignment ind",
      cols: 1,
      rows: 1,
      color: 'lightblue'
    },
    {
      name: "Account-Texting",
      description: "Component for editing account texting preferences",
      icon: "assignment ind",
      cols: 1,
      rows: 1,
      color: 'lightblue'
    },
    {
      name: "Patient-Demographics",
      description: "Component for viewing general patient information",
      icon: "face",
      cols: 1,
      rows: 1,
      color: 'lightblue'
    },
    {
      name: "Patient-Appointments",
      description: "Component for viewing a list of patient appointments",
      icon: "face",
      cols: 1,
      rows: 1,
      color: 'lightblue'
    },
    //Should these 3 Components really be the same component
    {
      name: "Patient-Allergy-List",
      description: "Component for viewing a list of patient allergies",
      icon: "face",
      cols: 1,
      rows: 1,
      color: 'lightblue'
    },
    {
      name: "Patient-Condition-List",
      description: "Component for viewing a list of patient Medical Conditions",
      icon: "face",
      cols: 1,
      rows: 1,
      color: 'lightblue'
    },
    {
      name: "Patient-Medication-List",
      description: "Component for viewing a list of patient Medications",
      icon: "face",
      cols: 1,
      rows: 1,
      color: 'lightblue'
    }
];