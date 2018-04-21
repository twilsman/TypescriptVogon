class DemoAccessor {

    constructor() { }

    GetResponses = async (): Promise<DemoResponse[]> => {

        let settings: JQueryAjaxSettings = {
            
            url: "/Scripts/demo/data/responses.json",

            dataFilter: (data: string, type: string): string => {

                let json: any = JSON.parse(data);

                let result: DemoResponse[] = json.map((i: any): DemoResponse => {
                    return {
                        Sentiment: i.sentiment,
                        Text: i.text
                    };
                });

                return JSON.stringify(result);
            },

            dataType: "json",

            success: () => { },
           
        }

        return $.ajax(settings);

    }
}
