export default {
    BASE_API : 'http://192.168.1.115:3500/apis/', 
    // BASE_API : 'http://10.0.2.2:3500/apis/', 
    // BASE_API : 'http://3.208.132.146:3500/apis/', 
    BASE64_HEADER : 'data:image/png;base64, ',
}

export const USER_KEY = 'aft-user';

export const USER_DATA = {
    firstname: '',
    lastname: '',
    ssn: '',
}

export const DCNSubmittedHeader = {
    DcnId: '',
    SocialSecurityNum: '',
    ClientId: '',
    LastSaturdayDate: '',
    HourlyFlag: '',
    LiveInFlag: '',
    OvernightFlag: '',
    CaregiverSignature: '',
    CaregiverSignatureDate: '',
    ClientSignature: '',
    ClientSignatureDate: '',
    HasPAF: '',
    PafId: '',
    SendToPhoneFlag: '',
    Phone1: '',
    Phone2: '',
    SendToEmailFlag: '',
    Email1: '',
    Email2: '',
    DateTimeOfSubmission: '',
    GPSLocationOfSubmission: '',
    ImageOfDCN: '',
    PDFOfDCN: '',
    createdBy: '',
    created: '',
    updatedBy: '',
    updated: '',
}

export const DcnSubmittedDetail = {
    DcnDetailId: '',
    DcnId: '',
    DayOfWeek: '',
    TimeIn1: '',
    TimeOut1: '',
    TimeIn2: '',
    TimeOut2: '',
    TimeIn3: '',
    TimeOut3: '',
    TimeIn4: '',
    TimeOut4: '',
    HoursPerDay: '',
    MobilityWalkingMovingFlag: '',
    BathingShoweringFlag: '',
    DressingFlag: '',
    ToiletingFlag: '',
    EatingFlag: '',
    ContinenceBladderBowelFlag: '',
    MealPrepIncludingFlag: '',
    LaundryFlag: '',
    LightHousekeepingIncludingFlag: '',
    DcnPersonalCareHoursId: '',
    HomemakingHours: '',
    CompanionHours: '',
    RespiteHours: '',
    AttendantHours: '',
    createdBy: '',
    created: '',
    updatedBy: '',
    updated: '',
}