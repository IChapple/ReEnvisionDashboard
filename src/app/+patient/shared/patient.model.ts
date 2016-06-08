export class Patient {
    id: number;
    fName: string;
    mName: string;
    lName: string;
    nickname: string;
    gender: Gender;
    dob: Date;
    language: Language;
    email: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    ethnicity: Ethnicity;
    race: Race; 
}

export enum PatientComponentStatus {
    Demographics,
    Appointments,
    Allergies,
    Conditions,
    Medications
}


//TODO: These enums are private for now, should be placed in the main shared folder
// and imported here at a later time
enum Gender {
    Male,
    Female
}
enum Ethnicity {
    'Hispanic Or Latino',
    'Not Hispanic Or Latino',
    Declined
}
enum Language {
    English,
    Spanish,
    French
}
enum Race {
    'Am.Indn/Alsk',
    Black,
    'Pacific Isle',
    Decline,
    Asian,
    White,
    'Other Race'
}