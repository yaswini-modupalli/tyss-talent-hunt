export class Interview {
    constructor(
        public _id: string,
        public cname: String,
        public gender: String,
        public sdate: Date,
        public stack: String,
        public contactNo: Number,
        public email: String,
        public location: String,
        public interviewPanel: String,
        public relocate: String,
        public currOrg ?: String,
        public totalExp ?: String,
        public relevantExp ?: String,
        public cctc ?: String,
        public ectc ?: String,
        public noticePeriod ?: String
        ){}
}

