export class Requirement {

    constructor(public _id: string,
                public client: string,
                public stack: string,
                public experience: string,
                public location: string,
                public positions: number,
                public designation: string,
                public description: string,
                public closeDate: Date  ) {}
}
